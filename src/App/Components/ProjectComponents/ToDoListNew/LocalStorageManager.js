export class LocalStorageManager {
  get(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey));
  }
  add(itemKey, item) {
    localStorage.setItem(itemKey, JSON.stringify([...this.get(itemKey), item]));
  }

  set(itemKey, item) {
    localStorage.setItem(itemKey, JSON.stringify(item));
  }
}
