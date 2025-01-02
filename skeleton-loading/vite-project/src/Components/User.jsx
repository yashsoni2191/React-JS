import React, { useEffect, useState } from 'react'

function User() {
    const [Profile, setProfile] = useState(null)
    useEffect(()=>{
        setTimeout(async ()=>{
            let profileData = await fetch("https://jsonplaceholder.typicode.com/users")
            let res = await profileData.json()
            console.log(res)
            setProfile(res)
        })
    },5000)
  return (
    <div className='user'>
        <h2>User Details</h2>
        {profileData && className="user-wrapper"}
        </div>

  )
}

export default User