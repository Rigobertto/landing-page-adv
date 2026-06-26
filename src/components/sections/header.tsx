"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Para Quem É", href: "#para-quem-e" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Sobre", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
  ];

  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3 shadow-sm"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-2">
          <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-primary uppercase">
            Ana Kelly
          </span>
          <span className="h-4 w-[1px] bg-accent/60"></span>
          <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground font-semibold">
            Advocacia
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              className: "border-accent text-accent-foreground hover:bg-accent hover:text-white rounded-full transition-colors duration-300 font-medium text-sm"
            })}
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground hover:text-accent p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border/80"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-accent py-2 border-b border-border/20 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({
                    variant: "default",
                    className: "w-full bg-primary hover:bg-primary/95 text-primary-foreground rounded-full py-6 font-semibold flex items-center justify-center"
                  })}
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
