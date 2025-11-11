"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from "./feeds.module.css"
import { useEffect } from 'react'
import Link from 'next/link'




const Feed =  () => {
    const [data,setData] = useState([])

 useEffect(()=>{
         const getData = async () =>{
        const res = await fetch("http://localhost:3000/api/register")
        console.log(res)
        if(res.ok){
            setData(await res.json())
         }
    }
    
    getData()

},[])

console.log(data)
    
  return (
    <div className={styles.feed}>
      <div className={styles.text}>
        <h1>Your ultimate events updator</h1>
      </div>
      <div  className={styles.container}>
        <div className={styles.cards}>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup ggggggggggggggggggggggggggggggggggggggggggggggggg</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                    <p>Read more</p>

                </div>
                
            </div>
            <div className={styles.card}>
                <Image
                src={"/DSCN_20230531_070558_Canon_EOS_R10_DSLR🕊️.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                </div>
            </div>

        </div>
    <div className={styles.users}>
  <h1>Users</h1>
  {data.length > 0 && data.map(user => (
    <div key={user._id} className={styles.user}>
        <Link href={`/feeds/${user._id}`}>
      <Image
        src={user.image} // Make sure this matches your DB field name
        alt="user profile picture"
        height={100}
        width={120}
        className={styles.profimg}
      />
      </Link>
      <h3>{user.firstname} {user.lastname}</h3>
    </div>
  ))}
</div>

      </div>
    </div>
  )
}

export default Feed
