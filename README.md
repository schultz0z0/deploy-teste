# Congresso Futuro 2026

Este projeto é um site moderno e responsivo para eventos, desenvolvido com React, Vite, Tailwind CSS e Framer Motion.

## 🚀 Como Rodar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Build para produção:**
    ```bash
    npm run build
    ```

## 🛠️ Estrutura do Projeto

-   `src/components`: Componentes reutilizáveis (Navbar, Footer, HeroWaves, etc.)
-   `src/pages`: Páginas da aplicação (Home, Sobre, Programação, etc.)
-   `src/data`: Dados mockados (palestrantes, programação, patrocinadores)
-   `src/lib`: Utilitários (cn, etc.)

## 📝 Personalização

### Placeholders
Os textos e imagens utilizam placeholders. Para personalizar:
-   **Imagens:** Substitua as URLs do `picsum.photos` nos arquivos em `src/data/` e `src/pages/`.
-   **Textos:** Edite diretamente os componentes em `src/pages/`.
-   **Cores:** Ajuste as variáveis CSS em `src/index.css` (Tailwind v4 theme).

### Adicionar Conteúdo

-   **Palestrantes:** Edite `src/data/speakers.ts`. Adicione novos objetos ao array.
-   **Programação:** Edite `src/data/schedule.ts`. Certifique-se de usar os IDs corretos dos palestrantes.
-   **Patrocinadores:** Edite `src/data/sponsorCategories.ts`.

## ✅ Checklist de SEO e Performance

-   [x] **Meta Tags:** Cada página possui componentes `<SEO />` com títulos e descrições únicos.
-   [x] **Lazy Loading:** O React Router carrega as páginas sob demanda (code splitting automático do Vite).
-   [x] **Imagens:** Utilize formatos modernos (WebP) e atributos `width`/`height` ao substituir os placeholders.
-   [x] **Acessibilidade:** Cores com contraste adequado e navegação por teclado.
-   [x] **Performance:** Animações otimizadas com `framer-motion` e `will-change`.

## 🎨 Design System

O projeto utiliza Tailwind CSS v4 com as seguintes cores principais:
-   **Brand Blue:** `#00608d`
-   **Brand Teal:** `#03889d`
-   **Brand Green:** `#1c9466`
-   **Fontes:** Inter (Sans) e Space Grotesk (Display).

---

Desenvolvido com ❤️ para o futuro do mercado de seguros.
