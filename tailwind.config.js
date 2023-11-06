/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'base': ['Cinzel', 'serif'],
      // Otras fuentes personalizadas si es necesario
    },
    // Configura la fuente base
    fontFamily: {
      'sans': ['base', 'sans'],
      'serif': ['base', 'serif'],
      'mono': ['base', 'monospace'],
    },  
  },

  maxWidth: {
    'custom-lg': '80%', // Ancho máximo del 80% en pantallas grandes
    'custom-md': '95%', // Ancho máximo del 95% en dispositivos móviles
  },
  
  plugins: [],
}