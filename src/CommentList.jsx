import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김멋사",
    comment: "안녕하세요, 김멋사입니다!!!",
  },
  {
    name: "김솜솜",
    comment: "리액트 재미있어요~!",
  },
  {
    name: "이두희",
    comment: "저도 리액트 배워보고 싶습니다...",
  },
  {
    name: "박소정",
    comment: "저도 리액트 배워보고 싶은데요",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
