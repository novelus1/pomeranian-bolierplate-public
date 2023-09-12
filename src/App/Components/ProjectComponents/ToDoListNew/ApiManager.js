import { todoListManager } from './ToDoListManager';

export const fakeApiManager = {
  add: (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.addTodo(item);
        resolve();
      }, 500);
    }),
  remove: (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.removeTodo(item);
        resolve();
      }, 500);
    }),
  edit: (item, updatedItem) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.editTodo(item, updatedItem);
        resolve();
      });
    }),
  markComplete: (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.markCompletedTodo(item);
        resolve();
      });
    }),
  list: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = todoListManager.list();
        resolve(list);
      }, 500);
    }),
};
