import { connectDb } from "../../../../../lib/mongoDb"
import Books from "../../../../../models/books"
import { NextResponse } from "next/server"


export const GET = async (req, { params }) => {
   
    const  {bookid} =  params
    
    if (!bookid) {
        return new NextResponse("Book ID is required", { status: 400 });
    }

    try {
        await connectDb()
        
        
        const book = await Books.findById(bookid)
        
        if (!book) {
            return new NextResponse("Book not found", { status: 404 });
        }
        
      
        return NextResponse.json(book)
    } catch (error) {
       
        console.error("Error fetching book by ID:", error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
