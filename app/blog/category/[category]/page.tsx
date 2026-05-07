import React from "react";
import { Outfit } from "next/font/google";
import PostGrid from "@/components/blog/PostGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { getPostsByCategory } from "@/lib/utils/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700", "900"] });

interface CategoryProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryProps) {
  const { category: categoryParam } = await params;
  const category =
    categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  return {
    title: `${category} Insights | Passport Legend`,
    description: `Explore all articles in the ${category} category at Passport Legend.`,
  };
}

export default async function CategoryArchive({ params }: CategoryProps) {
  const { category: categoryParam } = await params;
  const category =
    categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  const posts = getPostsByCategory(category, [
    "title",
    "date",
    "excerpt",
    "category",
    "slug",
    "coverImage",
    "author",
  ]);

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-2">
              Insight Category
            </p>
            <h1
              className={`${outfit.className} text-5xl font-black text-primary-900 tracking-tight`}
            >
              Browsing: <span className="text-accent-500">{category}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <PostGrid posts={posts} />
            </div>
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
