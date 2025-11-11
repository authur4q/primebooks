import { connectDb } from "../../../../../lib/mongoDb";
import User from "../../../../../models/users";
import { NextResponse } from "next/server"


export const DELETE = async (req,{params}) => {
   
const userid = await params.userdeleteid
    
    if (!userid) {
        return new NextResponse("Book ID is required", { status: 400 });
    }

    try {
        await connectDb()
        
        
        const book = await User.findByIdAndDelete(userid)
        
        if (!book) {
            return new NextResponse("Book not found", { status: 404 });
        }
        
      
        return NextResponse.json(book)
    } catch (error) {
       
        console.error("Error fetching book by ID:", error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}