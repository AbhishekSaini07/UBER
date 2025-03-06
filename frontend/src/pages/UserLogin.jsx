import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, setUser}= useContext(UserDataContext)
    const navigate = useNavigate()
    const submitHandler = async (e) => {
       
        e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if(response.status == 200){
      
      const data= response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home')
    }

    setEmail("");
    setPassword("");
    
    }
  return (
    <div className='bg-white p-7 h-screen flex flex-col justify-between '>
       <div>
       <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='uber-logo' />
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className='text-xl font-medium mb-2'>What's your email</h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com' value={email} onChange={(e)=>{
                setEmail(e.target.value
                )
            }}/>
            <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' value={password} onChange={(e)=>{
                setPassword(e.target.value
                )
            }} />
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>Login</button>
           
        </form>
        <p className='text-center'>New here?<Link to='/signup' className="text-blue-600">Create new Account</Link></p>
       </div>
       <div>
        <Link to='/captain-login' className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as Caption</Link>
       </div>
    </div>
  )
}

export default UserLogin