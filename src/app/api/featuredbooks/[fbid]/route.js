import { connectDb } from "../../../../../lib/mongoDb";
import Featuredbooks from "../../../../../models/featuredbooks";
import { NextResponse } from "next/server"


export const DELETE = async (req,{params}) => {
   
const bookid = await params.fbid
    
    if (!bookid) {
        return new NextResponse("Book ID is required", { status: 400 });
    }

    try {
        await connectDb()
        
        
        const book = await Featuredbooks.findByIdAndDelete(bookid)
        
        if (!book) {
            return new NextResponse("Book not found", { status: 404 });
        }
        
      
        return NextResponse.json(book)
    } catch (error) {
       
        console.error("Error fetching book by ID:", error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}