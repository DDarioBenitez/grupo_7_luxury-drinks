import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Users = props => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState("");

  useEffect(() => {
   const endpoint = "http://localhost:3050/api/auth/"
   const getUsers = async () => {
    try {
    const {ok , data} = await fetch(endpoint).then(res => res.json());

    ok && setUsers(data);
   console.log(data)
    } catch (error) {
      setError(error.message)
    }
   };
   getUsers();
  }, [])

  return (
    <h1 style={{color: '#191717'}}>Todos los usuarios</h1>
  )
}

Users.propTypes = {}

export default Users