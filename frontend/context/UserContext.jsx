import React, { createContext, use, useState } from 'react';

export const UserDataContect = createContext();
const UserContext = ({children}) => {
    const [user,setUser] = useState({
        email:'',
        fullNmae:{
            firstName:'',
            lastName:'' 
        }
    });
    return (
    <div>
        <UserDataContect.Provider value={user}>
            {children}
            </UserDataContect.Provider>>

      
    </div>
  )
}

export default UserContext