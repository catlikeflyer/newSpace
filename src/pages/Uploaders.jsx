import React from "react";
import {
  Box,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import ProjectUpload from "../components/Uploaders/ProjectUpload";
import ExpUpload from "../components/Uploaders/ExpUpload";

export default function Uploaders() {
  const [value, setValue] = React.useState("Projects");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const rendering = (value) => {
    if (value === "Projects") {
      return <ProjectUpload />;
    }
    if (value === "Experiences") {
      return <ExpUpload />;
    }
  };

  return (
    <Box>
      <Container>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="cat"
            name="cat1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Projects"
              control={<Radio />}
              label="Projects"
            />
            <FormControlLabel
              value="Experiences"
              control={<Radio />}
              label="Experiences"
            />
          </RadioGroup>
        </FormControl>
      </Container>
      {rendering(value)}
    </Box>
  );
}
