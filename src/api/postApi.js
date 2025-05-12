const API_URL = import.meta.env.VITE_API_URL;

// 取得所有文章
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");

    // 存入變數，避免多次調用 response.json()
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// 取得單一文章詳細資訊
export const fetchPostDetails = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch post details");

    // 存入變數
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post details:", error);
    return null;
  }
};

// 取得特定文章的留言
export const fetchComments = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`);
    if (!response.ok) throw new Error("Failed to fetch comments");

    // 存入變數
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

// 刪除留言
export const deleteComment = async (commentId) => {
  try {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete comment");

    // 確認刪除成功
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting comment:", error);
    return false;
  }
};
