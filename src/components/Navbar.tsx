import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Sobre', 
    path: '/sobre',
    dropdown: [
      { name: 'Apresentação', path: '/apresentacao' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Termos de uso de imagem', path: '/termos-imagem' },
      { name: 'Política de privacidade', path: '/privacidade' },
      { name: 'Regulamento de Inscrição', path: '/regulamento-inscricao' },
      { name: 'Regulamento Ação Promocional CONSEGNNE', path: '/regulamento-consegnne' },
    ]
  },
  { 
    name: 'Serviços', 
    path: '#',
    dropdown: [
      // { name: 'Hospedagem', path: '/hospedagem' },
      { name: 'App Oficial', path: '/app' },
    ]
  },
  { name: 'Patrocinadores', path: '/expositores' },
  { 
    name: 'Mídia', 
    path: '#',
    dropdown: [
      { name: 'Galeria de Fotos', path: '/galeria' },
      { name: 'Imprensa', path: '/imprensa' },
    ]
  },
  { name: 'Contato', path: '/contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-sm border-white/10 py-3'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className={cn(
        "container mx-auto px-4 md:px-6 flex items-center transition-all duration-300",
        scrolled 
          ? "justify-between" 
          : "justify-between lg:flex-col lg:justify-center lg:gap-6"
      )}>
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/logo-congresso.png" 
            alt="24º Congresso Brasileiro dos Corretores de Seguros" 
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled ? "h-16" : "h-20 lg:h-40"
            )}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} 
          />
          {/* Fallback text logo if image fails to load */}
          <div className="hidden flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue via-brand-green to-brand-yellow flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              24º
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-tight transition-colors text-white">
                CONGRESSO DOS
              </span>
              <span className="font-display font-bold text-sm leading-none text-brand-yellow">
                CORRETORES DE SEGUROS
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors relative py-2 flex items-center gap-1',
                  location.pathname === link.path || (link.dropdown && link.dropdown.some(d => d.path === location.pathname)) 
                    ? 'text-brand-yellow' 
                    : 'text-white hover:text-brand-yellow'
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )} />
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-2 overflow-hidden"
                    >
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link
            to="/inscricoes"
            className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-blue font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            Inscreva-se
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full transition-colors text-white hover:bg-white/10"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className={cn(
                          'flex items-center justify-between w-full text-lg font-medium py-2 border-b border-slate-50',
                          location.pathname.startsWith(link.path) ? 'text-brand-blue' : 'text-slate-600'
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2 border-l-2 border-slate-100 ml-2"
                          >
                            {link.dropdown.map((subLink) => (
                              <Link
                                key={subLink.path}
                                to={subLink.path}
                                className="block py-2 text-slate-500 hover:text-brand-blue"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        'block text-lg font-medium py-2 border-b border-slate-50',
                        location.pathname === link.path ? 'text-brand-blue' : 'text-slate-600'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/inscricoes"
                className="mt-4 w-full py-3 rounded-xl bg-brand-blue text-white font-bold text-center shadow-md active:scale-95 transition-transform"
              >
                Garanta seu Ingresso
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
