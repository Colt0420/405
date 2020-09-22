import React from "react"
import logo from "./logo.png"
import "./App.css"

function App() {
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
          Please take the survey
        </a>
      </header>
    </div>
  )
}

export default App
