import React, {useState} from 'react'

export default function App(){
  const [text, setText] = useState('')
  const [out, setOut] = useState('')

  function simulateTranslate(){
    setOut(`Translated: ${text}`)
  }

  return (
    <div className="app">
      <h1>LinguaOffline Demo</h1>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Type text here" />
      <div className="controls">
        <select>
          <option value="en-mw">EN → MW</option>
          <option value="en-fr">EN → FR</option>
        </select>
        <button onClick={simulateTranslate}>Translate</button>
      </div>
      <pre className="output">{out}</pre>
    </div>
  )
}
