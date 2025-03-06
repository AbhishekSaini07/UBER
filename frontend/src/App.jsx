import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserSignup from "./pages/UserSignup"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Start from "./pages/Start"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainLogout from "./pages/CaptainLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
const App = () => {
  return (
    <div className='bg-red-700'>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='login' element={<UserLogin />} />
        <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>} />
        <Route path='/captain-login' element={<CaptainLogin />} />      
        <Route path='/captain-signup' element={<CaptainSignup
        />}
        /> 
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />   
        <Route path="/captain/logout" element={<UserProtectedWrapper><CaptainLogout/></UserProtectedWrapper>} />  
        <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>} />
      </Routes>
    </div>
  )
}

export default App