export interface Frontmatter {
  title: string;
  slug: string;
  author: string;
  mainImage: string;
  alt: string;
  categories: string[];
  publishedAt: string;
  language: string;
  excerpt?: string;
}

export interface PostEntry {
  slug: string;
  frontmatter: Frontmatter;
}
