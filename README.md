# Landing Page Advocacia

Este projeto é uma landing page moderna, responsiva e de alta conversão, desenvolvida especificamente para advogados(as) e escritórios de advocacia, visando a divulgação dos serviços jurídicos oferecidos e a construção de autoridade digital.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

*   **[Next.js (App Router)](https://nextjs.org/)**: Framework React para renderização otimizada e roteamento.
*   **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e manutenibilidade.
*   **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
*   **[Shadcn UI](https://ui.shadcn.com/) / Base UI**: Componentes de interface acessíveis e customizáveis.
*   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e interações avançadas.
*   **[Lucide React](https://lucide.dev/)**: Pacote de ícones limpos e consistentes.

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura orientada a componentes, estruturada para fácil escalabilidade e manutenção, utilizando o novo paradigma App Router do Next.js:

*   `src/app/`: Contém as rotas da aplicação, layouts principais e estilos globais (`globals.css`). A página principal orquestra a chamada das seções em `page.tsx`.
*   `src/components/`: Diretório base para os componentes React.
    *   `src/components/sections/`: Componentes estruturais que representam os grandes blocos da Landing Page (ex: Hero, Áreas, Sobre, FAQ).
    *   `src/components/ui/`: Componentes visuais atômicos e reutilizáveis (botões, inputs, cards), predominantemente gerados pelo Shadcn UI.
    *   `whatsapp-button.tsx`: Componente isolado para o botão flutuante de contato.
*   `src/lib/`: Funções utilitárias e auxiliares.

## 📄 Informações da Landing Page

A página foi estrategicamente desenhada em seções modulares para guiar o visitante até a conversão:

1.  **Header (`header.tsx`)**: Navegação principal com links rápidos.
2.  **Hero (`hero.tsx`)**: Primeira dobra de alto impacto apresentando a proposta de valor e a principal Chamada para Ação (CTA).
3.  **Áreas de Atuação (`areas.tsx`)**: Exposição clara das especialidades jurídicas.
4.  **Qualificação (`qualification.tsx`)**: Formulário ou fluxo para qualificação e captação inicial do lead.
5.  **Diferenciais (`diferenciais.tsx`)**: Apresentação das vantagens exclusivas do serviço prestado.
6.  **Sobre (`sobre.tsx`)**: Construção de autoridade, destacando o perfil, trajetória e valores do(a) profissional.
7.  **Depoimentos (`testimonials.tsx`)**: Prova social através de relatos de clientes e casos de sucesso.
8.  **FAQ (`faq.tsx`)**: Perguntas frequentes para quebrar objeções e tirar dúvidas recorrentes.
9.  **Footer (`footer.tsx`)**: Rodapé com informações de contato, endereços e documentações legais.
10. **Botão WhatsApp (`whatsapp-button.tsx`)**: Atalho fixo na tela para contato ágil via WhatsApp.

## 🎥 Demonstração

<!-- O vídeo de demonstração da landing page deve ser inserido abaixo -->
![Demonstração da Landing Page](https://youtu.be/fsBdbVYLf1w)

---

## 💻 Como Rodar Localmente

1.  Clone este repositório.
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```
4.  Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.
