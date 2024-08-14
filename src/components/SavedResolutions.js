import React from "react"
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const formatNumberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const SavedResolutions = ({ resolutions, onDelete }) => {
  const sortedResolutions = [...resolutions].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  )
  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom textAlign="center">
        Saved Resolutions:
      </Typography>
      {sortedResolutions.length === 0 ? (
        <Typography variant="body1">
          You currently have no saved resolutions.
        </Typography>
      ) : (
        <List>
          {sortedResolutions.map((res, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={`${res.width} x ${res.height} pixels`}
                  secondary={`Total Pixels: ${formatNumberWithCommas(
                    res.totalPixels
                  )} | Aspect Ratio: ${res.aspectRatio}`}
                />
                <IconButton edge="end" onClick={() => onDelete(res.timestamp)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              {index < sortedResolutions.length - 1 && (
                <Divider component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      )}
    </Grid>
  )
}

export default SavedResolutions
