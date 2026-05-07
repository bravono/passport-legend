import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, User, ArrowRight } from "lucide-react";
import CategoryBadge from "./CategoryBadge";
import { BlogPost } from "@/lib/utils/blog";
import PostImage from "./PostImage";

interface PostCardProps {
  post: Partial<BlogPost>;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, date, excerpt, category, slug, coverImage, author } = post;

  return (
    <div className="group bg-white rounded-[2rem] shadow-premium overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-hover border border-primary-50 flex flex-col h-full">
      <div className="relative overflow-hidden h-64">
        <PostImage
          src={coverImage}
          alt={title || "Blog Post"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/20 transition-colors duration-300" />
        <div className="absolute top-6 left-6 z-10">
          <CategoryBadge category={category || "General"} className="!bg-primary-900 !text-white border-none shadow-lg" />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative">
        {/* Navy accent line */}
        <div className="absolute top-0 left-8 right-8 h-1 bg-primary-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-primary-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-accent-500" />
            {date ? format(new Date(date), "MMM dd, yyyy") : "No Date"}
          </div>
          <div className="w-1 h-1 rounded-full bg-primary-200" />
          <div className="flex items-center gap-1.5">
            <User className="w-3 h-3 text-accent-500" />
            {author || "Passport Legend Team"}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary-900 mb-4 line-clamp-2 group-hover:text-primary-700 transition-colors duration-300 leading-snug">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">{excerpt}</p>

        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary-900 group/link"
          >
            Explore Article
            <div className="ml-3 w-8 h-8 rounded-full border border-primary-100 flex items-center justify-center group-hover/link:bg-primary-900 group-hover/link:border-primary-900 transition-all">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
