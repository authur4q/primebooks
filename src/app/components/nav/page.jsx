"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./nav.module.css"
import { signOut, useSession } from 'next-auth/react'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Books",
        url: "/books"
    },
    // ID 3 could be used for Admin/Profile if logged out
    {
        id: 4,
        title: "My Profile",
        url: "/myprofile"
    },
]

const Nav = () => {
  // Destructure data and rename it to session
  const { data: session, status } = useSession();
  
  // Cleanly access user and role
  const currentUser = session?.user;
  const userRole = currentUser?.role;

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h2>primeBooks</h2>
      </div>

      <div className={styles.links}>
        
        <Link href={"/search"}>Search</Link>
        
      
        {links.map(link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}


        {userRole === "admin" && (
          <Link href={"/admin"}>Admin</Link>
        )}


      </div>
    </div>
  )
}

export default Nav