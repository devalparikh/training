module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#a991f7" /* Primary color */,
      //     "primary-focus": "#8462f4" /* Primary color - focused */,
      //     "primary-content":
      //       "#ffffff" /* Foreground content color to use on primary color */,

      //     secondary: "#f6d860" /* Secondary color */,
      //     "secondary-focus": "#f3cc30" /* Secondary color - focused */,
      //     "secondary-content":
      //       "#ffffff" /* Foreground content color to use on secondary color */,

      //     accent: "#37cdbe" /* Accent color */,
      //     "accent-focus": "#2aa79b" /* Accent color - focused */,
      //     "accent-content":
      //       "#ffffff" /* Foreground content color to use on accent color */,

      //     neutral: "#3d4451" /* Neutral color */,
      //     "neutral-focus": "#2a2e37" /* Neutral color - focused */,
      //     "neutral-content":
      //       "#ffffff" /* Foreground content color to use on neutral color */,

      //     "base-100":
      //       "#ffffff" /* Base color of page, used for blank backgrounds */,
      //     "base-200": "#f9fafb" /* Base color, a little darker */,
      //     "base-300": "#d1d5db" /* Base color, even more darker */,
      //     "base-content":
      //       "#1f2937" /* Foreground content color to use on base color */,

      //     info: "#2094f3" /* Info */,
      //     success: "#009485" /* Success */,
      //     warning: "#ff9900" /* Warning */,
      //     error: "#ff5724" /* Error */,
      //   },
      // },
      {
        myDark: {
          primary: "#00f0b4",
          "primary-focus": "#02a77d",
          "primary-content": "#454545",
          secondary: "#407bff",
          "secondary-focus": "#315ebf",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#2a2e38",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#3d4451",
          "base-200": "#2a2e38",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          info: "#66c7ff",
          success: "#87d038",
          warning: "#e1d562",
          error: "#ff6f6f",
        },
      },
      {
        myLight: {
          primary: "#00f0b4",
          "primary-focus": "#02a77d",
          "primary-content": "#ffffff",
          secondary: "#407bff",
          "secondary-focus": "#315ebf",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "dark",
      "light",
    ],
  },
};
