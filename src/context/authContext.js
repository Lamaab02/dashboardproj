import React, { useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'

const authContext = React.createContext()

export function useAuth(){
    return useContext(authContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
       return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        return auth.signOut()
    }
    function reset(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }
    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    
    useEffect(()=>{
        const unsbscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsbscribe
    }, [])
    

    const value = {
          currentUser,
          signup,
          login,
          logout,
          reset,
          updateEmail,
          updatePassword
    }
  return (
    <authContext.Provider value={value}>
        {!loading && children}
    </authContext.Provider>
  )
}
