"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";




  


export default  function Home() {
  const [data,setData] = useState(null);

  useEffect(() => {
      const getData = async () => {
    const res = await fetch("/api/featuredbooks", { cache: 'no-store' });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    setData(await res.json());
    
  }

  getData()
    
  }, []);

  return (
  <div className={styles.page}>

<div>
  <h1>
    Deep Dive into the Best-Selling Books.
  </h1>
</div>
<div className={styles.fb}>
  
  <h1>Featured Books</h1>
  <h2>Don't Miss These:Hand-Picked Featured Books.</h2>
</div>


    <div className={styles.featured}>
             {data && data.map((book) => (
              
            <div key={book._id} className={styles.featureddetails}>
                <div className={styles.imagei}>
                  <Image 
                  src={book.imagefb}
                  height={350}
                  width={300}
                  alt="picture"
                  />
                  <div className={styles.info}>
                    <h1>Title:{book.titlefb}</h1>
                    <h2>Author:{book.authorfb}</h2>
                    
                  </div>
                </div>
              </div>
             ))}


            </div>

      
    </div>
  );
}
