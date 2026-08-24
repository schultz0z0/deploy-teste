import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';

import { speakers } from './speakers';

const expectedSpeakers = [
  { name: 'Bruno Sobral', role: 'Diretor-Executivo', company: 'FenaSaúde', image: '/fotos e bios plenaria/Bruno Sobral.jpg', hasBio: true },
  { name: 'Heitor Augusto', role: 'Vice-Presidente Comercial de Saúde e Odonto', company: 'SulAmérica', image: '/fotos e bios plenaria/heitor augusto.jpeg', hasBio: true },
  { name: 'Luciano Calheiros', role: 'Vice-Presidente de Comercial, Marketing e Experiência do Cliente', company: 'AXA', image: '/sala de negócios foto/AXA/Luciano Calheiros.jpg', hasBio: true },
  { name: 'Flávio Pires', role: 'Gerente de Subscrição Auto Frota', company: 'AXA', image: '/sala de negócios foto/AXA/Flavio Pires.jpg', hasBio: true },
  { name: 'Alessandro Castro Paiva', role: 'Consultor de Vendas Consultivas', company: 'ICATU', image: '/sala de negócios foto/ICATU/Alessandro Paiva.png', hasBio: false },
  { name: 'Gustavo Arruda', role: 'Superintendente de Produtos Vida', company: 'ICATU', image: '/sala de negócios foto/ICATU/GUSTAVO ARRUDA_42 1.jpg', hasBio: false },
  { name: 'Henrique Jenkins', role: 'Diretor Comercial da Filial NO e NE', company: 'ICATU', image: '/sala de negócios foto/ICATU/Henrique Jenkins_ 6.jpg', hasBio: false },
  { name: 'Marcelo Oliveira', role: 'Diretor Comercial da Filial RJ e ES', company: 'ICATU', image: '/sala de negócios foto/ICATU/Marcelo Oliveira.JPG', hasBio: false },
  { name: 'Natália Maciel', role: 'Gerente de Marketing', company: 'ICATU', image: '/sala de negócios foto/ICATU/Natalia Maciel.jpg', hasBio: false },
  { name: 'Talita Raupp', role: 'Superintendente de Produtos Previdência e Capitalização', company: 'ICATU', image: '/sala de negócios foto/ICATU/TALITA RAUPP_136.jpg', hasBio: false },
] as const;

test('disponibiliza os dez palestrantes aprovados com seus dados e fotos oficiais', () => {
  for (const expected of expectedSpeakers) {
    const speaker = speakers.find(({ name }) => name === expected.name);

    assert.ok(speaker, `${expected.name} não foi encontrado`);
    assert.equal(speaker.role, expected.role);
    assert.equal(speaker.company, expected.company);
    assert.equal(speaker.image, expected.image);
    assert.equal(Boolean(speaker.bio.trim()), expected.hasBio);
    assert.ok(existsSync(resolve('public', decodeURIComponent(speaker.image.slice(1)))), `Foto não encontrada: ${speaker.image}`);
  }
});
