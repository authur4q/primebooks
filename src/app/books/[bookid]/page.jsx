"use client"
import React, { useState,useEffect } from 'react'
import styles from "./bookid.module.css"
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import Link from 'next/link'


const Singlebook = () => {
    const {data:session,status} = useSession()
    
   
    const currentUser = session?.user?.username
    const userId =  session?.user?.id
    console.log(userId)
    const username = currentUser
    const {bookid} = useParams()
    console.log(bookid)
    const ig = session?.user?.ig
    const tiktok = session?.user?.tiktok
    console.log(ig);
    console.log(tiktok);
    console.log(username);
    console.log(bookid)
    

    const [reviewtext, setReviewtext] = useState("")
    const [data,setData] = useState(null)
    const [bookdata,setBookdata] = useState({})

      useEffect(() => {
        const getData = async () => {
          if (!bookid || bookid.trim() === "") {
            console.log("Book ID is not yet valid or is empty.");
            return; 
        }
       const res = await fetch(`/api/reviews?bookid=${bookid}`, { cache: 'no-store' })
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result)
        console.log(result)
      }
    
      getData()
        
      },[bookid])
      useEffect(() => {
        const getData = async () => {
        const res = await fetch(`/api/books/${bookid}`, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setBookdata(result)
        console.log(result)
      }
    
      getData()
        
      },[bookid])

        if (status === 'loading') {
        return <div className={styles.single}>Loading...</div>;
    }
    

const handleSubmit= async (e) => {
  e.preventDefault()
          if (!reviewtext.trim()) {
            alert("Review text cannot be empty.");
            return;
        }

  
  const res = await fetch("/api/reviews",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        username,
        reviewtext,
        userId,
        bookid,
        
    })
  })
  console.log(res)
  if(res.ok){
    setReviewtext("")
  }
}
  return (
    <div className={styles.single}>
      
              <div  className={styles.imagedetails}>
           
                <div className={styles.imagei}>
                  <Image 
                  src={bookdata.image}
                  height={250}
                  width={200}
                  alt="picture"
                  className={styles.image}/>
                  
                  <div className={styles.info}>
                    <h1>Title:{bookdata.title}</h1>
                    <h2>Author:{bookdata.author}</h2>
                    <h2>Rating:{bookdata.rating}</h2>

                  </div>
        </div>

            <div className={styles.description}>
                            <h2>Book Description</h2>
                            <p>{bookdata.description}</p>
            </div>
      </div>
      


      <div className={styles.reviews}>
        <h3>Reviews</h3>

          {data && data.map(review => (
          <div key={review._id} className={styles.reviewscontent}>
            <div className={styles.reviewsnd}>
              <Link href ={session? ig : "#"}> <h2>{review.username}</h2></Link>
               
                <p>{review.createdAt}</p>
            </div>
                        <p>{review.reviewtext}</p>
              </div>
          ))}


            </div>
      
      <div >
        <form className={styles.reviewtext} onSubmit={handleSubmit}>
          <textarea onChange={e => setReviewtext(e.target.value)} value={reviewtext}   required placeholder='rewiew book here....'></textarea>
          <button  className={styles.sendicon}  type='submit'>
            <Image
            src={"/sendIcon.jpg"}
            height={50}
            width={50}
            alt='send icon'
           
            ></Image>
            </button>
        </form>

      </div>

    </div>
  )
}

export default Singlebook
