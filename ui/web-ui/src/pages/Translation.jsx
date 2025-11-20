import React, {useState, useRef} from 'react'
import { FiUpload, FiMic, FiPlay, FiRefreshCw } from 'react-icons/fi'

export default function Translation(){
  const [textIn, setTextIn] = useState('')
  const [textOut, setTextOut] = useState('')
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState('text')

  // Audio states
  const [recording, setRecording] = useState(false)
  const [audioURL, setAudioURL] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  async function simulateTranslate(){
    setLoading(true)
    setTextOut('')
    setTimeout(()=>{
      setTextOut('Translated (demo): ' + textIn)
      setLoading(false)
    }, 900)
  }

  function startRecord(){
    if(!navigator.mediaDevices) return alert('Recording not supported')
    setRecording(true)
    audioChunksRef.current = []
    navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{
      const mr = new MediaRecorder(stream)
      mediaRecorderRef.current = mr
      mr.ondataavailable = e=>audioChunksRef.current.push(e.data)
      mr.onstop = ()=>{
        const blob = new Blob(audioChunksRef.current, {type:'audio/webm'})
        setAudioURL(URL.createObjectURL(blob))
      }
      mr.start()
    }).catch(()=>{alert('Microphone access denied'); setRecording(false)})
  }

  function stopRecord(){
    setRecording(false)
    if(mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive'){
      mediaRecorderRef.current.stop()
    }
  }

  function handleUpload(e){
    const f = e.target.files[0]
    if(!f) return
    setAudioURL(URL.createObjectURL(f))
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Translate</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Translation */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Text Translation</h3>
            <div className="text-sm text-slate-500">Demo — Offline-ready</div>
          </div>
          <textarea className="w-full h-36 p-3 border rounded" value={textIn} onChange={e=>setTextIn(e.target.value)} placeholder="Type or paste text" />
          <div className="flex items-center gap-2 mt-3">
            <select className="p-2 border rounded">
              <option>EN → MW</option>
              <option>EN → FR</option>
            </select>
            <button onClick={simulateTranslate} className="ml-auto inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded">
              {loading ? 'Translating...' : 'Translate'}
            </button>
            <button onClick={()=>{setTextIn(''); setTextOut('')}} className="p-2 border rounded text-slate-600"><FiRefreshCw/></button>
          </div>
          <div className="mt-4 bg-slate-50 p-3 rounded min-h-[80px]">
            {textOut || <span className="text-slate-400">Translation output will appear here.</span>}
          </div>
        </div>

        {/* Audio / ASR & TTS */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Audio — ASR & TTS</h3>
            <div className="text-sm text-slate-500">Upload or record audio</div>
          </div>

          <div className="mb-3">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="file" accept="audio/*" onChange={handleUpload} className="hidden" />
              <span className="inline-flex items-center gap-2 px-3 py-2 border rounded"><FiUpload/> Upload Audio</span>
            </label>
            <div className="inline-block ml-3">
              {!recording ? (
                <button onClick={startRecord} className="inline-flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded"><FiMic/> Record</button>
              ) : (
                <button onClick={stopRecord} className="inline-flex items-center gap-2 px-3 py-2 bg-slate-700 text-white rounded">Stop</button>
              )}
            </div>
          </div>

          <div className="mb-3">
            <div className="p-3 border rounded">
              {audioURL ? (
                <div className="flex items-center gap-3">
                  <audio src={audioURL} controls/>
                  <button onClick={()=>{setAudioURL(null)}} className="text-sm text-slate-600">Remove</button>
                </div>
              ) : (
                <div className="text-slate-400">No audio selected.</div>
              )}
            </div>
          </div>

          <div className="mt-3">
            <div className="mb-2 font-medium">Convert audio → text (ASR)</div>
            <div className="text-sm text-slate-600 mb-2">Demo placeholder: on real integration, this will call offline ASR.</div>
            <button className="px-4 py-2 bg-teal-600 text-white rounded">Run ASR</button>
          </div>

          <div className="mt-6">
            <div className="mb-2 font-medium">Convert text → audio (TTS)</div>
            <textarea className="w-full h-20 p-3 border rounded" placeholder="Text to speak"/>
            <div className="flex gap-2 mt-3">
              <button className="px-4 py-2 bg-teal-600 text-white rounded inline-flex items-center gap-2"><FiPlay/> Play</button>
              <button className="px-4 py-2 border rounded inline-flex items-center gap-2">Download</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
