import { LocalStorageManager } from './LocalStorageManager';

class TodoListManager extends LocalStorageManager {
  ITEM_KEY = 'todos';

  constructor() {
    super();
  }

  list() {
    return this.get(this.ITEM_KEY);
  }

  addTodo(item) {
    this.add(this.ITEM_KEY, item);
  }

  removeTodo(item) {
    const list = this.getTodoList();
    const filteredArray = list.filter(
      (listItem) => listItem.title !== item.title
    );
    this.set(this.ITEM_KEY, filteredArray);
  }

  editTodo(item, newItem) {
    const list = this.getTodoList();
    const itemIndex = list.findIndex(
      (listItem) => listItem.title === item.title
    );
    if (itemIndex !== -1) {
      list[itemIndex] = newItem;
      this.set(item.title, list);
    }
  }

  markCompletedTodo(item) {
    const list = this.getTodoList();
    const itemIndex = list.findIndex(
      (listItem) => listItem.title === item.title
    );
    if (itemIndex !== -1) {
      list[itemIndex].completed = !list[itemIndex].completed;
      this.set(item.title, list);
    }
  }
}

export const todoListManager = new TodoListManager();
