"use client";

import React from "react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Areas } from "@/components/sections/areas";
import { Qualification } from "@/components/sections/qualification";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Sobre } from "@/components/sections/sobre";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Areas of Practice Section */}
        <Areas />

        {/* Lead Qualification Section */}
        <Qualification />

        {/* Value Propositions / Differentials Section */}
        <Diferenciais />

        {/* About Lawyer / Authority Section */}
        <Sobre />

        {/* Testimonials / Social Proof Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
