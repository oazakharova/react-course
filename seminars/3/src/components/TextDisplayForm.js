import {
  TextField,
  Button,
  CardContent,
  Card,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function TextDisplayForm() {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayedText(text);
  };

  return (
    <div>
      <TextField
        label="Введите текст"
        variant="outlined"
        fullWidth
        margin="normal"
        value={text}
        onChange={handleChange}
      ></TextField>
      <Button onClick={handleSubmit} variant="contained">
        Отобразить текст
      </Button>
      {/* <div>
        Введенный текст: <span>{text}</span>
      </div> */}
      {displayedText && (
        <Card elevation={4}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              style={{ wordWrap: "break-word" }}
            >
              {displayedText}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default TextDisplayForm;
