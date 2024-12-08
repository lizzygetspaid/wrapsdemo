import React from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { Button } from '../common/Button';
import { useScrollLock } from '../../hooks/useScrollLock';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Height of the navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    if (isOpen) {
      setIsOpen(false);
      unlockScroll();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };

  return (
    <nav className="fixed w-full bg-black/90 text-white z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-gold-500" />
            <span className="ml-2 text-2xl font-bold">LUXURY WRAPS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                Home
              </NavLink>
              <NavLink href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                Services
              </NavLink>
              <NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                About
              </NavLink>
              <NavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                Contact
              </NavLink>
              <Button variant="primary" onClick={() => window.location.href = 'tel:+1234567890'}>
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={(e) => handleNavClick(e, 'services')}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

function NavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative hover:text-gold-500 px-3 py-2 text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gold-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block hover:bg-zinc-800 hover:text-gold-500 px-3 py-4 text-base font-medium transition-all duration-300"
    >
      {children}
    </a>
  );
}