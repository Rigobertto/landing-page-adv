"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Award, Landmark, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Sobre() {
  const credentials = [
    {
      icon: GraduationCap,
      text: "Graduada em Direito pela Universidade de São Paulo (USP)",
    },
    {
      icon: Award,
      text: "Pós-graduada em Direito Processual Civil pela PUC-SP",
    },
    {
      icon: Landmark,
      text: "Membro da Comissão de Direito de Família e Sucessões da OAB/SP",
    },
    {
      icon: CheckCircle,
      text: "Mais de 8 anos de experiência e +500 casos cíveis solucionados",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Law Office/Infrastructure Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl">
              {/* Outer decorative borders */}
              <div className="absolute inset-0 border-[3px] border-accent/20 rounded-[2rem] transform -translate-x-3 translate-y-3 -z-10 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent z-10"></div>

              {/* Office Image */}
              <Image
                src="/law_office.png"
                alt="Escritório de Advocacia"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/90 backdrop-blur-sm border border-border/40 p-4 rounded-2xl shadow-xl">
                <p className="font-serif text-sm font-semibold text-primary text-center">
                  Infraestrutura Digital & Atendimento Sob Medida
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Authority Text & Credentials */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full inline-block">
                Quem Somos
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                Dra. Ana Kelly
              </h2>
              <p className="text-sm font-sans font-semibold text-accent uppercase tracking-wider">
                Fundadora • OAB/SP 123.456
              </p>
              <div className="h-[2px] w-20 bg-accent mt-2"></div>
            </div>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              <p>
                Acreditamos que a advocacia vai muito além de petições e audiências. Nosso propósito é oferecer um porto seguro para famílias e indivíduos em momentos de vulnerabilidade ou transição patrimonial.
              </p>
              <p>
                Com uma estrutura totalmente adaptada ao ambiente digital, oferecemos atendimento personalizado focado na resolução célere de conflitos civis, de família e sucessões. Atuamos de maneira estratégica, combinando rigor técnico com empatia para alcançar o melhor resultado possível para os nossos clientes.
              </p>
            </div>

            {/* Academic highlights */}
            <div className="space-y-4 pt-4 border-t border-border/80">
              <h3 className="font-serif text-lg font-bold text-primary">
                Credenciais Acadêmicas e Profissionais
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="p-2 bg-accent/10 text-accent rounded-lg mt-0.5 flex-shrink-0">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-xs md:text-sm text-foreground/80 font-sans leading-tight">
                        {cred.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
