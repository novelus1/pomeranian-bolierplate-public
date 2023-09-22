import { LocalStorageManager } from './LocalStorageManager';

class TodoListManager extends LocalStorageManager {
  ITEM_KEY = 'todos';

  constructor() {
    super();
  }

  list() {
    const list = this.get(this.ITEM_KEY);
    return list || [];
  }

  addTodo(item) {
    const list = this.list();
    item.id = Date.now();
    list.push(item);
    this.set(this.ITEM_KEY, list);
  }

  removeTodo(item) {
    const list = this.list();
    const updatedList = list.filter((listItem) => listItem.id !== item.id);
    this.set(this.ITEM_KEY, updatedList);
  }

  editTodo(item, newItem) {
    const list = this.list();
    const updatedList = list.map((listItem) => {
      if (listItem.id === item.id) {
        return { ...listItem, ...newItem };
      } else {
        return listItem;
      }
    });
    this.set(this.ITEM_KEY, updatedList);
  }

  markCompletedTodo(item) {
    const list = this.list();
    const itemIndex = list.findIndex(
      (listItem) => listItem.title === item.title
    );
    if (itemIndex !== -1) {
      list[itemIndex].completed = !list[itemIndex].completed;
      this.set(this.ITEM_KEY, list);
    }
  }
}

export const todoListManager = new TodoListManager();
