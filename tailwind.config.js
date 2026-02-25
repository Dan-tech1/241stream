/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* ─── Design Tokens: Palette Premium ─── */
      colors: {
        // Couleurs principales (conservées + enrichies)
        brand: {
          DEFAULT: '#facc15',     // Jaune doré principal
          light: '#ffe84d',       // Hover / accent clair
          dark: '#d4a90a',        // Variante sombre
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        // Backgrounds (conservés)
        surface: {
          DEFAULT: '#0a0a0c',     // Background principal
          raised: '#131317',      // Background élevé (header/footer)
          card: '#1a1a20',        // Cards
          overlay: '#1d1d24',     // Overlay / menus
          hover: '#25252d',       // État hover
        },
        // Couleurs secondaires (NOUVELLES harmonieuses)
        secondary: {
          DEFAULT: '#6366f1',     // Indigo vibrant
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent2: {
          DEFAULT: '#06b6d4',     // Cyan premium
          light: '#22d3ee',
          dark: '#0891b2',
        },
        // Couleurs fonctionnelles
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        // Texte
        txt: {
          DEFAULT: '#f5f5f5',
          muted: '#a1a1aa',
          dim: '#71717a',
        },
      },

      /* ─── Typographie moderne ─── */
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      /* ─── Spacing System (8pt grid) ─── */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },

      /* ─── Border Radius ─── */
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
        '4xl': '1.75rem',
      },

      /* ─── Box Shadow Premium ─── */
      boxShadow: {
        'card': '0 4px 18px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.85)',
        'glow': '0 0 20px rgba(250, 204, 21, 0.15)',
        'glow-strong': '0 0 40px rgba(250, 204, 21, 0.25)',
        'pop': '0 20px 60px rgba(0, 0, 0, 0.9)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.37)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },

      /* ─── Animations premium ─── */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(250, 204, 21, 0.3)' },
        },
      },

      /* ─── Backdrop Blur (glassmorphism) ─── */
      backdropBlur: {
        'xs': '2px',
      },

      /* ─── Max Width ─── */
      maxWidth: {
        'screen-2xl': '1400px',
      },

      /* ─── Transitions ─── */
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
