import React from "react";
import {
  Button,
  Container,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";
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

export default function ProjectUpload() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("")
  const [tech, setTech] = useState([])
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [fileError, setFileError] = useState(false);
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

    if (title === "") {
      setTitleError(true);
    }

    if (desc === "") {
      setDescError(true);
    }

    if (link === "") {
      setLinkError(true);
    }

    if (!file) {
      setFileError(true);
    }

    if (title && desc && link && file) {
      const collectionRef = pFirestore.collection("projects");
      const date = timestamp();
      const probj = {
        title: title,
        desc: desc,
        imageUrl: fileURL,
        link: link,
        date: date,
      };
      collectionRef.add(probj);
      console.log("added project");
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
      console.log(error)
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
        Create a new portfolio item
      </Typography>

      {/* Textfields */}
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setLink(e.target.value)}
          className={classes.field}
          label="Demo link"
          variant="outlined"
          color="secondary"
          fullWidth
          error={linkError}
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
        <TextField
          onChange={(e) => setTech(e.target.value.split(','))}
          className={classes.field}
          label="Tech"
          variant="outlined"
          color="secondary"
          fullWidth
          required
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
