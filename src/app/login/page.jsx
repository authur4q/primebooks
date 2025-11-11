"use client"
import React, { useState } from 'react'
import styles from "./login.module.css"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const page = () => {
  const router = useRouter()
      const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  const handleClick = async(e) =>{
    e.preventDefault()
    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res.ok){
      router.push("/")
    }
  }

  return (
    <div>
          <div className={styles.login}>
      <div className={styles.container}>

        <div className={styles.epp}>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
          
        </div>

        <div className={styles.signup}>
            <button onClick={handleClick}>
                Login
            </button>
            <h2>Or</h2>
            <Link href = {"/register"}>
              <button>
                  Don't have an account?Sign Up
              </button>
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
