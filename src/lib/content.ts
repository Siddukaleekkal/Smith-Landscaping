import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface MarketData {
  id: string;
  title: string;
  description: string;
  heroImage?: string;
  contentHtml?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  heroImage?: string;
  icon?: string;
  contentHtml?: string;
}

export async function getMarketBySlug(slug: string): Promise<MarketData | null> {
  try {
    const fullPath = path.join(contentDirectory, 'markets', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id: slug,
      contentHtml,
      title: matterResult.data.title,
      description: matterResult.data.description,
      heroImage: matterResult.data.heroImage,
    };
  } catch (e) {
    return null;
  }
}

export async function getAllMarkets(): Promise<MarketData[]> {
  const marketsDir = path.join(contentDirectory, 'markets');
  if (!fs.existsSync(marketsDir)) return [];
  const fileNames = fs.readdirSync(marketsDir);
  const allMarkets = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(marketsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      heroImage: matterResult.data.heroImage,
    };
  });
  return allMarkets;
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  try {
    const fullPath = path.join(contentDirectory, 'services', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id: slug,
      contentHtml,
      title: matterResult.data.title,
      description: matterResult.data.description,
      heroImage: matterResult.data.heroImage,
      icon: matterResult.data.icon,
    };
  } catch (e) {
    return null;
  }
}

export async function getAllServices(): Promise<ServiceData[]> {
  const servicesDir = path.join(contentDirectory, 'services');
  if (!fs.existsSync(servicesDir)) return [];
  const fileNames = fs.readdirSync(servicesDir);
  const allServices = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(servicesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      heroImage: matterResult.data.heroImage,
      icon: matterResult.data.icon,
    };
  });
  return allServices;
}

export interface BlogPostData {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail?: string;
  contentHtml?: string;
  readingTime?: number;
  bullets?: string[];
}

export async function getPostBySlug(slug: string): Promise<BlogPostData | null> {
  try {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    let contentHtml = processedContent.toString();
    contentHtml = contentHtml.replace(/<h3>(.*?)<\/h3>/g, (match, p1) => {
      const id = p1.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `<h3 id="${id}" class="scroll-mt-32">${p1}</h3>`;
    });
    
    const wordCount = matterResult.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      id: slug,
      contentHtml,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      excerpt: matterResult.data.excerpt,
      thumbnail: matterResult.data.thumbnail,
      readingTime,
      bullets: matterResult.data.bullets || [],
    };
  } catch (e) {
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPostData[]> {
  const blogDir = path.join(contentDirectory, 'blog');
  if (!fs.existsSync(blogDir)) return [];
  const fileNames = fs.readdirSync(blogDir);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      
      const wordCount = matterResult.content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Assume 200 words per minute

      return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        category: matterResult.data.category,
        excerpt: matterResult.data.excerpt,
        thumbnail: matterResult.data.thumbnail,
        readingTime,
        bullets: matterResult.data.bullets || [],
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  return allPosts;
}
