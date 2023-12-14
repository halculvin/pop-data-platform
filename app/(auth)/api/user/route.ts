import { db } from "../../../../lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from "zod"

// Define a schema for input validation
const userSchema = z.object({
    name: z.string().min(2).max(50),
    coname: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    phone: z.string().min(10).max(11),
    password: z.string().min(1,'Password is required').min(8,'Password must have at least 8 characters').max(50),
    
  })


export async function POST(req: Request) {
    try{
        const body = await req.json();
        const {name, email, coname, phone, password} = userSchema.parse(body);

        //check if email already exist
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
        if(existingUserByEmail) {
            return NextResponse.json({user: null, message: "User with this email already exist! Please sign in."})
        }        

        const hashedPass = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                name,
                email,
                coname,
                phone,
                password: hashedPass
            }
        })

        const { password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: rest, message: "New user created successfully"}, {status: 201});
        
    }   catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
          } else {
            // Handle the error differently
            console.error(error);
            return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
          }

    }
    
}
