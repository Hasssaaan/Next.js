import React from 'react'
import { blogs } from '@/constants';

const findBlogDetails = (id: number) => {
  return blogs.find((item) => item.id === id);
};

function Blogdetails({ params }: { params: { id: string } }) {
  console.log("Params", params.id);
  
  // Convert params.id to a number before passing it to findBlogDetails
  const blog = findBlogDetails(Number(params.id));
  
  return <div>Blogdetails

    <div>
      <h1>{blog?.title}</h1>
      <h1>{blog?.Content}</h1>
      <h1>{blog?.author}</h1>
    </div>
  </div>;
}

export default Blogdetails;
