import { Fragment } from "react";
import { TBlog } from "@/types";
import BlogCard from "./BlogCard";

export default function Blogs({ blogs }: { blogs: TBlog[] }) {
  return (
    <Fragment>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
