import { redis } from "./redis";

export async function getPost(slug: string) {
  return redis.get<string>(`post:${slug}`);
}
