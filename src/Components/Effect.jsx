import React from 'react'

const Effect = () => {
  return (
    <div className="container">
    <div className='row'>
      <div className='col'>
        {windowWidth}
      </div>

    </div>
    <div className="row">
      {resource && (
        <div className="col">
          <h1>{resource}</h1>
        </div>
      )}
    </div>

    <div className="row">
      <div className="col">
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('users')}>Users</button>
        <button onClick={() => setResource('comments')}>Comments</button>
      </div>
    </div>

    <div className="row">
      <button
        onClick={() => setUser(user < 10 ? user + 1 : 1)}
      >
        User ID: {user}
      </button>
    </div>
    {
      userData && <div>
        <h3>{userData.name}</h3>
        <p>{userData.email}</p>
      </div>
    }

  </div>
  )
}

export default Effect