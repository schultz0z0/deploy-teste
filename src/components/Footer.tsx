import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/logo-congresso.png" 
                alt="24º Congresso Brasileiro dos Corretores de Seguros" 
                className="h-20 md:h-24 w-auto object-contain bg-white/10 rounded-lg p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }} 
              />
              <div className="hidden flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue via-brand-green to-brand-yellow flex items-center justify-center text-white font-bold text-xl">
                    24º
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-lg leading-none tracking-tight text-white">
                      CONGRESSO DOS
                    </span>
                    <span className="font-display font-bold text-sm leading-none text-brand-green">
                      CORRETORES DE SEGUROS
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              O maior evento de inovação e tecnologia para o mercado de seguros. Conectando corretores ao futuro da profissão.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/fenacorbr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://br.linkedin.com/company/fenacor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/FENACOR?fref=ts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/fenacor_oficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/user/FenacorOficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/sobre" className="hover:text-brand-teal transition-colors">Sobre o Evento</Link></li>
              <li><Link to="/programacao" className="hover:text-brand-teal transition-colors">Programação Completa</Link></li>
              <li><Link to="/palestrantes" className="hover:text-brand-teal transition-colors">Palestrantes</Link></li>
              <li><Link to="/expositores" className="hover:text-brand-teal transition-colors">Seja um Expositor</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Informações</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/inscricoes" className="hover:text-brand-teal transition-colors">Ingressos</Link></li>
              <li><Link to="/faq" className="hover:text-brand-teal transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/regulamento-inscricao" className="hover:text-brand-teal transition-colors">Regulamento de Inscrição</Link></li>
              <li><Link to="/politicas" className="hover:text-brand-teal transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/politicas" className="hover:text-brand-teal transition-colors">Termos de Uso</Link></li>
              <li><Link to="/contato" className="hover:text-brand-teal transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
                <span>
                  ExpoRio Cidade Nova<br />
                  Rua Beatriz Larragoiti Lucas, s/n<br />
                  Cidade Nova – Rio de Janeiro/RJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="mailto:24congresso@fenacor.org.br" className="hover:text-white transition-colors">
                  24congresso@fenacor.org.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="tel:+552130774777" className="hover:text-white transition-colors">
                  (21) 3077-4777
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Congresso Futuro. Todos os direitos reservados.</p>
          <p>Desenvolvido com tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
}
