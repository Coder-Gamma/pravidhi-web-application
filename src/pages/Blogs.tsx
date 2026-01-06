import { Section } from "@/components/UI/Section";
import { Heading } from "@/components/UI/Heading";
import { BlogCard } from "@/components/features/blog/component/BlogCard";
import { TEST_BLOGS } from "@/components/features/blog/data";

export const Blogs = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Page Header */}
      <Section className="bg-slate-50 border-b border-slate-200 py-12! md:py-16!">
        <div className="max-w-2xl">
          <Heading level={1} className="text-4xl md:text-5xl">
            Our Blog
          </Heading>
          <p className="mt-4 text-lg text-brand-muted">
            Expert insights, tutorials, and news from the Pravidhi engineering
            team.
          </p>
        </div>
      </Section>

      {/* Blog Grid */}
      <Section>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEST_BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Optional: Pagination Placeholder */}
        {TEST_BLOGS.length > 6 && (
          <div className="mt-16 flex justify-center">
            <p className="text-sm text-brand-muted italic">Showing all posts</p>
          </div>
        )}
      </Section>
    </div>
  );
};
