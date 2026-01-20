// blog-app/app/blog/[slug]/page.tsx
import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await getPost(params.slug);

  if (!content) return notFound();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        {params.slug}
      </h1>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          lineHeight: 1.6,
        }}
      >
        {content}
      </pre>
    </main>
  );
}
