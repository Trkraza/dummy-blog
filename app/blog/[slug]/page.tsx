import { redis } from "@/lib/redis";

export const revalidate = 60;

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await redis.get<string>(`post:${params.slug}`);

  if (!post) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Post not found</h2>
        <p>Waiting for content...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <pre>{post}</pre>
    </div>
  );
}
