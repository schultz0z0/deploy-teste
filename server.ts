import dotenv from 'dotenv';
import express from 'express';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT ?? 3000);
const isProduction = process.argv.includes('--prod');
const contactEmail = process.env.CONTACT_TO_EMAIL ?? '24congresso@fenacor.org.br';

app.use(express.json());

const normalizeValue = (value: unknown) => String(value ?? '').trim();

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

app.post('/api/contact', async (req, res) => {
  const firstName = normalizeValue(req.body?.firstName);
  const lastName = normalizeValue(req.body?.lastName);
  const email = normalizeValue(req.body?.email);
  const subject = normalizeValue(req.body?.subject) || 'Contato pelo site';
  const message = normalizeValue(req.body?.message);

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: 'Preencha nome, e-mail e mensagem.' });
  }

  const transporter = getTransporter();

  if (!transporter) {
    return res.status(500).json({ message: 'O envio ainda não está disponível. Configure SMTP_HOST, SMTP_PORT, SMTP_USER e SMTP_PASS no servidor.' });
  }

  const fullName = [firstName, lastName].filter(Boolean).join(' ');
  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || contactEmail;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: contactEmail,
      replyTo: email,
      subject: `[24º Congresso] ${subject}`,
      text: [
        `Nome: ${fullName || '-'}`,
        `E-mail: ${email}`,
        `Assunto: ${subject}`,
        '',
        'Mensagem:',
        message,
      ].join('\n'),
    });

    return res.status(200).json({ message: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Não foi possível enviar a mensagem no momento.' });
  }
});

const start = async () => {
  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      try {
        const template = await readFile(path.resolve(__dirname, 'index.html'), 'utf8');
        const html = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (error) {
        vite.ssrFixStacktrace(error as Error);
        next(error);
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

start();
