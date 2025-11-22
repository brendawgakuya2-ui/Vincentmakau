module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b6b4f',
        secondary: '#f59e0b',
        accent: '#8b5cf6',
        neutralDark: '#0f172a',
        neutralLight: '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '2rem'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1100px',
          xl: '1200px'
        }
      },
      fontSize: {
        'display-lg': ['3.2rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.1' }],
        'heading-md': ['1.125rem', { lineHeight: '1.15' }]
      },
      spacing: {
        '7.5': '1.875rem',
        '18': '4.5rem',
        '22': '5.5rem'
      },
      lineHeight: {
        tight-1: '1.02',
        tight-2: '1.06'
      },
      fontWeight: {
        extra: '800'
      }
    }
  },
  plugins: []
}
