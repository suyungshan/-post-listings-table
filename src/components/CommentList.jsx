import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";

export default function CommentList({ comments, onDelete }) {
  return (
    <List>
      {comments.map((comment) => (
        <ListItem key={comment.id}>
          <ListItemText primary={comment.name} secondary={comment.body} />
          <Button color="error" onClick={() => onDelete(comment.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
