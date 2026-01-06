import { Section } from "@/components/UI/Section";
import { TEST_BLOGS } from "../data";
import { Heading } from "@/components/UI/Heading";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  const featuredBlogs = TEST_BLOGS.slice(0, 3);
  return (
    <div>
      <Section id="Blogs" background="muted">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end ">
          <div className="text-center md:text-left">
            <Heading level={3}>Latest Insights</Heading>
            <p className="mt-2 text-muted">
              Stay updated with the latest trends in Technology with Pravidhi.
            </p>
          </div>

          {/* DESKTOP LINK */}

          <Link to="/blogs" className="hidden md:block">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>

        {/* RESPONSIVE GRID */}

        <div className="grid grid-cols-1 mt-12 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        {/* MOBILE ONLY LINK */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/blogs" className="w-full">
            <Button variant="outline" className="w-full">
              View All Posts
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};
