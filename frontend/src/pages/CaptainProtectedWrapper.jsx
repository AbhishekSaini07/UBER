
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
    //const {user}= useContext(UserDataContext)
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
          navigate('/captain-login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response=>{
            if(response.status===200) {
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        }).catch(err=> {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/captain-login');
    
        })
        
      }, [setCaptain,token, navigate]);
    
    if(isLoading){
        return (<div>Loading...</div>)
    }
    
  return (
    <> {children}</>
   
  )
}

export default CaptainProtectedWrapper