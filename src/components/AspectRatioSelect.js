import React from "react"
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const AspectRatioSelect = ({ aspectRatio, handleAspectRatioChange }) => (
  <Grid item xs={12}>
    <FormControl fullWidth>
      <InputLabel id="aspect-ratio-select-label">Aspect Ratio</InputLabel>
      <Select
        labelId="aspect-ratio-select-label"
        value={aspectRatio}
        onChange={handleAspectRatioChange}
        label="Aspect Ratio"
      >
        <MenuItem value="widescreen">Widescreen (16:9)</MenuItem>
        <MenuItem value="ultrawide">Ultrawide (21:9)</MenuItem>
        <MenuItem value="superultrawide">Super Ultrawide (32:9)</MenuItem>
        <MenuItem value="custom">Custom</MenuItem>
      </Select>
    </FormControl>
  </Grid>
)

export default AspectRatioSelect
