import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetails, fetchComments, deleteComment } from "../api/postApi";
import CommentList from "../components/CommentList";

export default function PostDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadPostDetails = async () => {
      const postData = await fetchPostDetails(id);
      setPost(postData);
      const commentsData = await fetchComments(id);
      setComments(commentsData);
    };
    loadPostDetails();
  }, [id]);

  const handleDelete = async (commentId) => {
    const success = await deleteComment(commentId);
    if (success) {
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    }
  };

  if (!post) return <div className="text-gray-500">Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-600">User: {post.userId}</p>
      <p className="text-base">{post.body}</p>

      <h3 className="text-xl font-semibold mt-4">Comments</h3>
      <CommentList comments={comments} onDelete={handleDelete} />
    </div>
  );
}
