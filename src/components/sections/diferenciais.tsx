"use client";

import React from "react";
import { UserCheck, Laptop, Eye, HelpCircle, GraduationCap, Scale } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Diferenciais() {
  const features = [
    {
      icon: UserCheck,
      title: "Atendimento Exclusivo",
      description: "Você fala diretamente com a advogada especialista responsável pelo seu caso. Sem intermediários, sem ruídos de comunicação.",
    },
    {
      icon: Laptop,
      title: "Escritório 100% Digital",
      description: "Resolva tudo do seu smartphone ou computador. Contamos com reuniões virtuais, envio digital de documentos e assinatura eletrônica.",
    },
    {
      icon: Eye,
      title: "Transparência Incondicional",
      description: "Traduzimos o 'juridiquês' para uma linguagem simples e direta. Você saberá exatamente o que está acontecendo em cada etapa.",
    },
    {
      icon: Scale,
      title: "Foco em Acordos Consensuais",
      description: "Priorizamos vias extrajudiciais para solucionar conflitos com rapidez e menor desgaste emocional. O processo judicial é o último recurso.",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full inline-block">
            Nossos Valores
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Por Que Escolher Nosso Escritório?
          </h2>
          <div className="h-[2px] w-20 bg-accent mx-auto mt-4"></div>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto pt-2">
            Entendemos que problemas jurídicos trazem angústia. Nosso compromisso é entregar tranquilidade e soluções inteligentes com empatia e técnica de alto nível.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <Card className="bg-white border-border/50 hover:shadow-xl hover:border-accent/35 transition-all duration-300 rounded-2xl flex flex-col items-center text-center p-8 w-full group">
                  <div className="p-4 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white rounded-2xl transition-colors duration-300 mb-6">
                    <IconComponent className="h-7 w-7 text-accent" />
                  </div>
                  <CardHeader className="p-0 mb-4 flex flex-col items-center justify-center text-center">
                    <CardTitle className="font-serif text-lg md:text-xl font-bold text-primary text-center">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
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
