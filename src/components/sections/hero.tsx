"use client";

import React from "react";
import Image from "next/image";
import { Shield, BookOpen, Clock, CalendarDays, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const features = [
    {
      icon: Shield,
      text: "Atendimento Online Seguro",
      sub: "Agilidade digital sem burocracia",
    },
    {
      icon: BookOpen,
      text: "Especialização Técnica",
      sub: "Direito de Família, Sucessões e Civil",
    },
    {
      icon: Clock,
      text: "Acompanhamento em Tempo Real",
      sub: "Informação clara de cada etapa do processo",
    },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Gold Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center self-start">
            <span className="bg-accent/10 border border-accent/20 text-accent font-sans text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
              Advocacia Especializada & Consultoria
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1]"
          >
            Protegendo o seu <span className="text-accent">patrimônio</span> e a sua <span className="text-accent">família</span> com excelência jurídica
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-xl font-sans leading-relaxed"
          >
            Atendimento consultivo e contencioso com soluções sob medida. Oferecemos segurança, discrição e agilidade com suporte digital completo para o seu caso.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                className: "bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              })}
            >
              Falar com a Advogada
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#areas"
              className={buttonVariants({
                variant: "outline",
                className: "border-primary/20 hover:bg-secondary text-primary font-medium px-8 py-6 rounded-full transition-colors duration-300 flex items-center justify-center"
              })}
            >
              Ver Áreas de Atuação
            </a>
          </motion.div>

          {/* Quick Value Props */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/80"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">{feature.text}</span>
                </div>
                <span className="text-xs text-muted-foreground leading-normal">{feature.sub}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl">
            {/* Elegant outer frames */}
            <div className="absolute inset-0 border-[3px] border-accent/20 rounded-[2rem] transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10"></div>

            {/* Profile headshot */}
            <Image
              src="/lawyer_profile.png"
              alt="Dra. Ana Kelly"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Quick credentials on image */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/90 backdrop-blur-sm border border-border/40 p-4 rounded-2xl shadow-xl">
              <p className="font-serif text-lg font-bold text-primary">Dra. Ana Kelly</p>
              <p className="font-sans text-xs text-muted-foreground font-medium uppercase tracking-wider">
                OAB/SP nº 123.456 • Advogada Civil & Família
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
