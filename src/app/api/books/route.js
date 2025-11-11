import { connectDb } from "../../../../lib/mongoDb"
import Books from "../../../../models/books";
import { NextResponse } from "next/server"



export const POST = async (req) => {
   const { title,image,author,description,rating } = await req.json();
    try {
      await connectDb()

    const existingBook = await Books.findOne({ title });
    if (existingBook) {
      return NextResponse.json({ error: "Book already exists" }, { status: 409 });
    }



    
    const newBook = await Books.create({
      title,
      author,
      description,
        image,
        rating
    });
    console.log(newBook)

    return NextResponse.json({ message: "book  added"}, { status: 201 });
    } catch (error) {
    
    return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}


export const GET = async (req) => {
      const url = new URL(req.url)
    const title =  url.searchParams.get("title")

    const query = title 
        ? { 
            
            title: { 
                $regex: title, 
                $options: 'i' 
            } 
          }
        : {}; 
    
  try {
    await connectDb()
    const books = await Books.find(query).sort({createdAt:-1})
    return NextResponse.json(books)
  } catch (error) {
    console.log(error)
  }
}

