import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: body.shorturl });

    if (doc) {
      return NextResponse.json({
        success: false,
        message: "Short URL already exists, please use a new one",
        error: true,
      });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "URL generated successfully",
      error: false,
    });
  } catch (err) {
    console.log("API ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
