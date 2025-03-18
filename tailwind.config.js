// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // 深藍色
        secondary: "#F43F5E", // 粉紅色
        customGray: "#A0A0A0", // 自定義灰色
      },
      spacing: {
        18: "4.5rem", // 自定義間距
        72: "18rem",  // 自定義間距
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // 自定義字體
        serif: ["Georgia", "serif"],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)', // 自定義陰影
      },
    },
  },
  plugins: [],
};