import fs from "fs";
import path from "path";
import matter from "gray-matter";
 
const postsDirectory = path.join(process.cwd(), "content/blog");
 
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  readTime: string;
  content: string;
}
 
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return getPostBySlug(slug);
    })
    .filter(Boolean) as BlogPost[];
 
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
 
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
 
    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "/images/blog/default.jpg",
      tags: data.tags || [],
      readTime: data.readTime || "5 min read",
      content,
    };
  } catch {
    return null;
  }
}
 
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet);
}