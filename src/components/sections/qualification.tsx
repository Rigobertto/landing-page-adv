"use client";

import React from "react";
import { Check, X, ShieldCheck, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Qualification() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20avaliar%20a%20viabilidade%20do%20meu%20caso.";

  const positivePoints = [
    "Busca atendimento direto com a advogada especialista, evitando intermediários.",
    "Valoriza a segurança patrimonial e quer evitar litígios demorados e desgastantes.",
    "Prefere a comodidade de um processo digital, resolvendo tudo sem sair de casa.",
    "Exige total transparência e atualizações em linguagem simples sobre o seu caso.",
    "Deseja um planejamento preventivo para evitar problemas futuros com inventários."
  ];

  const negativePoints = [
    "Busca apenas o preço mais barato do mercado, sem priorizar a qualidade técnica.",
    "Espera promessas de resultado garantido (prática ilegal e contrária à ética da OAB).",
    "Prefere o modelo tradicional analógico, com montanhas de papel e reuniões físicas constantes.",
    "Deseja litigar por questões emocionais, recusando tentativas de acordos amigáveis.",
    "Não está disposto a fornecer a documentação necessária para o andamento ágil do caso."
  ];

  return (
    <section id="para-quem-e" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full inline-block">
            Qualificação de Perfil
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Para Quem é a Nossa Assessoria Jurídica?
          </h2>
          <div className="h-[2px] w-20 bg-accent mx-auto mt-4"></div>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto pt-2">
            Acreditamos que a relação entre advogado e cliente deve ser pautada na confiança e no alinhamento de expectativas. Veja se o nosso escritório é o ideal para você.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Positive Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <Card className="bg-white border-emerald-500/10 shadow-lg hover:shadow-emerald-500/5 hover:border-emerald-500/25 transition-all duration-300 rounded-2xl w-full flex flex-col justify-between overflow-hidden">
              <div>
                <CardHeader className="bg-emerald-50/40 dark:bg-emerald-950/10 border-b border-border/40 py-6 px-8 flex flex-row items-center space-x-4">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-lg md:text-xl text-primary font-bold">
                      Este escritório é para você se:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {positivePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4.5 w-4.5" />
                        </div>
                        <span className="text-sm md:text-base text-foreground/80 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Negative Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <Card className="bg-white border-amber-500/10 shadow-lg hover:shadow-amber-500/5 hover:border-amber-500/25 transition-all duration-300 rounded-2xl w-full flex flex-col justify-between overflow-hidden">
              <div>
                <CardHeader className="bg-amber-50/40 dark:bg-amber-950/10 border-b border-border/40 py-6 px-8 flex flex-row items-center space-x-4">
                  <div className="p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-lg md:text-xl text-primary font-bold">
                      Este escritório NÃO é para você se:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {negativePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                          <X className="h-4.5 w-4.5" />
                        </div>
                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground font-sans mb-4">
            Se identificou com nossa forma de trabalhar? Vamos analisar seu caso.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              className: "bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg"
            })}
          >
            Falar com a Advogada especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
