"use client";

import React from "react";
import { Heart, FileText, FileSignature, Landmark, ChevronRight, HelpCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Areas() {
  const practiceAreas = [
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Amparo legal para momentos de transição familiar. Atuação focada em acolhimento e proteção de direitos.",
      services: [
        "Divórcio Consensual e Litigioso",
        "Pensão Alimentícia (Fixação, Revisão e Execução)",
        "Guarda de Filhos e Regulamentação de Visitas",
        "Reconhecimento e Dissolução de União Estável",
      ],
      whatsappText: "Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20Direito%20de%20Fam%C3%ADlia.",
    },
    {
      icon: Landmark,
      title: "Direito das Sucessões",
      description: "Planejamento e organização patrimonial. Resolução burocrática para a partilha de bens com máxima agilidade.",
      services: [
        "Inventário Judicial e Extrajudicial",
        "Planejamento Sucessório (Doações e Holdings)",
        "Elaboração e Registro de Testamentos",
        "Cálculo e Otimização do ITCMD",
      ],
      whatsappText: "Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20falar%20sobre%20Invent%C3%A1rio%20e%20Sucess%C3%B5es.",
    },
    {
      icon: FileSignature,
      title: "Contratos e Obrigações",
      description: "Segurança jurídica preventiva. Elaboração e análise detalhada de negócios jurídicos bilaterais.",
      services: [
        "Elaboração de Contratos de Compra e Venda",
        "Contratos de Locação Residencial e Comercial",
        "Pactos Antenupciais e Contratos de Convivência",
        "Notificações Extrajudiciais e Rescisões Contratuais",
      ],
      whatsappText: "Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20aux%C3%ADlio%20jur%C3%ADdico%20em%20Contratos.",
    },
    {
      icon: FileText,
      title: "Direito Civil Geral",
      description: "Defesa dos seus interesses e patrimônio em relações cotidianas e litígios cíveis.",
      services: [
        "Ações de Indenização (Danos Morais e Materiais)",
        "Direito do Consumidor de Alta Complexidade",
        "Cobrança e Recuperação de Créditos",
        "Assessoria Cível Preventiva para Pessoas Físicas",
      ],
      whatsappText: "Ol%C3%A1%20Dra.%20Mariana%2C%20preciso%20de%20ajuda%20com%20um%20caso%20de%20Direito%20Civil.",
    },
  ];

  const getWhatsappUrl = (text: string) => `https://wa.me/5511999999999?text=${text}`;

  return (
    <section id="areas" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full inline-block">
            Nossas Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Áreas de Atuação Especializada
          </h2>
          <div className="h-[2px] w-20 bg-accent mx-auto mt-4"></div>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto pt-2">
            Oferecemos suporte consultivo preventivo para evitar litígios desnecessários, além de representação estratégica contenciosa perante o Judiciário.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area, idx) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex"
              >
                <Card className="flex flex-col w-full bg-white border-border/60 hover:shadow-xl hover:border-accent/40 transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-xl md:text-2xl text-primary font-bold">
                          {area.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-between pt-0 space-y-6">
                    <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {area.description}
                    </CardDescription>

                    {/* Services list */}
                    <ul className="space-y-2 border-t border-border/40 pt-4">
                      {area.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-start text-xs md:text-sm text-foreground/80">
                          <ChevronRight className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <div className="pt-4">
                      <a
                        href={getWhatsappUrl(area.whatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "ghost",
                          className: "w-full text-primary hover:text-accent hover:bg-secondary font-semibold text-sm group flex items-center justify-between border border-border/80 hover:border-accent/30 rounded-xl"
                        })}
                      >
                        Falar com Especialista nesta área
                        <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
