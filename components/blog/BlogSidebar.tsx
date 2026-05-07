import Link from "next/link";
import { Search, Tag, List } from "lucide-react";
import { Outfit } from "next/font/google";
import { getAllPosts } from "@/lib/utils/blog";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700", "900"] });

const availableCategories = [
  { name: "Citizenship", color: "text-primary-600" },
  { name: "Residency", color: "text-accent-600" },
  { name: "Investment", color: "text-emerald-600" },
  { name: "Lifestyle", color: "text-amber-600" },
  { name: "Travel", color: "text-sky-600" },
  { name: "News", color: "text-slate-600" },
];

const tags = [
  "CBI",
  "Golden Visa",
  "Caribbean",
  "EU",
  "Asset Protection",
  "Second Passport",
  "Luxury Travel",
  "St Kitts",
  "Greece",
];

export default function BlogSidebar() {
  const allPosts = getAllPosts(["category"]);

  const categories = availableCategories
    .map((cat) => ({
      ...cat,
      count: allPosts.filter((post) => post.category === cat.name).length,
    }))
    .filter(
      (cat) =>
        cat.count > 0 || ["Citizenship", "Residency", "Investment"].includes(cat.name),
    ); // Keep main categories even if empty
  return (
    <aside className="space-y-12">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search Insights..."
          className="w-full pl-12 pr-4 py-4 bg-primary-50/50 border border-primary-100 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:bg-white outline-none transition-all duration-300 shadow-sm group-hover:shadow-md"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400 group-hover:text-primary-900 transition-colors" />
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-premium border border-primary-50">
        <h3
          className={`${outfit.className} text-xl font-bold text-primary-900 mb-6 flex items-center gap-2`}
        >
          <List className="w-5 h-5 text-accent-500" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/blog/category/${cat.name.toLowerCase()}`}
              className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-primary-100 hover:bg-primary-50/50 transition-all duration-300"
            >
              <span
                className={`font-bold group-hover:text-primary-900 transition-colors ${cat.color}`}
              >
                {cat.name}
              </span>
              <span className="bg-primary-900 text-white text-[10px] py-1 px-2.5 rounded-lg font-black">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-premium border border-primary-50">
        <h3
          className={`${outfit.className} text-xl font-bold text-primary-900 mb-6 flex items-center gap-2`}
        >
          <Tag className="w-5 h-5 text-accent-500" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-4 py-2 bg-gray-50 hover:bg-primary-500 hover:text-white text-gray-600 text-sm font-semibold rounded-2xl transition-all duration-300"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>


    </aside>
  );
}
