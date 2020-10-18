import React, { useState } from "react"
import logo from "./logo.png"
import "./App.css"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const clear = () => {
    setName("")
    setEmail("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: "0" }}>Vanity Plate</h1>
        <img
          style={{ margin: 10 }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p style={{ fontSize: "26px" }}>
          Currently, to receive a vanity license plate, applicants must list
          their top three choices and receive the highest available one blind.
          This process is all done by paper. We aim to provide a way to know
          ahead of time and complete the process online.
        </p>
        <a
          className="App-link"
          href="https://forms.gle/ucffKTtEBnMvn9jf6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to survey
        </a>

        <TextField
          error
          key="Confirmation Code"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-error-helper-text"
          label="Name"
          variant="outlined"
        />

        <TextField
          error
          key="Confirmation Code"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-error-helper-text"
          label="Email"
          variant="outlined"
        />

        <Button
          onClick={() => {
            clear()
            alert("Thank you for your response")
          }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </header>
    </div>
  )
}

export default App
