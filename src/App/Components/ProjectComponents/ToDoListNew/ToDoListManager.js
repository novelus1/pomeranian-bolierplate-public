import { LocalStorageManager } from './LocalStorageManager';

class TodoListManager extends LocalStorageManager {
  ITEM_KEY = 'todos';

  list() {
    return this.get(this.ITEM_KEY);
  }

  add(item) {
    this.add(this.ITEM_KEY, item);
  }

  remove(item) {
    const list = this.getTodoList();
    const filteredArray = list.filter(
      (listItem) => listItem.title !== item.title
    );
    this.set(this.ITEM_KEY, filteredArray);
  }

  edit(item, newItem) {
    const list = this.getTodoList();
    const itemIndex = list.findIndex(
      (listItem) => listItem.title === item.title
    );
    if (itemIndex !== -1) {
      list[itemIndex] = newItem;
      this.set(item.title, list);
    }
  }

  markCompleted(item) {
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
