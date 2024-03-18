// ----------------------------------------------------------------------

import useSettings from "../../hooks/useSettings";

export default function CssBaseline() {
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
          overflow:"hidden",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        "&::-webkit-scrollbar": {
          width: "2px",
          backgroundColor: isLight ? "#F5F5F5" : "#2b2b2b",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: isLight ? "#000000" : "#ffffff",
        },
      },
    },
  };
}
