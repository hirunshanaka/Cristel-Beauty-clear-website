import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homePage'
import LoginPage from './pages/home/loginPage'
import SigninPage from './pages/home/signinPage'
import AdminHomePage from './pages/home/adminHomePage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/admin/*"element={<AdminHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App