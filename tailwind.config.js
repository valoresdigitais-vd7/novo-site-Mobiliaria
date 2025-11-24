/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === Cores Primárias ===
        primary: {
          DEFAULT: '#0891b2', // cyan-600 — links, CTAs principais, destaques, logo
          light: '#22d3ee',   // cyan-400 — hover, elementos interativos
          dark: '#0e7490',    // cyan-700 — estados ativos e bordas intensas
        },

        // === Cores Secundárias ===
        secondary: {
          DEFAULT: '#f97316', // orange-500 — botões secundários, badges, ícones de ação
          light: '#fb923c',   // orange-400 — realces e hover
          dark: '#ea580c',    // orange-600 — ênfases fortes e ativos
        },

        // === Cores Neutras (Escala de Cinza) ===
        neutral: {
          100: '#f8fafc', // slate-50 — fundo geral
          200: '#f1f5f9', // slate-100 — fundo de seções alternadas
          300: '#e2e8f0', // slate-200 — bordas suaves
          400: '#cbd5e1', // slate-300 — bordas
          500: '#94a3b8', // slate-400 — textos desabilitados
          600: '#64748b', // slate-500 — textos secundários
          700: '#475569', // slate-600 — textos padrão
          800: '#334155', // slate-700 — textos escuros, fundo do footer
          900: '#1e293b', // slate-800 — textos muito escuros
        },

        // === Cores de Suporte ===
        accent: {
          success: '#22c55e', // verde-500 — confirmações e feedback positivo
          warning: '#eab308', // amarelo-500 — alertas e pontos de atenção
          error: '#ef4444',   // vermelho-500 — erros e avisos críticos
          info: '#3b82f6',    // azul-500 — informações, tooltips
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}