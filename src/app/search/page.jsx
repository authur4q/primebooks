"use client"
import React, { useEffect, useState } from 'react'
import styles from "./search.module.css"
import Link from 'next/link'

const Search = () => {
    const [bookdata, setBookdata] = useState(null);
    const [title, setTitle] = useState("")
    const [debouncedTitle, setDebouncedTitle] = useState(title); 


    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedTitle(title);
        }, 500); 

   
        return () => {
            clearTimeout(timer);
        };
    }, [title]);


    useEffect(() => {
    
        if (debouncedTitle.trim() === "") {
            setBookdata(null); 
            return;
        }

        const getData = async () => {
            try {
            
                const res = await fetch(`/api/books?title=${debouncedTitle}`, { cache: 'no-store' });
                
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await res.json();
                setBookdata(result);
                console.log(result);
            } catch (error) {
                console.error("Search fetch error:", error);
            }
        }
    
        getData();
    }, [debouncedTitle]); 


    return (
        <div className={styles.search}>
       
            <input 
                onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                type="search" 
                placeholder='Search book by Title' 
            />
            <div className={styles.searchresults}>
                {bookdata && bookdata.map((book) => (
                    <Link href={`/books/${book._id}`} key={book._id}>
                        <h2>{book.title}</h2>
                    </Link>
                ))}
              
                {bookdata && bookdata.length === 0 && (
                    <p>No books found matching "{title}".</p>
                )}
            </div>
        </div>
    )
}

export default Search