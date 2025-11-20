import React, {useEffect, useState} from 'react'
import Logo from '../assets/logo.svg'

export default function LoadingScreen({onFinish}){
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=>{
      setShow(false)
      if(onFinish) onFinish()
    }, 1400)
    return ()=>clearTimeout(t)
  },[])

  if(!show) return null
  return (
    <div className="fixed inset-0 bg-teal-600 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="mx-auto w-28 h-28 mb-4" dangerouslySetInnerHTML={{__html: Logo}} />
        <h1 className="text-3xl font-extrabold">LinguaOffline</h1>
        <p className="opacity-90 mt-2">Offline Text & Audio Translator</p>
      </div>
    </div>
  )
}
