import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Set up the initial Context 
// Model Context
export const AccountContext = React.createContext()

// create a exportable consumer to get access to the provider
export const AccountConsumer = AccountContext.Consumer;

// Create a provider and everything we are storing globally will go here
const AccountProvider = ({ children }) => {
  const [user, setUser] = useState({ 
    username: '',
    dateJoined: '',
    membershipLvl: ''
  })

  useEffect( () => {
    // axios.get("/api/users")
    //   .then( res => setUser(res.data))
    //   .catch( err => console.log(err))
    setUser({ 
      id: 1,
      username: 'Fooman', 
      dateJoined: Date.now(), 
      membershipLvl: 'Bronze'
    })
  }, [])

  const updateAccount = (id, user) => {
    // axios.put(`/api/users/${id}`, {user})
    setUser(user)
  }

  return(
    <AccountContext.Provider value={{
      user,
      ...user,
      updateAccount: updateAccount,
    }}>
      { children }
    </AccountContext.Provider>
  )
}

export default AccountProvider;