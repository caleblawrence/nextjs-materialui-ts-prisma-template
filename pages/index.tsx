import { Button, TextField } from "@material-ui/core";
import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [keyboardName, setKeyboardName] = useState("");
  const [keyboardSwitch, setKeyboardSwitch] = useState("");
  const [keyboardLink, setKeyboardLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addKeyboard = async () => {
    setIsLoading(true);
    var response = await axios.post("/api/keyboard", {
      name,
      keyboardName,
      keyboardSwitch,
      keyboardLink,
    });
    setIsLoading(false);

    if (response.status === 200) {
      window.location.href = "/keyboards";
    }
  };
  return (
    <>
      <Head>
        <title>Add a keyboard</title>
      </Head>
      <div className="container">
        <h1>Favorite Mechanical Keyboard</h1>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Keyboard Name"
          variant="outlined"
          value={keyboardSwitch}
          onChange={(e) => setKeyboardName(e.target.value)}
          style={{ marginTop: 10 }}
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Keyboard Switch"
          variant="outlined"
          value={keyboardName}
          onChange={(e) => setKeyboardSwitch(e.target.value)}
          style={{ marginTop: 10 }}
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Link to Keyboard"
          variant="outlined"
          value={keyboardLink}
          onChange={(e) => setKeyboardLink(e.target.value)}
          style={{ marginTop: 10 }}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={addKeyboard}
          disabled={isLoading || name === "" || keyboardName === ""}
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>

        <style jsx>{`
          @media only screen and (max-width: 600px) {
            h1 {
              font-size: 30px;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          .container {
            margin-right: auto; /* 1 */
            margin-left: auto; /* 1 */

            max-width: 960px; /* 2 */

            padding-right: 10px; /* 3 */
            padding-left: 10px; /* 3 */
          }
        `}</style>
      </div>
    </>
  );
}
