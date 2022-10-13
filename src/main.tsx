import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Private } from './pages/Private/Private';
import { Register } from './pages/Register/Register';
import { Login } from './Login';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { RequireAuth } from './contexts/auth/RequireAuth';

function App() {
  return(
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
