import { todoListManager } from './ToDoListManager';

export const fakeApiManager = {
  add: (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.add(item);
        resolve();
      }, 500);
    }),
  remove: (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.remove(item);
        resolve();
      }, 500);
    }),
  edit: (item, updatedItem) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.edit(item, updatedItem);
        resolve();
      });
    }),
  markComplete: (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        todoListManager.markCompleted(item);
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
