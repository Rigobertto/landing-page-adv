"use client";

import React from "react";
import { HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      question: "Como funciona a primeira consulta jurídica?",
      answer: "A primeira consulta é o momento em que analisamos detalhadamente o seu caso, avaliamos os documentos disponíveis e traçamos o plano de ação estratégico (seja consensual ou judicial). A reunião pode ser realizada por videoconferência (Zoom/Google Meet) ou presencialmente, garantindo total privacidade e conforto.",
    },
    {
      question: "O escritório atende clientes fora do estado ou no exterior?",
      answer: "Sim. Como nossa estrutura é 100% digital, atendemos clientes de todo o Brasil e brasileiros residentes no exterior. Os processos judiciais hoje em dia correm de forma eletrônica (PJe) em quase todo o país, permitindo que todas as etapas, desde a contratação até as audiências, sejam feitas de forma online com total segurança.",
    },
    {
      question: "Quanto custa para iniciar um processo de inventário ou divórcio?",
      answer: "Os honorários advocatícios variam de acordo com a complexidade do caso (ex: partilha de bens amigável vs. litigiosa, existência de menores de idade, volume de patrimônio). Nossos valores seguem rigorosamente a tabela de honorários recomendada pela OAB, prezando pelo equilíbrio ético, transparência e facilidade de pagamento.",
    },
    {
      question: "É possível fazer o divórcio ou inventário diretamente em cartório?",
      answer: "Sim, desde que seja de forma consensual (amigável) e não haja filhos menores de idade ou incapazes envolvidos. O procedimento extrajudicial (em cartório) é muito mais rápido e econômico, podendo ser finalizado em poucos dias ou semanas, sob a assessoria obrigatória de um advogado.",
    },
    {
      question: "Como posso acompanhar o andamento do meu processo?",
      answer: "Prezamos pela transparência absoluta. Você receberá atualizações constantes diretamente por WhatsApp e e-mail sempre que houver alguma movimentação relevante no seu processo, explicada de forma simples e sem termos técnicos complicados. Se preferir, também fornecemos os números dos processos para consulta direta nos sites dos tribunais.",
    },
  ];

  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%20Dra.%20Mariana%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20meu%20caso.";

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full inline-block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Perguntas Frequentes
          </h2>
          <div className="h-[2px] w-20 bg-accent mx-auto mt-4"></div>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto pt-2">
            Entenda melhor como funciona o nosso suporte, prazos e procedimentos jurídicos mais comuns.
          </p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border/60 p-6 md:p-10 rounded-3xl shadow-sm"
        >
          <Accordion className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                value={`item-${idx}`}
                key={idx}
                className="border border-border/40 rounded-xl px-5 py-2 hover:border-accent/25 transition-all duration-300 bg-background/50"
              >
                <AccordionTrigger className="font-serif text-sm md:text-base font-bold text-primary hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-sm text-muted-foreground font-sans flex items-center justify-center gap-1.5">
            <HelpCircle className="h-4.5 w-4.5 text-accent" />
            Ainda tem alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              className: "bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg group inline-flex items-center justify-center"
            })}
          >
            Tirar Dúvidas por WhatsApp
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
