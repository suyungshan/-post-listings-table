import React, { useState, useEffect } from "react";
import PostTable from "../components/PostTable";
import { fetchPosts } from "../api/postApi";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadPosts = async () => {
    try {
      setLoading(true); // 開始載入
      setError(null); // 清空錯誤訊息
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError("無法載入文章，請稍後再試！");
    } finally {
      setLoading(false); // 載入結束
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[20px] p-4 w-full max-w-[1600px]">
      <Button
        variant="contained"
        onClick={loadPosts}
        disabled={loading} // 禁用按鈕防止重複點擊
      >
        {loading ? "Loading..." : "Refresh"}
      </Button>

      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}

      {loading ? (
        <CircularProgress />
      ) : (
        <PostTable
          posts={posts}
          onPostClick={(id) => navigate(`/post/${id}`)}
        />
      )}
    </div>
  );
}
