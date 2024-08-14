import React from "react"
import { Typography, Grid } from "@mui/material"

const ResolutionDisplay = ({ width, height }) => {
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom align="center">
        Resolution
      </Typography>
      <Typography variant="h6" align="center">
        {Math.round(width)} x {Math.round(height)} pixels
      </Typography>
      <Typography variant="overline" display="block" align="center">
        Total Pixels: {formatNumberWithCommas(Math.round(width * height))}
      </Typography>
    </Grid>
  )
}

export default ResolutionDisplay
