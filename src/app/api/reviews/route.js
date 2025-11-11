import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/mongoDb";
import ReviewModel from "../../../../models/reviews";


export const POST =async (req) =>{

    const {reviewtext,username,userId,bookid} = await req.json()

    try {
      if (!userId || !bookid || !reviewtext) {
                return res.status(400).json({ message: 'Missing required fields.' });
            }
        await connectDb()
        const newReview = await ReviewModel.create({
            
            reviewtext,
            username,
            userId,
            bookid,
            

        })

        console.log(newReview)

    
        return NextResponse.json({message:"review posted successfully",newReview},{status:201})
    } catch (error) {
        return NextResponse.json({error:"error posting review"},{status:500})
    }
}



export const GET = async (req) => {
    const url = new URL(req.url);
    const bookid = url.searchParams.get("bookid");
    const userId = url.searchParams.get("userId");

    let queryConditions = {};
    
 
    if (!bookid && !userId) {
        return new NextResponse("Must provide bookid or userId filter.", { status: 400 });
    }

    
    if (bookid) {
        queryConditions.bookid = bookid;
    }

  
    if (userId) {
        queryConditions.userId = userId;
    }



    try {
        await connectDb();
        
    
        const reviews = await ReviewModel.find(queryConditions).sort({createdAt: -1});
        
        return NextResponse.json(reviews);
    } catch (error) {
        console.error("Server Error:", error);
        return new NextResponse("Failed to fetch reviews", { status: 500 });
    }
}