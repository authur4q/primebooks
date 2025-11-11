"use client"
import React from 'react'
import styles from "./update.module.css"
import { useState,useEffect } from 'react'
 import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const UpdateUserInfo = () => {
  const  session = useSession()
  console.log("session",session)
    const [newUsername,setNewUsername] = useState("")
    const [newIglink,setNewIglink] = useState("")
    const [newTiktoklink ,setNewTiktoklink] = useState("")
    const [err,setErr] = useState("error updating")
    const router = useRouter()
    const userId = session?.data?.user?.id
   
    

const handleSubmit = async () => {
  
  const res = await fetch("/api/register",{
    method:"PATCH",
    body:JSON.stringify({
        newUsername:newUsername.trim().toLowerCase(),
        newIglink,
        newTiktoklink,
        userId,
        newUsername: newUsername.trim().toLowerCase()
    })
  })

  if(res.ok){
    setErr("updated successfully")
    setNewIglink("")
    setNewTiktoklink("")
    setNewUsername("")
    router.push("/myprofile")
  }

}


  return (
    <div>
          <div className={styles.update}>
      <div className={styles.container}>
        <div className={styles.name}>
            <input  onChange={e => setNewUsername(e.target.value)} value={newUsername} type="text" placeholder='newUsername'  required/>
            
        </div>
        <div className={styles.epp}>
            <input onChange={e => setNewTiktoklink(e.target.value)}  value={newTiktoklink}  placeholder='Tiktok Link'  required/>
            <input onChange={e => setNewIglink(e.target.value)} value={newIglink}  placeholder='Ig Link' required />
            
        </div>

        

        

        <div className={styles.updatebtn}>
            <button onClick={handleSubmit} >
                Update
            </button>


        </div>
      </div>
    </div>
    </div>
  )
}


export default UpdateUserInfo
