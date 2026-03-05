import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, Shield, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PHONE = "+15597361577";
const PHONE_DISPLAY = "+1 559-736-1577";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal-dark shadow-2xl shadow-black/50 border-b border-white/5"
            : "bg-charcoal-dark"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-orange flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-tight block">
                  Control Roofing
                </span>
                <span className="text-[10px] text-orange font-accent font-semibold tracking-widest uppercase leading-tight block">
                  Visalia, CA
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  data-ocid={`nav.${label.toLowerCase()}.link`}
                  className={`px-4 py-2 text-sm font-body font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-orange after:transition-transform after:duration-200 ${
                    currentPath === to
                      ? "text-orange after:scale-x-100"
                      : "text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${PHONE}`}
                data-ocid="nav.call.button"
                className="hidden sm:flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-display font-bold px-4 py-2 text-sm transition-all duration-200 shadow-orange-glow hover:shadow-none"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">{PHONE_DISPLAY}</span>
                <span className="lg:hidden">Call Now</span>
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                data-ocid="nav.menu.toggle"
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-charcoal border-t border-white/10"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    data-ocid={`nav.${label.toLowerCase()}.link`}
                    className={`px-4 py-3 text-sm font-body font-medium transition-colors duration-200 block ${
                      currentPath === to
                        ? "text-orange"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href={`tel:${PHONE}`}
                  className="mt-2 flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-display font-bold px-4 py-3 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-charcoal-dark text-white">
        {/* Orange top bar */}
        <div className="h-1 bg-orange w-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold text-white text-lg">
                  Control Roofing
                </span>
              </div>
              <p className="text-white/60 text-sm font-body leading-relaxed">
                Visalia's trusted roofing experts with 3+ years of local
                service. Available 24/7 for all your roofing needs.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-orange uppercase tracking-widest text-xs mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-sm font-body">
                <li>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-white hover:text-orange transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="text-white/60">Open 24/7 — Always Available</li>
                <li className="text-white/60">Visalia, CA — Central Valley</li>
              </ul>
            </div>

            {/* Nav Links */}
            <div>
              <h3 className="font-display font-bold text-orange uppercase tracking-widest text-xs mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-white/60 hover:text-orange text-sm font-body transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs font-body">
              © {new Date().getFullYear()} Control Roofing, Visalia CA. All
              rights reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 text-xs font-body transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
