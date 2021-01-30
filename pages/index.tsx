import { TextField } from "@material-ui/core";
import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  return (
    <div>
      <h1>Next-Material-TS</h1>
      <TextField
        id="outlined-basic"
        label="State"
        variant="outlined"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}
