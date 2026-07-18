import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { StructuredData } from "@/components/StructuredData";
import { blogPostingSchema } from "@/lib/schema";
import { CTA } from "@/components/CTA";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { frontmatter } = post;
  return {
    title: frontmatter.metaTitle ?? frontmatter.title,
    description: frontmatter.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      images: [{ url: frontmatter.heroImage }],
    },
  };
}

const mdxComponents = {
  a: (props: React.ComponentProps<"a">) => {
    const isInternal = props.href?.startsWith("/");
    return (
      <Link
        href={props.href ?? "#"}
        className="text-accent-dark underline underline-offset-4 hover:text-ink"
        {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {props.children}
      </Link>
    );
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const relatedPosts = getRelatedPosts(slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={blogPostingSchema({
          title: frontmatter.title,
          description: frontmatter.metaDescription,
          slug,
          publishDate: frontmatter.publishDate,
          heroImage: frontmatter.heroImage,
        })}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        {frontmatter.category} &middot; {frontmatter.city}
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {frontmatter.title}
      </h1>
      <p className="mt-3 text-sm text-ink-soft">
        {new Date(frontmatter.publishDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-sm">
        <Image
          src={frontmatter.heroImage}
          alt={frontmatter.heroImageAlt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft prose-a:text-accent-dark">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6">
        <LeadMagnetForm />
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-12 border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-ink">
            More {frontmatter.city} Venue Guides
          </h2>
          <ul className="mt-4 space-y-3">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="font-medium text-accent-dark underline underline-offset-4"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <Link href="/blog" className="text-sm font-medium text-accent-dark underline underline-offset-4">
          &larr; Back to venue guides
        </Link>
        <CTA />
      </div>
    </article>
  );
}
