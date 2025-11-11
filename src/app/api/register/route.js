import { connectDb } from "../../../../lib/mongoDb"
import User from "../../../../models/users"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"


export const POST = async (req) => {
   const { username, email, password } = await req.json();
    try {


        const hashedPassword = await bcrypt.hash(password,10)

        await connectDb()

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }





    
    const newUser = await User.create({
      username,
    
      email,
      
      password: hashedPassword,
    
    });

    return NextResponse.json({ message: "User registered", user: newUser }, { status: 201 });
    } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}


export const GET = async (req) => {
      const url = new URL(req.url)
    const username =  url.searchParams.get("name")
    
  try {
    await connectDb()
    const users = await User.find(username?{username}:{}).sort({createdAt:-1})
    return NextResponse.json(users)
  } catch (error) {
    console.log(error)
  }
}




export const PATCH = async (req) => {

  const { userId, newTiktoklink, newIglink,newUsername } = await req.json();

  try {
 
    await connectDb();

 
    if (!userId || !newTiktoklink || !newIglink) {
      return NextResponse.json({ error: "User ID, new Tiktok, and new IG fields are required for the update." }, { status: 400 });
    }



    
    const update = {
      tiktok: newTiktoklink, 
      ig: newIglink,
      username: newUsername
    };

    const options = {
      new: true,
      runValidators: true, 
      upsert: false, 
    };

 
    const updatedUser = await User.findByIdAndUpdate(userId, update, options);

   
    if (!updatedUser) {
      return NextResponse.json({ error: `User with ID: ${userId} not found.` }, { status: 404 });
    }

    return NextResponse.json({ 
      message: "User updated successfully!",
      user: updatedUser 
    }, { status: 200 });

  } catch (error) {
   
    console.error("Update error:", error.message);
    return NextResponse.json({ 
      error: "Internal Server Error",
      details: error.message 
    }, { status: 500 });
  }
};