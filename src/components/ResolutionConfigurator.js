import React, { useState, useEffect } from "react"
import {
  Grid,
  Divider,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import AspectRatioInputs from "./AspectRatioInputs"
import ResolutionSliders from "./ResolutionSliders"
import ResolutionDisplay from "./ResolutionDisplay"
import SavedResolutions from "./SavedResolutions"

const ResolutionConfigurator = () => {
  const [aspectRatio, setAspectRatio] = useState("widescreen")
  const [aspectWidth, setAspectWidth] = useState(16)
  const [aspectHeight, setAspectHeight] = useState(9)
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [resolutions, setResolutions] = useState([])

  useEffect(() => {
    const savedResolutions =
      JSON.parse(localStorage.getItem("resolutions")) || []
    setResolutions(savedResolutions)
  }, [])

  useEffect(() => {
    switch (aspectRatio) {
      case "widescreen":
        setAspectWidth(16)
        setAspectHeight(9)
        setWidth(1920)
        setHeight(1080)
        break
      case "ultrawide":
        setAspectWidth(21)
        setAspectHeight(9)
        setWidth(2560)
        setHeight(1080)
        break
      case "superultrawide":
        setAspectWidth(32)
        setAspectHeight(9)
        setWidth(3840)
        setHeight(1080)
        break
      case "custom":
        break
      default:
        break
    }
  }, [aspectRatio])

  useEffect(() => {
    if (aspectRatio === "custom") {
      // Adjust sliders to reflect the new aspect ratio values
      const newWidth = Math.round(width / aspectWidth) * aspectWidth
      const newHeight = Math.round(height / aspectHeight) * aspectHeight
      setWidth(newWidth)
      setHeight(newHeight)
    }
    // eslint-disable-next-line
  }, [aspectWidth, aspectHeight])

  const handleAspectWidthChange = (event) => {
    const newAspectWidth = parseInt(event.target.value, 10)
    setAspectWidth(newAspectWidth)
    const newHeight = Math.round((width * aspectHeight) / newAspectWidth)
    setHeight(newHeight)
  }

  const handleAspectHeightChange = (event) => {
    const newAspectHeight = parseInt(event.target.value, 10)
    setAspectHeight(newAspectHeight)
    const newWidth = Math.round((height * aspectWidth) / newAspectHeight)
    setWidth(newWidth)
  }

  const handleWidthChange = (event, newValue) => {
    const newWidth = Math.round(newValue / aspectWidth) * aspectWidth
    setWidth(newWidth)
    setHeight((newWidth * aspectHeight) / aspectWidth)
  }

  const handleHeightChange = (event, newValue) => {
    const newHeight = Math.round(newValue / aspectHeight) * aspectHeight
    setHeight(newHeight)
    setWidth((newHeight * aspectWidth) / aspectHeight)
  }

  const handleAspectRatioChange = (event) => {
    setAspectRatio(event.target.value)
  }

  const saveResolution = () => {
    const newResolution = {
      width,
      height,
      totalPixels: width * height,
      aspectRatio: `${aspectWidth}:${aspectHeight}`,
      timestamp: new Date().toISOString(),
    }
    const updatedResolutions = [...resolutions, newResolution]
    setResolutions(updatedResolutions)
    localStorage.setItem("resolutions", JSON.stringify(updatedResolutions))
  }

  const handleDelete = (timestamp) => {
    const updatedResolutions = resolutions.filter(
      (res) => res.timestamp !== timestamp
    )
    setResolutions(updatedResolutions)
    localStorage.setItem("resolutions", JSON.stringify(updatedResolutions))
  }

  const getWidthMarks = () => {
    switch (aspectRatio) {
      case "widescreen":
        return [
          { value: 1280 },
          { value: 1920 },
          { value: 2560 },
          { value: 3840 },
        ]
      case "ultrawide":
        return [{ value: 2560 }, { value: 3440 }, { value: 3840 }]
      case "superultrawide":
        return [{ value: 3840 }, { value: 5120 }]
      default:
        return []
    }
  }

  const getHeightMarks = () => {
    switch (aspectRatio) {
      case "widescreen":
        return [
          { value: 720 },
          { value: 1080 },
          { value: 1440 },
          { value: 2160 },
        ]
      case "ultrawide":
        return [{ value: 1080 }, { value: 1440 }, { value: 1600 }]
      case "superultrawide":
        return [{ value: 1080 }, { value: 1440 }]
      default:
        return []
    }
  }

  const isWidthOutOfRange = width > 5200 || width < 0
  const isHeightOutOfRange = height > 5200 || height < 0

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="aspect-ratio-select-label">
          Aspect Ratio Preset
        </InputLabel>
        <Select
          labelId="aspect-ratio-select-label"
          value={aspectRatio}
          onChange={handleAspectRatioChange}
          label="Aspect Ratio Preset"
        >
          <MenuItem value="widescreen">Widescreen (16:9)</MenuItem>
          <MenuItem value="ultrawide">Ultrawide (21:9)</MenuItem>
          <MenuItem value="superultrawide">Super Ultrawide (32:9)</MenuItem>
          <MenuItem value="custom">Custom</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {aspectRatio === "custom" && (
          <>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <AspectRatioInputs
              aspectWidth={aspectWidth}
              aspectHeight={aspectHeight}
              handleAspectWidthChange={handleAspectWidthChange}
              handleAspectHeightChange={handleAspectHeightChange}
            />
          </>
        )}
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <ResolutionSliders
          width={width}
          height={height}
          aspectWidth={aspectWidth}
          aspectHeight={aspectHeight}
          handleWidthChange={handleWidthChange}
          handleHeightChange={handleHeightChange}
          getWidthMarks={getWidthMarks}
          getHeightMarks={getHeightMarks}
          isWidthOutOfRange={isWidthOutOfRange}
          isHeightOutOfRange={isHeightOutOfRange}
        />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <ResolutionDisplay width={width} height={height} />
        <Grid item xs={12} container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={saveResolution}
            fullWidth
            size="large"
            sx={{ maxWidth: "400px" }}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <SavedResolutions resolutions={resolutions} onDelete={handleDelete} />
      </Grid>
    </>
  )
}

export default ResolutionConfigurator
