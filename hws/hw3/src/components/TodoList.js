/*
Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами:
добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI.
Внутри каждого элемента списка разместите
текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.
*/

import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  Card,
  CardContent,
  ListItem,
  IconButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const addCurrentTodo = () => {
    if (currentTodo.trim()) {
      setTodoList([...todoList, currentTodo.trim()]);
      setCurrentTodo("");
    }
  };

  const deleteCurrentTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={currentTodo}
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" onClick={addCurrentTodo}>
        Добавить задачу
      </Button>

      <List>
        {todoList.map((task, index) => (
          <Card key={index} variant="outlined" sx={{ margin: "10px 0" }}>
            <CardContent>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteCurrentTodo(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={task} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
