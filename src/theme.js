// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4", // Cyan
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    background: {
      default: "#1e1e2f", // Dark Purple for background
      paper: "#2a2a3d", // Slightly lighter shade for paper elements
    },
    text: {
      primary: "#ffffff", // White text for contrast
      secondary: "#b0b0c3", // Light gray text for secondary elements
      disabled: "#757575", // Lighter gray for disabled text
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h4: {
      fontWeight: 500, // Lighter weight
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#ff4081", // Pink for headings
    },
    h5: {
      fontWeight: 600, // Lighter weight
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    h6: {
      fontWeight: 400, // Lighter weight
      color: "#00bcd4", // Cyan for subheadings
    },
    body1: {
      fontSize: "1rem", // Adjusted font size for body text
      color: "#ffffff", // White text for body content
      fontWeight: 400, // Normal weight
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#b0b0c3", // Lighter border color
            },
            "&:hover fieldset": {
              borderColor: "#ffffff", // White border on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00bcd4", // Cyan border when focused
            },
          },
          "& .Mui-disabled": {
            color: "#757575", // Lighter gray for disabled text
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#b0b0c3", // Light gray for input labels
          fontWeight: 400, // Normal weight
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          borderRadius: "25px",
          padding: "10px 20px",
          backgroundColor: "#ff4081", // Pink for buttons
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#e91e63", // Darker pink on hover
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#ffffff", // White text for select box
        },
        icon: {
          color: "#ffffff", // White arrow icon
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#2a2a3d", // Paper elements with dark background
        },
      },
    },
  },
})

export default responsiveFontSizes(theme)
