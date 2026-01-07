import { Section } from "@/components/UI/Section";
import { Heading } from "@/components/UI/Heading";
import { BlogCard } from "@/components/features/blog/component/BlogCard";
import { TEST_BLOGS } from "@/components/features/blog/data";

export const Blogs = () => {
  return (
    <div className="">
      {/* Page Header */}
      <Section
        background="muted"
        padding="hero"
        className="border-b border-slate-200 "
      >
        <div className="max-w-2xl">
          <Heading level={1} className="text-4xl md:text-5xl">
            Our Blog
          </Heading>
          <p className="mt-4 text-lg text-muted">
            Expert insights, tutorials, and news from the Pravidhi engineering
            team.
          </p>
        </div>
      </Section>

      {/* Blog Grid */}
      <Section padding="hero">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEST_BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/*  Pagination Placeholder */}
        {TEST_BLOGS.length > 6 && (
          <div className="mt-16 flex justify-center">
            <p className="text-sm text-muted italic">Showing all posts</p>
          </div>
        )}
      </Section>
    </div>
  );
};
