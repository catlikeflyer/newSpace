import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Box, Container } from "@material-ui/core";
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
