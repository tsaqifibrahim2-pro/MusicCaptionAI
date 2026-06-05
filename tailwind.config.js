/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom Colors - Musik Industry Theme
      colors: {
        // Primary
        violet: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
          muted: '#A78BFA',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#1a1a1a',
          200: '#262626',
          300: '#333333',
          400: '#404040',
        },
        // Accent Colors
        neon: {
          purple: '#C084FC',
          pink: '#F472B6',
          blue: '#60A5FA',
          green: '#34D399',
          yellow: '#FBBF24',
        },
      },
      
      // Custom Fonts
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      
      // Font Sizes
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
      },
      
      // Custom Animations
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'bounce-in': 'bounceIn 0.5s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      
      // Keyframes
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      
      // Custom Background Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'music-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%237C3AED\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      
      // Custom Box Shadow
      boxShadow: {
        'glow': '0 0 30px rgba(124, 58, 237, 0.3)',
        'glow-sm': '0 0 15px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 60px rgba(124, 58, 237, 0.5)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
      },
      
      // Custom Border Radius
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      
      // Z-index
      zIndex: {
        '60': '60',
      },
    },
  },
  plugins: [],
}
