import React, {useState} from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import About from './pages/About'
import Contact from './pages/Contact'
import Translation from './pages/Translation'

export default function App(){
  const [loadingDone, setLoadingDone] = useState(false)

  return (
    <div className="app-wrapper bg-slate-50 min-h-screen">
      {!loadingDone && <LoadingScreen onFinish={()=>setLoadingDone(true)} />}

      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <div className="text-teal-600 font-extrabold text-xl">LinguaOffline</div>
          <nav className="flex gap-3 ml-4">
            <NavLink to="/" className={({isActive})=>isActive? 'text-teal-600 font-semibold' : 'text-slate-600'}>Translate</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive? 'text-teal-600 font-semibold' : 'text-slate-600'}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive? 'text-teal-600 font-semibold' : 'text-slate-600'}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-6">
        <Routes>
          <Route path="/" element={<Translation/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  )
}
