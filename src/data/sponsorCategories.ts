// Master
import allianz from '../Patrocinadores/Master/allianz.png';
import bradesco from '../Patrocinadores/Master/bradesco seguros.png';
import cnseg from '../Patrocinadores/Master/cnseg.png';
import ens from '../Patrocinadores/Master/ens.png';
import hdi from '../Patrocinadores/fechado/hdi.png';
import icatu from '../Patrocinadores/fechado/icatu.png';
import mag from '../Patrocinadores/fechado/mag_nova.png';
import mapfre from '../Patrocinadores/fechado/mapfre.png';
import porto from '../Patrocinadores/Master/porto.png';
import tokio from '../Patrocinadores/Master/tokio marine.png';
import zurich from '../Patrocinadores/Patrocinadores/zurich.png';

// Patrocinador/Expositor (Expositores + Patrocinador Expositor)
import axa from '../Patrocinadores/Expositores/AXA.png';
import capemisa from '../Patrocinadores/Patrocinadores/capemisa.png';
import c6 from '../Patrocinadores/Expositores/c6seg.png';
import ituran from '../Patrocinadores/Expositores/ituran.png';
import maxpar from '../Patrocinadores/Expositores/maxpar.png';
import pottencial from '../Patrocinadores/Expositores/pottencial.png';
import unimed from '../Patrocinadores/Expositores/UNIMED.png';

// Imports da pasta Patrocinador Expositor
import allseg from '../Patrocinadores/Patrocinador Expositor/allseg seguradora.png';
import bancorbras from '../Patrocinadores/Patrocinador Expositor/Bancorbras.png';
import justos from '../Patrocinadores/Patrocinador Expositor/Justos.png';
import mbm from '../Patrocinadores/Patrocinador Expositor/mbm.png';
import metlife from '../Patrocinadores/Patrocinador Expositor/Metlife.png';
import pilkington from '../Patrocinadores/Patrocinador Expositor/Pilkington.png';
import proauto from '../Patrocinadores/Patrocinador Expositor/Proauto.png';
import prudential from '../Patrocinadores/Patrocinador Expositor/Prudential.png';
import sabemi from '../Patrocinadores/Patrocinador Expositor/Sabemi.png';
import sicoob from '../Patrocinadores/Patrocinador Expositor/Sicoob.png';
import sulamerica from '../Patrocinadores/Patrocinador Expositor/SulAmerica.png';
import centauro from '../Patrocinadores/Patrocinador Expositor/centauro.png';
import irb from '../Patrocinadores/Patrocinador Expositor/irb.png';
import globoseg from '../Patrocinadores/Patrocinador Expositor/globoseg.png';

// Patrocinador Institucional
import cnc from '../Patrocinadores/Apoio Institucional/cnc.png';
import fecomercio from '../Patrocinadores/Apoio Institucional/fecomercio.png';
import ibdcor from '../Patrocinadores/Apoio Institucional/Ibdcor.png';
import ibracor from '../Patrocinadores/Apoio Institucional/ibracor.png';

// Realização
import fenacor from '../Patrocinadores/Realização/fenacor.png';
import sincor from '../Patrocinadores/Realização/sincor.png';

export interface SponsorCategory {
  title: string;
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  sponsors: {
    id: string;
    name: string;
    logo: string;
    url: string;
  }[];
}

export const sponsorCategories: SponsorCategory[] = [
  {
    title: 'Master',
    size: 'xl',
    sponsors: [
      { id: 'm1', name: 'Allianz', logo: allianz, url: '#' },
      { id: 'm2', name: 'Bradesco', logo: bradesco, url: '#' },
      { id: 'm3', name: 'CNseg', logo: cnseg, url: '#' },
      { id: 'm4', name: 'ENS', logo: ens, url: '#' },
      { id: 'm5', name: 'HDI/Yelum', logo: hdi, url: '#' },
      { id: 'm6', name: 'Icatu Seguros', logo: icatu, url: '#' },
      { id: 'm7', name: 'MAG', logo: mag, url: '#' },
      { id: 'm8', name: 'Mapfre', logo: mapfre, url: '#' },
      { id: 'm9', name: 'Porto', logo: porto, url: '#' },
      { id: 'm10', name: 'Tokio Marine', logo: tokio, url: '#' },
      { id: 'm11', name: 'Zurich', logo: zurich, url: '#' },
    ]
  },
  {
    title: 'Patrocinador/Expositor',
    size: 'md',
    sponsors: [
      { id: 'pe1', name: 'Allseg Seguradora', logo: allseg, url: '#' },
      { id: 'pe2', name: 'Axa', logo: axa, url: '#' },
      { id: 'pe3', name: 'Bancorbrás', logo: bancorbras, url: '#' },
      { id: 'pe4', name: 'Capemisa', logo: capemisa, url: '#' },
      { id: 'pe19', name: 'Centauro', logo: centauro, url: '#' },
      { id: 'pe5', name: 'C6 Bank', logo: c6, url: '#' },
      { id: 'pe21', name: 'GloboSeg', logo: globoseg, url: '#' },
      { id: 'pe6', name: 'Ituran', logo: ituran, url: '#' },
      { id: 'pe20', name: 'IRB(Seg)', logo: irb, url: '#' },
      { id: 'pe7', name: 'Justos', logo: justos, url: '#' },
      { id: 'pe8', name: 'Maxpar', logo: maxpar, url: '#' },
      { id: 'pe9', name: 'MBM', logo: mbm, url: '#' },
      { id: 'pe10', name: 'MetLife', logo: metlife, url: '#' },
      { id: 'pe11', name: 'Pilkington', logo: pilkington, url: '#' },
      { id: 'pe12', name: 'Pottencial', logo: pottencial, url: '#' },
      { id: 'pe13', name: 'Proauto', logo: proauto, url: '#' },
      { id: 'pe14', name: 'Prudential', logo: prudential, url: '#' },
      { id: 'pe15', name: 'Sabemi', logo: sabemi, url: '#' },
      { id: 'pe16', name: 'Sicoob', logo: sicoob, url: '#' },
      { id: 'pe17', name: 'SulAmérica', logo: sulamerica, url: '#' },
      { id: 'pe18', name: 'Unimed', logo: unimed, url: '#' },
    ]
  },
  {
    title: 'Patrocinador Institucional',
    size: 'md',
    sponsors: [
      { id: 'pi1', name: 'IBDCOR', logo: ibdcor, url: '#' },
    ]
  },
  {
    title: 'Parceiros Institucionais',
    size: 'md',
    sponsors: [
      { id: 'pa1', name: 'CNC', logo: cnc, url: '#' },
      { id: 'pa2', name: 'Fecomércio RJ', logo: fecomercio, url: '#' },
      { id: 'pa3', name: 'Ibracor', logo: ibracor, url: '#' },
    ]
  },
  {
    title: 'Realização',
    size: 'sm',
    sponsors: [
      { id: 'r1', name: 'Fenacor', logo: fenacor, url: '#' },
      { id: 'r2', name: 'Sincor', logo: sincor, url: '#' },
      { id: 'r3', name: 'ENS', logo: ens, url: '#' },
    ]
  }
];
