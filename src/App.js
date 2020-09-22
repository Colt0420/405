import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vanity</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Currently, to receive a vanity license plate, applicants must list
          their top three choices and receive the highest available one blind.
          This process is also done all by paper. We aim to provide a way to
          know ahead of time and complete the process online.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to the form
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to the Survey
        </a>
      </header>
    </div>
  )
}

export default App
