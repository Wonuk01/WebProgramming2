import { useState } from "react";
import Comment from "./Comment";

const CommentList = () => {
  const [comments, setComments] = useState([
    { name: "한세윤", text: "원욱아 안녕! ", time: "2025-03-31 14:00" },
    { name: "안황수", text: "언제 한번 밥무야지", time: "2025-03-31 14:05" },
    { name: "이주현", text: "공부해라 원욱아", time: "2025-03-31 14:10" },
    { name: "익명1", text: "나 누구게", time: "2025-03-31 14:15" },
    { name: "강영욱", text: "이거 뭔 사이튼데", time: "2025-03-31 14:20" }
  ]);

  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newName.trim() === "" || newComment.trim() === "") return;

    const newCommentObj = {
      name: newName,
      text: newComment,
      time: new Date().toLocaleString()
    };

    setComments([...comments, newCommentObj]);
    setNewName("");
    setNewComment("");
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h2>방명록</h2>
      
      <input
        type="text"
        placeholder="이름 입력"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="댓글 입력"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>댓글 추가</button>

      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} text={comment.text} time={comment.time} />
      ))}
    </div>
  );
};

export default CommentList;
