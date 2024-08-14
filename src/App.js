import React from "react"
import ResolutionConfigurator from "./components/ResolutionConfigurator"
import { Typography, Container, CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ padding: "20px" }}>
        <Typography
          variant="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          ResoFlex
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          RESOFLEX is a tool to find the perfect resolution for whatever your
          needs. Adjust the sliders and input fields to match your desired
          aspect ratio and resolution.
        </Typography>
        <ResolutionConfigurator />
      </Container>
    </ThemeProvider>
  )
}

export default App
