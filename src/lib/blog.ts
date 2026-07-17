import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  /** Shorter title used for the <title> tag; falls back to `title`. */
  metaTitle?: string;
  venue_name: string;
  city: string;
  category: string;
  metaDescription: string;
  publishDate: string;
  heroImage: string;
  heroImageAlt: string;
};

export type PostSummary = PostFrontmatter & { slug: string };

function listSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostSummary[] {
  return listSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return { ...(data as PostFrontmatter), slug };
    })
    .sort(
      (a, b) => +new Date(b.publishDate) - +new Date(a.publishDate)
    );
}

export function getPostsByCity(city: string): PostSummary[] {
  return getAllPosts().filter((p) => p.city === city);
}

/** One representative (newest) post per city — used for cross-market showcases like the homepage gallery. */
export function getFeaturedPostsAcrossCities(): PostSummary[] {
  const posts = getAllPosts();
  const seen = new Set<string>();
  const featured: PostSummary[] = [];
  for (const post of posts) {
    if (!seen.has(post.city)) {
      seen.add(post.city);
      featured.push(post);
    }
  }
  return featured;
}

export function getPostBySlug(slug: string): {
  frontmatter: PostFrontmatter;
  content: string;
} | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, content };
}
