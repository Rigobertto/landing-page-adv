"use client";

import React from "react";
import { Star, Quote, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Testimonials() {
  const stats = [
    { value: "+500", label: "Casos solucionados" },
    { value: "98%", label: "De avaliações 5 estrelas" },
    { value: "+8", label: "Anos de experiência" },
    { value: "100%", label: "Digital e transparente" },
  ];

  const testimonials = [
    {
      name: "Renata M.",
      location: "São Paulo/SP",
      text: "A Dra. Mariana conduziu meu processo de divórcio com extrema sensibilidade e agilidade. Fiquei muito satisfeita com o resultado e, acima de tudo, com o acolhimento humano que recebi.",
    },
    {
      name: "Guilherme S.",
      location: "Campinas/SP",
      text: "Precisei fazer um inventário complexo de bens e estava preocupado com a demora do judiciário. A Dra. Mariana conseguiu resolver de forma extrajudicial em cartório muito mais rápido do que eu esperava.",
    },
    {
      name: "Camila R.",
      location: "Lisboa, Portugal (Residente)",
      text: "Excelente atendimento digital. Como moro fora do Brasil, a facilidade de enviar documentos pela internet e fazer reuniões online com a Dra. Mariana tornou a resolução do meu caso extremamente prática.",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Trust Metrics / Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-24 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-border/60 p-6 rounded-2xl shadow-sm"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full inline-block">
            Prova Social
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="h-[2px] w-20 bg-accent mx-auto mt-4"></div>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto pt-2">
            A satisfação dos nossos clientes é o reflexo da dedicação e ética profissional com que tratamos cada processo. (Nomes preservados em respeito ao sigilo profissional).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <Card className="bg-white border-border/50 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 rounded-2xl flex flex-col justify-between p-8 w-full relative overflow-hidden">
                {/* Quote Icon background watermark */}
                <div className="absolute top-4 right-4 text-secondary opacity-25">
                  <Quote className="h-10 w-10 rotate-180" />
                </div>

                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="h-4.5 w-4.5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-xs md:text-sm text-foreground/80 font-sans italic leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Client info */}
                <div className="mt-6 border-t border-border/40 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-bold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase bg-secondary text-primary font-semibold tracking-widest px-2 py-0.5 rounded border border-border/30">
                    Cliente
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
