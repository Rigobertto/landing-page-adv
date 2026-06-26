"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20solicitar%20uma%20consulta%20jur%C3%ADdica%20e%20explicar%20o%20meu%20caso.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      {/* Tooltip text */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mr-3 hidden md:flex items-center bg-white border border-border/80 px-4 py-2 rounded-full shadow-lg text-sm font-medium text-foreground gap-2 cursor-pointer hover:bg-muted transition-colors duration-200"
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Atendimento Online
      </motion.div>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Falar no WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping duration-1000 -z-10 group-hover:opacity-0 transition-opacity"></span>
        
        {/* Icon */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.889 14.05 .865 11.41.865c-5.438 0-9.863 4.42-9.867 9.858-.002 1.73.458 3.414 1.332 4.896L1.83 20.672l5.009-1.314c1.472.893 3.078 1.364 4.838 1.366L6.647 19.154zm10.742-7.406c-.29-.145-1.716-.848-1.983-.945-.266-.096-.461-.145-.656.145-.19.29-.738.945-.905 1.139-.166.195-.332.218-.622.073-.29-.145-1.226-.452-2.337-1.444-.863-.77-1.446-1.72-1.616-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.339.435-.509.145-.17.193-.29.29-.484.096-.195.048-.364-.024-.509-.072-.145-.656-1.579-.9-2.17-.236-.569-.478-.49-.656-.499-.17-.008-.363-.01-.556-.01-.193 0-.507.073-.773.364-.266.29-1.014.992-1.014 2.42 0 1.428 1.039 2.808 1.184 3.002.145.195 2.046 3.125 4.957 4.382.692.299 1.233.478 1.656.613.696.222 1.329.19 1.83.115.558-.083 1.716-.701 1.958-1.38.242-.679.242-1.261.17-1.38-.072-.119-.266-.19-.556-.335z" />
        </svg>
      </motion.a>
    </div>
  );
}
