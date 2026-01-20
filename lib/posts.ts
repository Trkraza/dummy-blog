// blog-app/lib/posts.ts
import { redis } from "./redis";

export async function getPost(slug: string) {
  return await redis.get<string>(`post:${slug}`);
}
