import React from "react";

export default function PostTable({ posts, onPostClick }) {
  return (
    <div className="flex flex-col w-full max-w-[1600px]">
      <div className="min-w-full border border-gray-300">
        {/* 表頭 */}
        <div className="flex bg-gray-100">
          <div className="flex items-center justify-center flex-1 p-2 border-r">
            Index
          </div>
          <div className="flex items-center justify-center flex-1 p-2 border-r">
            Title
          </div>
          <div className="flex items-center justify-center flex-1 p-2">
            User
          </div>
        </div>
        {/* 表格內容 */}
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="flex border-t  hover:bg-gray-50 cursor-pointer "
            onClick={() => onPostClick(post.id)}
          >
            <div className="flex items-center justify-center flex-1 p-2 border-r">
              {index + 1}
            </div>
            <div className="flex-1 p-2 border-r">{post.title}</div>
            <div className="flex justify-center items-center flex-1 p-2">
              {post.userId}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
