import React from "react";
import {
  Button,
  Container,
  Typography,
  makeStyles,
  TextField,
} from "@mui/material";

import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import { pFirestore, pStorage, timestamp } from "../../firebase/firebaseConfig";

// Custom CSS styles
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  separator: {
    minHeight: 150,
  },
});

export default function ExpUpload() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [jobTitleError, setJobTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [fileURL, setFileURL] = useState(null);
  const [file, setFile] = useState();
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescError(false);
    setFileError(false);
    setJobTitleError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (desc === "") {
      setDescError(true);
    }

    if (link === "") {
      setLinkError(true);
    }

    if (date === "") {
      setDateError(true);
    }

    if (jobTitle === "") {
      setJobTitleError(true);
    }

    if (!file) {
      setFileError(true);
    }

    if (title && desc && link && file && jobTitle && date) {
      const collectionRef = pFirestore.collection("experiences");
      const created = timestamp();
      const probj = {
        title: title,
        jobTitle: jobTitle,
        desc: desc,
        imageUrl: fileURL,
        link: link,
        created: created,
        date: date,
      };
      collectionRef.add(probj);
      console.log("added exp");
      if (fileURL) {
        window.location("/");
      }
    }
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (types.includes(file.type)) {
      const storageRef = pStorage.ref();
      const fileRef = storageRef.child(file.name);

      await fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name);
      });
      setFileURL(await fileRef.getDownloadURL());
      setError(null);
      setDisabled(false);
    } else {
      setError("Invalid file type");
      console.log(error);
    }
  };

  return (
    <Container>
      {/* Typography components */}
      <div className={classes.separator}></div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        className={classes}
      >
        Create a new experience
      </Typography>

      {/* Textfields */}
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Company"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setJobTitle(e.target.value)}
          className={classes.field}
          label="Position"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={jobTitleError}
        />
        <TextField
          onChange={(e) => setLink(e.target.value)}
          className={classes.field}
          label="Website (if exists)"
          variant="outlined"
          color="secondary"
          fullWidth
          error={linkError}
        />
        <TextField
          onChange={(e) => setDate(e.target.value)}
          className={classes.field}
          label="Date"
          variant="outlined"
          color="secondary"
          fullWidth
          error={dateError}
        />
        <TextField
          onChange={(e) => setDesc(e.target.value)}
          className={classes.field}
          label="Description"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={descError}
        />
        <input
          accept="image/*"
          type="file"
          onChange={onFileChange}
          className={classes.field}
          id="raised-button-file"
          error={fileError}
        />
        <label htmlFor="raised-button-file">
          Upload a PNG, JPEG, or JPG image
        </label>

        {/* Button component */}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SendIcon />}
          className={classes}
          disabled={disabled}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
