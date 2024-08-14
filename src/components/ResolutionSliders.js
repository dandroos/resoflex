import React from "react"
import { Slider, Typography, Grid } from "@mui/material"
import { styled } from "@mui/system"

const RedSlider = styled(Slider)({
  color: "#ff0000",
})

const ResolutionSliders = ({
  width,
  height,
  aspectWidth,
  aspectHeight,
  handleWidthChange,
  handleHeightChange,
  getWidthMarks,
  getHeightMarks,
  isWidthOutOfRange,
  isHeightOutOfRange,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" align="center">
          Width (px)
        </Typography>
        {isWidthOutOfRange ? (
          <RedSlider
            value={width}
            min={0}
            max={5200}
            step={aspectWidth}
            onChange={handleWidthChange}
            aria-labelledby="width-slider"
            marks={getWidthMarks()}
          />
        ) : (
          <Slider
            value={width}
            min={0}
            max={5200}
            step={aspectWidth}
            onChange={handleWidthChange}
            aria-labelledby="width-slider"
            marks={getWidthMarks()}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" align="center">
          Height (px)
        </Typography>
        {isHeightOutOfRange ? (
          <RedSlider
            value={height}
            min={0}
            max={5200}
            step={aspectHeight}
            onChange={handleHeightChange}
            aria-labelledby="height-slider"
            marks={getHeightMarks()}
          />
        ) : (
          <Slider
            value={height}
            min={0}
            max={5200}
            step={aspectHeight}
            onChange={handleHeightChange}
            aria-labelledby="height-slider"
            marks={getHeightMarks()}
          />
        )}
      </Grid>
    </>
  )
}

export default ResolutionSliders
