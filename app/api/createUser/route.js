//app/api/createUser/route.js
import connectMongoDB from "@/libs/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDB();
  await User.create({ email, password });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}
