
import './App.css'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { UsercontextProvider } from './context/UserContext'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Notes from './pages/Notes'
import Problems from './pages/Problems'
import Solving from './pages/Solving'
import Courses from './pages/Courses'
import Success from './pages/Success'
import Failed from './pages/Failed'

function App() {


  return (
    <div>
    <UsercontextProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/problems' element={<Problems/>}/>
        <Route path='/solve/:title' element={<Solving/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/failed' element={<Failed/>}/>
      </Routes>
    </BrowserRouter>
    </UsercontextProvider>
     
    </div>

  )
}

export default App
