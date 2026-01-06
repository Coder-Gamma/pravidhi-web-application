import { Heading } from "@/components/UI/Heading";
import { Blog } from "../types";
import { User, Calendar } from "lucide-react";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg ">
      {/* IMAGE CONTAINER */}
      <div className="overflow-hidden aspect-video">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT DIV  */}
      <div className="flex flex-1 flex-col p-6">
        <Heading level={3} className="text-xl line-clamp-2 group-hover:text-accent">
          {blog.title}
        </Heading>
        <p className="text-sm text-muted mt-3 line-clamp-3 leading-relaxed ">{blog.description}</p>

        {/* LASTKO DIV */}
        <div className="flex mt-auto pt-6 items-center  justify-between border-t border-slate-100 text-sm  text-muted">
          <div className="flex items-center gap-2">
            <div className=" flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-accent">
              <User size={14} />
            </div>
            <span>{blog.author}</span>
          </div>

          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
