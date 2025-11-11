"use client"
import React, { useEffect } from 'react'
import styles from "./adm.module.css"
import { useState} from 'react'
import Image from 'next/image'


const Admin = () => {
const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [rating,setRating] = useState("")
const [description,setDescription] = useState("")
const [image,setImage] = useState("")

const [titlefb,setTitlefb] = useState("")
const [authorfb,setAuthorfb] = useState("")
const [ratingfb,setRatingfb] = useState("")

const [imagefb,setImagefb] = useState("")
const [users,setUsers] = useState(null)
const [fbooks,setFbooks] = useState(null)

      useEffect(() => {
        const getData = async () => {
        const res = await fetch(`/api/featuredbooks`, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setFbooks(result)
        console.log(result)
      }
    
      getData()
        
      },[])

      useEffect(() => {
        const getData = async () => {
        const res = await fetch(`/api/register`, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setUsers(result)
        console.log(result)
      }
    
      getData()
        
      },[])




const handleAddBook = async () => {
  
  const res = await fetch("/api/books",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title,
        author,
        rating:rating.trim().toString(),
        description,
        image
    })
  })
  if(res.ok){
    setTitle(""),
    setAuthor(""),
    setRating(""),
    setImage("")
  }
}
const handleAddFb = async () => {
  
  const res = await fetch("/api/featuredbooks",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        titlefb,
        authorfb,
        ratingfb,
        imagefb
    })
  })
  if(res.ok){
 
    setTitlefb(""),
    setAuthorfb(""),
    setRatingfb(""),
    setImagefb("")

  }
}
const handleDeletefb = async (fbid) => {
  
  const res = await fetch(`/api/featuredbooks/${fbid}`,{
    method:"DELETE",

  })
}
const handleDeleteuser= async (userdeletedid) => {
  
  const res = await fetch(`/api/register/${userdeletedid}`,{
    method:"DELETE",

  })
}




  return (
    <div   className={styles.adminmain}>
          <div className={styles.admin}>

        <div className={styles.ab}>
           <h1>Add Featured Book</h1>

                <div className={styles.inputs}>
                    <input onChange={e => setAuthorfb(e.target.value)} value={authorfb}  placeholder='Author '  required/>
                    <input onChange={e => setTitlefb(e.target.value)}  value={titlefb} placeholder='Book Tilte' required />
              
                    <input onChange={e => setRatingfb(e.target.value)} value={ratingfb} placeholder='Book Rating' required />
                    <input onChange={e => setImagefb(e.target.value)} value={imagefb} placeholder='Enter image url'  required />
                    <button onClick={handleAddFb} >
                        Add Book
                    </button>
                </div>

              
            </div>
        <div className={styles.ab}>
           <h1>Add books</h1>

                <div className={styles.inputs}>
                    <input onChange={e => setAuthor(e.target.value)} value={author}  placeholder='Author '  required/>
                    <input onChange={e => setTitle(e.target.value)}  value={title} placeholder='Book Tilte' required />
                    <input onChange={e => setDescription(e.target.value)} value={description} placeholder='Book Description' required />
                    <input onChange={e => setRating(e.target.value)} value={rating} placeholder='Book Rating' required />
                    <input onChange={e => setImage(e.target.value)}  value={image} placeholder='Enter image url'  required />
                    <button onClick={handleAddBook} >
                        Add Book
                    </button>
                </div>

              
            </div>

    </div>
    <div className={styles.userfeatured}>
       
        <div  className={styles.users}>
            <h1>primeBooks users</h1>
            <hr />
             {users && users.map(user => (
            <div key={user._id}  className={styles.userinfo} >
                <h2>{user.username} </h2>
                <button onClick={() => handleDeleteuser(user._id)}>Delete user</button>
            </div>
                ))}

  

        </div>
    
        <div className={styles.fb}>
           <h1>Current Featured Books</h1> 
           <hr />
           {fbooks && fbooks.map(book => (
        <div key={book._id} className={styles.bookdetails}>
            <Image
            src={book.imagefb}
            width={130}
            height={150}
            className={styles.image}
            alt='Featured book'
            ></Image>
            <div className={styles.bdetails}>
                <h2>{book.titlefb}</h2>
                <button onClick={() => handleDeletefb(book._id)}>Remove book</button>
            </div>

           </div>
           ))}
  

        </div>
    </div>
    </div>

  )
}

export default Admin
