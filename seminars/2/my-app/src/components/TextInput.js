import React, { useState } from "react";

export default function TextInput() {
  /*
  Создать компонент, который содержит текстовое поле ввода
  и отображает введенный текст под ним в реальном времени
  */

  const [text, setText] = useState("");

  const UpdateText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={UpdateText} />
      <p>{text}</p>
    </div>
  );
}
