import React from "react";
import { Outfit } from "next/font/google";
import PostGrid from "@/components/blog/PostGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { getAllPosts } from "@/lib/utils/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Insights & Guides | Passport Legend",
  description:
    "Expert perspectives on global citizenship, residency by investment, and the lifestyle of the modern global citizen.",
};

export default function BlogHub() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "category",
    "slug",
    "coverImage",
    "author",
  ]);
  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Immersive Navy Hero Section */}
        <section className="bg-primary-900 pt-40 pb-32 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-800/50 to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
                The Legend Journal
              </p>
              <h1
                className={`${outfit.className} text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight animate-fade-in-up`}
              >
                Curated Insights for the <span className="text-accent-500">Global Elite</span>
              </h1>
              <p className="text-xl text-primary-100/80 mb-0 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
                Expert perspectives on global mobility, strategic residency, and 
                the future of citizenship by investment.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-20">
              {/* Featured Post - Large Editorial Style */}
              {featuredPost && (
                <div className="group bg-white rounded-[2rem] shadow-premium overflow-hidden border border-primary-50 transition-all duration-500 hover:shadow-premium-hover">
                  <div className="flex flex-col">
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="bg-accent-500 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full mb-4 inline-block tracking-widest">
                          Featured Insight
                        </span>
                        <h2
                          className={`${outfit.className} text-3xl md:text-5xl font-bold text-white mb-4 leading-tight`}
                        >
                          <a href={`/blog/${featuredPost.slug}`} className="hover:text-accent-400 transition-colors">
                            {featuredPost.title}
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="p-10 bg-white">
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white font-bold text-sm">
                            {featuredPost.author?.charAt(0)}
                          </div>
                          <span className="text-sm font-bold text-primary-900">{featuredPost.author}</span>
                        </div>
                        <a
                          href={`/blog/${featuredPost.slug}`}
                          className="group/btn inline-flex items-center gap-2 text-primary-500 font-bold hover:text-accent-600 transition-colors"
                        >
                          Continue Reading
                          <div className="w-8 h-8 rounded-full border border-primary-100 flex items-center justify-center group-hover/btn:bg-primary-900 group-hover/btn:border-primary-900 transition-all">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:text-white transition-colors"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-12">
                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                  <h2
                    className={`${outfit.className} text-3xl font-black text-primary-900`}
                  >
                    Latest <span className="text-accent-500 underline decoration-primary-900/10 underline-offset-8">Journal Entries</span>
                  </h2>
                  <div className="hidden md:flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary-900" />
                    <div className="w-3 h-3 rounded-full bg-accent-500" />
                    <div className="w-3 h-3 rounded-full bg-primary-100" />
                  </div>
                </div>
                <PostGrid posts={remainingPosts} />
              </div>
            </div>

            {/* Sidebar */}
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
