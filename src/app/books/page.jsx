"use client"
import React from 'react'
import styles from "./books.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Books = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
    const res = await fetch("/api/books", { cache: 'no-store' });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    setData(result)
    console.log(result)
  }

  getData()
    
  },[])

  return (
    <div>
                  <div className={styles.featured}>


             
             
                   {data && data.map((book) => (
                     <Link key={book._id}   href={`/books/${book._id}`}>
            <div className={styles.featureddetails}>
                <div className={styles.imagei}>
                  <Image 
                  src={book.image}
                  height={350}
                  width={300}
                  alt="picture"
                  />
                  <div className={styles.info}>
                    <h1>Title:{book.title}</h1>
                    <h2>Author:{book.author}</h2>
                    <h2>Rating:{book.rating}</h2>
                    
                  </div>
                </div>
              </div>
               </Link>
             ))}
             


            </div>

    </div>
  )
}

export default Books
