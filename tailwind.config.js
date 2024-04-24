/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { regular: ["Regular"] },
      fontSize: {
        h1: [
          "4rem",
          {
            lineHeight: "4.875rem",
            fontWeight: "600",
          },
        ],
        h1Bold: [
          "6rem",
          {
            lineHeight: "9.3rem",
            fontWeight: "600",
          },
        ],
        h2: [
          "4rem",
          {
            lineHeight: "5.94rem",
            fontWeight: "500",
          },
        ],
        h3: [
          "3rem",
          {
            lineHeight: "4.363rem",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "1.813rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
