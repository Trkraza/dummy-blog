import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  const value = await redis.get("post:hello-world");
  return NextResponse.json({ value });
}
