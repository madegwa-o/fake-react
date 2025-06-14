import { useState } from 'react'
import Logo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Karu Exchange</h1>
      <div className="card">
        <p>
          Site under maintenance
        </p>
      </div>
    </>
  )
}

export default App
