import React, { useState } from "react";

export default function CommentsList() {
  /*
  Задание: Список комментариев с удалением.

  Цель: Комбинирование useState, рендеринга списков и обработки событий
  для создания интерактивного интерфейса.

  Задача:
  Создать компонент CommentsList, который отображает список комментариев.
  Каждый комментарий должен иметь кнопку для его удаления.
  При нажатии на кнопку комментарий должен удаляться из списка.
  */

  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return comments.map((comment) => (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 key={comment.id} style={{ marginRight: "10px" }}>
          {comment.text}
        </h1>
        <button onClick={() => deleteComment(comment.id)}>x</button>
      </div>
      <hr />
    </>
  ));
}
