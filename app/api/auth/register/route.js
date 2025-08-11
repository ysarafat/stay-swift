import { userModel } from "@/model/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fname, lname, email, password } = await request.json();
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashPassword,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
