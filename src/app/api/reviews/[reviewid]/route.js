import { connectDb } from "../../../../../lib/mongoDb";
import ReviewModel from "../../../../../models/reviews";
import { NextResponse } from "next/server"


export const DELETE = async (req,{params}) => {
   
const reviewid = await params.reviewid
    
    if (!reviewid) {
        return new NextResponse("review ID is required", { status: 400 });
    }

    try {
        await connectDb()
        
        
        const book = await ReviewModel.findByIdAndDelete(reviewid)
        
        if (!reviewid) {
            return new NextResponse("Review not found", { status: 404 });
        }
        
      
        return NextResponse.json(book)
    } catch (error) {
       
        console.error("Error fetching book by ID:", error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export const GET = async (req,{params}) => {
   
    const {bookid} = params
    console.log("book id in review route",bookid)

    try {
        await connectDb()
        const reviews = await ReviewModel.find({bookid: bookid}).sort({createdAt:-1})
        console.log("reviews fetched in review route",reviews)
        return NextResponse.json(reviews)
    } catch (error) {
        return NextResponse.json({error:"error fetching reviews"},{status:500})
    }
    
    
    
    }