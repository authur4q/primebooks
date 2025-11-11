"use client"
import React, { useEffect,useState } from 'react'
import styles from "./feed.module.css"
import Image from 'next/image'
import { useParams } from 'next/navigation'



const UserProfile = () => {
    const [data,setData] = useState([])
    const {id} = useParams()

 useEffect(()=>{
         const getData = async () =>{
        
        const res = await fetch("http://localhost:3000/api/register")
        console.log(res)
        if(res.ok){
            setData(await res.json())
         }
    }
    
    getData()

},[data])

console.log(data)
   
      return (
    <div className={styles.Profile}>
        <div className={styles.div1}>
            
            <Image  
            className={styles.profpic}
            src={"/backiee-309278.jpg"}
            height={200}
            width={250}
            priority
            alt='profile picture'
            ></Image>
           
            <div className={styles.userInfo}>
                <h2>firstname lastname</h2>
                <p>email</p>
                <p>0phone</p>
                
                <h3>institution</h3>
            </div>
            <div className={styles.usersocial}>
                <h2>Instagram</h2>
                <p>X</p>
                <p>Facebook</p>
                <h3>tiktok</h3>
            </div>


        </div>
         <div className={styles.cards}>
            <div className={styles.card}>
                <Image
                src={"/backiee-309278.jpg"}
                height={200}
                width={300}
                alt='event image'
                ></Image>
                <div className={styles.cardinfo}>
                    <h2>🎉 Tech Innovators Meetup</h2>
                    <p>📅 Date: August 25, 2025</p>
                    <p>🕒Time: 5:00 PM – 8:00 PM</p>
                    <p> 📍 Location: Nairobi Innovation Hub, Kenya</p>
                    <div className={styles.delup}>
                        
                        <p className={styles.up}>Update</p>
                        <p className={styles.del}>Delete</p>
                    </div>
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
      
    </div>
  )
}

export default UserProfile
