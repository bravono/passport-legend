import React from "react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Calendar, ChevronLeft, Tag as TagIcon } from "lucide-react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { getPostBySlug } from "@/lib/utils/blog";
import {
  generateArticleSchema,
  generateHowToSchema,
} from "@/lib/utils/seo-utils";
import CategoryBadge from "@/components/blog/CategoryBadge";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PostShareActions from "@/components/blog/PostShareActions";
import PostImage from "@/components/blog/PostImage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700", "900"] });

interface PostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ["title", "excerpt", "coverImage"]);
  if (!post.title) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Passport Legend`,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.coverImage || "/assets/DOF0160.png" }],
    },
  };
}

export default async function PostDetail({ params }: PostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "excerpt",
    "category",
    "slug",
    "coverImage",
    "author",
    "content",
    "tags",
  ]);

  if (!post.title) {
    notFound();
  }

  const schema =
    post.category === "How To"
      ? generateHowToSchema(post)
      : generateArticleSchema(post);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Article/HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://passportlegend.com/blog/${post.slug}`}
        />

        {/* Immersive Post Header */}
        <header className="bg-primary-900 pt-40 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-500/5 blur-3xl rounded-full" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-300 hover:text-accent-500 font-bold mb-12 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" />
              Back to Journal
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <CategoryBadge 
                  category={post.category || "General"} 
                  className="!bg-accent-500 !text-white border-none shadow-lg"
                />
                <div className="h-px w-12 bg-primary-700" />
                <div className="flex items-center gap-2 text-primary-300 text-xs uppercase tracking-widest font-black">
                  <Calendar className="w-4 h-4 text-accent-500" />
                  {post.date ? format(new Date(post.date), "MMMM dd, yyyy") : "Recently Published"}
                </div>
              </div>

              <h1
                className={`${outfit.className} text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tight`}
              >
                {post.title}
              </h1>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-primary-800 border border-primary-700 flex items-center justify-center text-accent-500 font-bold text-xl uppercase shadow-inner">
                    {post.author?.charAt(0) || "P"}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none mb-1 group-hover:text-accent-500 transition-colors">
                      {post.author || "Passport Legend Team"}
                    </p>
                  </div>
                </div>
                <div className="h-10 w-px bg-primary-800 mx-4" />
                <PostShareActions
                  title={post.title || ""}
                  excerpt={post.excerpt || ""}
                />
              </div>
            </div>
          </div>
        </header>

        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden mb-16 shadow-premium border-8 border-white">
                <PostImage
                  src={post.coverImage}
                  alt={post.title || "Featured Image"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Rendering */}
              <div className="prose prose-lg prose-slate max-w-none mb-16 px-2">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: ({ node, ...props }) => (
                      <div className="my-16">
                        <PostImage
                          src={props.src as string}
                          alt={props.alt || "Article Image"}
                          className="rounded-[2rem] shadow-premium w-full object-cover border border-primary-50"
                        />
                        {props.alt && (
                          <p className="text-center text-sm text-gray-400 mt-4 italic">{props.alt}</p>
                        )}
                      </div>
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        {...props}
                        className={`${outfit.className} text-3xl md:text-4xl font-bold text-primary-900 mt-20 mb-8 flex items-center gap-4`}
                      >
                        <span className="w-2 h-8 bg-accent-500 rounded-full" />
                        {props.children}
                      </h2>
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        {...props}
                        className="text-gray-700 leading-relaxed text-xl mb-8"
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul {...props} className="space-y-4 mb-12 list-none p-0" />
                    ),
                    li: ({ node, ...props }) => (
                      <li {...props} className="flex gap-4 text-gray-700 text-lg">
                        <div className="mt-2 w-2 h-2 rounded-full bg-primary-900 shrink-0" />
                        {props.children}
                      </li>
                    ),
                  }}
                >
                  {post.content || ""}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-12 border-t border-primary-50">
                  <TagIcon className="w-5 h-5 text-primary-300 self-center mr-2" />
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-6 py-2.5 bg-primary-50 hover:bg-primary-900 text-primary-900 hover:text-white rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
