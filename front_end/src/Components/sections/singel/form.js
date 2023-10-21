import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

export default function AddressForm() {
  
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom></Typography>
      <Grid container spacing={2}>
        <InputLabel htmlFor="name">Name</InputLabel>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="name"
            // label="Name"
            fullWidth
            placeholder="Name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputLabel htmlFor="name">Comment</InputLabel>

          <TextField
            required
            id="firstName"
            name="Comment"
            // label="Comment"
            placeholder="Comment"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </Grid>
    </React.Fragment>
  );
}











