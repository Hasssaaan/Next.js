import React from "react";
import Link from "next/link";
import { blogs } from "@/constants";
function Blog() {
  return (
    // A div container with flexbox for layout and spacing
    <div className="flex gap-5 p-5"> 
   {
  blogs.map((item, index) => (
    <Link key={item.id} href={`/blog/${item.id}`}>
      {item.title}
    </Link>
  ))
}
      {/* Each Link component is used to navigate to a specific blog page 
      <Link href={"/blog/blog1"}>Blog1</Link>
      <Link href={"/blog/blog2"}>Blog2</Link> 
      <Link href={"/blog/blog3"}>Blog3</Link>
      <Link href={"/blog/blog4"}>Blog4</Link>
      <Link href={"/blog/blog5"}>Blog5</Link>
      <Link href={"/blog/blog6"}>Blog6</Link>
      <Link href={"/blog/blog7"}>Blog7</Link>
      <Link href={"/blog/blog8"}>Blog8</Link>
      <Link href={"/blog/blog9"}>Blog9</Link>
      <Link href={"/blog/blog10"}>Blog10</Link>
      <Link href={"/blog/blog11"}>Blog11</Link>
      <Link href={"/blog/blog12"}>Blog12</Link>
      <Link href={"/blog/blog13"}>Blog13</Link>
*/}
    </div>
);

}

export default Blog;
