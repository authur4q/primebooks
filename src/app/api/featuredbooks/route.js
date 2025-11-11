import { connectDb } from "../../../../lib/mongoDb"
import Featuredbooks from "../../../../models/featuredbooks";
import { NextResponse } from "next/server"


export const POST = async (req) => {
    
    const { titlefb, imagefb, authorfb, ratingfb} = await req.json(); 
    
    
    if (!titlefb || !authorfb || !ratingfb ) {
        
        return NextResponse.json({ 
            error: "Missing required fields: title, author, and rating are mandatory." 
        }, { status: 400 });
    }

    try {
        await connectDb();
        

        const newFbook = await Featuredbooks.create({
            titlefb,
            authorfb,
            imagefb,
            ratingfb 
        });

        return NextResponse.json({ message: "book added"}, { status: 201 });
    } catch (error) {
        
        console.error("Fbooks Creation Error:", error.message);
        
        
        if (error.name === 'ValidationError') {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export const GET = async (req) => {

  try {
    await connectDb()
    const featuredbooks = await Featuredbooks.find().sort({createdAt:-1})
    return NextResponse.json(featuredbooks)
  } catch (error) {
    console.log(error)
  }
}
