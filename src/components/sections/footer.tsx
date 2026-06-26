"use client";

import React from "react";
import { Mail, Phone, MapPin, Scale, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20conversar%20sobre%20um%20caso.";

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-accent/25 relative overflow-hidden">
      {/* Subtle gold decoration */}
      <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-accent/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Column 1 - Brand & Description */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg font-bold tracking-widest text-primary-foreground uppercase">
                Ana Kelly
              </span>
              <span className="h-4 w-[1px] bg-accent/60"></span>
              <span className="font-sans text-xs tracking-wider uppercase text-accent font-semibold">
                Advocacia
              </span>
            </div>
            <p className="text-xs md:text-sm text-primary-foreground/75 leading-relaxed font-sans max-w-sm">
              Assessoria jurídica moderna e de alto padrão, combinando profundo conhecimento técnico com atendimento consultivo e suporte 100% digital.
            </p>
            <div className="flex items-center space-x-2 pt-2 text-accent">
              <Scale className="h-5 w-5" />
              <span className="font-serif text-xs font-semibold tracking-wider">
                OAB/SP nº 123.456
              </span>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="font-serif text-sm font-bold text-accent uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2 text-xs md:text-sm">
              <a href="#areas" className="text-primary-foreground/75 hover:text-accent transition-colors">
                Áreas de Atuação
              </a>
              <a href="#para-quem-e" className="text-primary-foreground/75 hover:text-accent transition-colors">
                Para Quem É
              </a>
              <a href="#diferenciais" className="text-primary-foreground/75 hover:text-accent transition-colors">
                Diferenciais
              </a>
              <a href="#sobre" className="text-primary-foreground/75 hover:text-accent transition-colors">
                Quem Somos
              </a>
              <a href="#faq" className="text-primary-foreground/75 hover:text-accent transition-colors">
                Dúvidas Frequentes
              </a>
            </nav>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <h4 className="font-serif text-sm font-bold text-accent uppercase tracking-wider">
              Canais de Atendimento
            </h4>
            <div className="flex flex-col space-y-3 text-xs md:text-sm font-sans">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/75 leading-tight">
                  Atendimento Digital em todo o Brasil. Reuniões presenciais sob agendamento em: Av. Paulista, 1000, Bela Vista, São Paulo/SP.
                </span>
              </div>
              <a
                href="mailto:contato@marianacostaadv.com.br"
                className="flex items-center space-x-3 text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Mail className="h-4.5 w-4.5 text-accent flex-shrink-0" />
                <span>contato@marianacostaadv.com.br</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Phone className="h-4.5 w-4.5 text-accent flex-shrink-0" />
                <span>(11) 99999-9999 (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        {/* OAB Disclaimer */}
        <div className="border-t border-primary-foreground/10 pt-8 pb-6 text-center max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-1.5 text-accent">
            <ShieldAlert className="h-4.5 w-4.5" />
            <span className="font-serif text-xs font-semibold uppercase tracking-widest">
              Conformidade OAB
            </span>
          </div>
          <p className="text-[10px] md:text-xs text-primary-foreground/50 leading-relaxed font-sans">
            Informações Éticas: Este website tem caráter puramente informativo e educacional, conforme as regras estabelecidas pelo Código de Ética e Disciplina da OAB e pelo Provimento nº 205/2021 do Conselho Federal da OAB. Nenhuma informação veiculada neste canal substitui a consulta jurídica formal ou deve ser interpretada como promessa de resultado processual. Os depoimentos e estatísticas exibidos representam resultados históricos individuais e não garantem êxito futuro.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-primary-foreground/40 font-sans gap-4">
          <p>
            &copy; {currentYear} Dra. Ana Kelly Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4">
            {/* Simple dialog components for legal compliance */}
            <Dialog>
              <DialogTrigger className="hover:text-accent transition-colors cursor-pointer underline underline-offset-2">
                Termos de Uso
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white p-6 rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="font-serif text-lg font-bold text-primary mb-4">Termos de Uso</DialogTitle>
                </DialogHeader>
                <div className="text-xs text-muted-foreground space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  <p className="font-bold">1. Objeto</p>
                  <p>Este site destina-se a fins puramente informativos e institucionais. O acesso ao site não estabelece qualquer relação profissional ou de contratação entre o usuário e a Dra. Ana Kelly.</p>
                  <p className="font-bold">2. Conteúdo e Direitos Autorais</p>
                  <p>Todo o material informativo disponibilizado neste site, incluindo artigos, textos e logotipos, são de autoria intelectual proprietária, sendo protegidos por lei. A reprodução não autorizada é proibida.</p>
                  <p className="font-bold">3. Limitação de Responsabilidade</p>
                  <p>O conteúdo informativo oferecido não substitui uma consulta individual. A advogada não se responsabiliza por eventuais tomadas de decisões isoladas com base nas informações deste site.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="hover:text-accent transition-colors cursor-pointer underline underline-offset-2">
                Política de Privacidade (LGPD)
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white p-6 rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="font-serif text-lg font-bold text-primary mb-4">Política de Privacidade (LGPD)</DialogTitle>
                </DialogHeader>
                <div className="text-xs text-muted-foreground space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  <p className="font-bold">1. Coleta de Dados</p>
                  <p>Coletamos dados estritamente necessários quando você entra em contato espontaneamente via formulário ou WhatsApp (como nome, telefone e e-mail). Não comercializamos nem compartilhamos seus dados com terceiros.</p>
                  <p className="font-bold">2. Finalidade</p>
                  <p>Os dados fornecidos são usados única e exclusivamente para responder à sua solicitação de atendimento e agendar consultas jurídicas.</p>
                  <p className="font-bold">3. Direitos do Titular</p>
                  <p>Em conformidade com a LGPD (Lei 13.709/18), você pode solicitar a qualquer momento a exclusão definitiva ou retificação dos seus dados de contato dos nossos sistemas.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
