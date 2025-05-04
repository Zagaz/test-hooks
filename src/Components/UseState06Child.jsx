import React, { useEffect, useState } from 'react'

const UseState06Child = ({ action }) => {
  const [user, setUser] = useState(null) // Store fetched user data

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json()

      // Extract only name and email
      const { name, email } = data
      setUser({ name, email })
    }

    fetchData()
  }, [])

  return (
    <>
      <button onClick={() => user && action(user)}>Child</button>
    </>
  )
}

export default UseState06Child
