import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How SMS Marketing Can Boost Your Business Growth",
    excerpt:
      "Learn the strategies and best practices for running successful SMS marketing campaigns that drive engagement and sales.",
    author: "Sarah Johnson",
    date: "Dec 5, 2024",
    category: "Marketing",
  },
  {
    id: 2,
    title: "5 Reasons to Use Virtual Phone Numbers",
    excerpt:
      "Discover how DID numbers can help your business establish a global presence and improve customer communication.",
    author: "Michael Chen",
    date: "Dec 1, 2024",
    category: "Technology",
  },
  {
    id: 3,
    title: "Cloud PBX vs Traditional Phone Systems",
    excerpt:
      "Compare the benefits and features of cloud-based phone systems versus traditional on-premise solutions.",
    author: "Emily Rodriguez",
    date: "Nov 28, 2024",
    category: "Business",
  },
  {
    id: 4,
    title: "Securing Your Business Communications in 2024",
    excerpt:
      "Essential security practices for protecting your SMS, voice, and data communications from threats.",
    author: "David Kumar",
    date: "Nov 25, 2024",
    category: "Security",
  },
  {
    id: 5,
    title: "API Integration Best Practices",
    excerpt:
      "A comprehensive guide to integrating telecom APIs into your applications for maximum efficiency.",
    author: "Lisa Wang",
    date: "Nov 20, 2024",
    category: "Development",
  },
  {
    id: 6,
    title: "The Future of Business Communication",
    excerpt:
      "Explore upcoming trends and technologies that will shape how businesses communicate in the coming years.",
    author: "James Miller",
    date: "Nov 15, 2024",
    category: "Trends",
  },
];

const Blog = () => {
  return (
    <div className="pt-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--navbar-bg)]"></div>

        {/* Background Blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent-copper)] rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent-copper)] rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center text-[var(--text-off-white)] px-4 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80">
            Insights, tips, and news from the telecom industry
          </p>
        </div>
      </section>

      {/* BLOG LIST SECTION */}
      <section className="py-20 bg-[var(--body-bg)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border border-black/5"
              >
                <div
                  className="h-48 bg-[var(--navbar-bg)] flex items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[var(--accent-copper)] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="text-[var(--accent-copper)] text-6xl font-bold opacity-20">
                    {post.id}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-[var(--accent-copper)] font-semibold mb-2">
                    {post.category}
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-[var(--heading-dark)] hover:text-[var(--accent-copper)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--body-grey)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author + Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-[var(--body-grey)]/70">
                      <User size={16} className="mr-2 text-[var(--accent-copper)]" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-[var(--body-grey)]/70">
                      <Calendar size={16} className="mr-2 text-[var(--accent-copper)]" />
                      {post.date}
                    </div>
                  </div>

                  <a
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center text-[var(--accent-copper)] font-semibold hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={18} className="ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="bg-[var(--accent-copper)] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 bg-[var(--navbar-bg)] text-[var(--text-off-white)]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8 opacity-70">
            Get the latest updates and insights delivered to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-[var(--accent-copper)]"
            />
            <button className="bg-[var(--accent-copper)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--accent-copper)]/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
