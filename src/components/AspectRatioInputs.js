// AspectRatioInputs.js
import React from "react"
import { Grid, Typography, TextField } from "@mui/material"

const AspectRatioInputs = ({
  aspectWidth,
  aspectHeight,
  handleAspectWidthChange,
  handleAspectHeightChange,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Aspect Ratio Width</Typography>
        <TextField
          type="number"
          value={aspectWidth}
          onChange={handleAspectWidthChange}
          inputProps={{ min: 1 }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Aspect Ratio Height</Typography>
        <TextField
          type="number"
          value={aspectHeight}
          onChange={handleAspectHeightChange}
          inputProps={{ min: 1 }}
          fullWidth
        />
      </Grid>
    </>
  )
}

export default AspectRatioInputs
