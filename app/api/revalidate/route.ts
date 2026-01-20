import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { slug, secret } = await req.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ ok: true });
}
