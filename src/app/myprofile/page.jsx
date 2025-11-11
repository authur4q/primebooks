"use client"
import React, { useEffect, useState } from 'react'
import styles from "./profile.module.css"
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signOut } from 'next-auth/react'


const Profile = () => {

    
    const router = useRouter()
    const {data:session,status} = useSession()
    console.log(session)


    const role = session?.user?.role
    const email = session?.user?.email
    const username = session?.user?.username
    const userId = session?.user?.id
    console.log(userId)

    const ig = session?.user?.ig
    const tiktok = session?.user?.tiktok
    const [userReviews,setUserReviews] = useState([])


useEffect(() => {
    if(status==="unauthenticated"){
        router.push("/login")
    }

},[status,router])

      useEffect(() => {
        const getData = async () => {
        const res = await fetch(`/api/reviews?userId=${userId}`, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setUserReviews(result)
        console.log(result)
      }
    
      getData()
        
      },[userId])

        const handleDelete = async (reviewId) => {
            try {
              const res = await fetch(`/api/reviews/${reviewId}`, {
                method: 'DELETE',
              });
              if (res.ok) {
                setUserReviews(userReviews.filter((review) => review._id !== reviewId));
              }
            } catch (error) {
              console.error("Failed to delete review:", error);
            }
          };
   
      return (
    <div className={styles.Profile}>
        <div className={styles.div1}>
            

           
            <div className={styles.userInfo}>
                <h1>{username}</h1>
                <h2>{email}</h2>
                <h2>{role}</h2 >
                
                
                
            </div>
            <div className={styles.usersocial}>
                <Link href={session? ig:""}><h2>Instagram</h2></Link>
                <Link href={session? tiktok:""}><h2>Tiktok</h2></Link>
               
            </div>
            <div className={styles.edit}>
                <Link href={"/myprofile/updateuserinfo"}>< button>Edit profile</button> </Link>    
                < button  onClick={() => signOut()}>Log Out</button>  
            </div>

        </div>
        <div>
             <h1 className={styles.rym}>Reviews you made</h1>
        </div>
       
         <div className={styles.cards}>

            {userReviews && userReviews.map((review) => (
            <div key={review._id}  className={styles.card}>
  
                <div className={styles.reviewinfo}>
                  <Link href={`/books/${review.bookid}`}> <h2>{review.reviewtext}</h2></Link>
                    <div className={styles.delup}>
                        <button onClick={(e) => handleDelete(review._id)} className={styles.del}>Delete</button>
                    </div>
                </div>
            </div>
            ))}
            




        </div>
      
    </div>
  )
}

export default Profile
