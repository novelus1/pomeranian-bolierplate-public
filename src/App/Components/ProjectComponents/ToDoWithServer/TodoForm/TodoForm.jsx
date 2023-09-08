import { useState } from 'react';
import './TodoForm.css';


class LocalStorageManager {
  get(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey))
  }
  add(itemKey, item) {
    localStorage.setItem(itemKey, JSON.stringify([...this.get(itemKey), item]))
  }

  set(itemKey, item) {
    localStorage.setItem(itemKey, item)

  }

}

class TodoListManager extends LocalStorageManager {
  ITEM_KEY = 'todos'

  getTodoList() {
    return this.get(this.ITEM_KEY)
  }

  addTodoItem(item) {
    this.add(this.ITEM_KEY, item)
  }

  removeTodoItem(item) {
    const list = this.getTodoList();
    const filteredArray = list.filter((listItem) => listItem.title !== item.title);
    this.set(this.ITEM_KEY, filteredArray)
  }

  editTodoItem(item, newItem) {
    const list = this.getTodoList();
    const itemIndex = list.findIndex((listItem) => listItem.title === item.title);
    if (itemIndex !== -1) {
      list[itemIndex] = newItem;
      localStorage.setItem(item.title, JSON.stringify)
    }
  }

  toggleCompleteTodoItem(item) {
    const list = this.getTodoList();;
    const itemIndex = list.findIndex((listItem) => listItem.title === item.title);
    if (itemIndex !== -1) {
      list[itemIndex].completed = !list[itemIndex].completed
      localStorage.setItem(item.title, JSON.stringify(list))
    }

  }


}

export const TodoListManagerInstance = new TodoListManager()
if (!localStorage.getItem('todos')) {
  localStorage.setItem('[]')
}

export function TodoForm({
  setFormVisibility,
  handleFetchTodoData,
  data,
  setIdForEdit,
}) {
  const isEditMode = Boolean(data);

  const [title, setTitle] = useState(isEditMode ? data.title : '');
  const [author, setAuthor] = useState(isEditMode ? data.author : '');
  const [note, setNote] = useState(isEditMode ? data.note : '');

  const [prevTitle, setPrevTitle] = useState('');

  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isInProgress, setInProgress] = useState(false);

  async function handleCreateTodo() {
    try {
      setInProgress(true);
      TodoListManagerInstance.addTodoItem({
        title: title,
        author: author,
        description: note,
        date: new Date().getTime(),
        completed: false

      })
      // await axios.post(BASE_API_URL + '/todo', {
      //   title: title,
      //   note, // === note: note
      //   author,
      // });

      setPrevTitle(title);

      setTitle('');
      setAuthor('');
      setNote('');

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
    console.log(TodoListManagerInstance.getTodoList())
    // axios.get().then().catch().finally()
  }

  async function handleEditTodo() {
    try {
      setInProgress(true);
      setInProgress(true);
      TodoListManagerInstance.editTodoItem({
        title,
        author,
        note,

      })

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  function resetSuccessMessage() {
    setSuccess(false);
  }

  const isTitleToLong = title.length > 15;
  const isAuthorToLong = author.length > 15;
  const isNoteToLong = note.length > 50;

  const isFormValid = !isTitleToLong && !isAuthorToLong && !isNoteToLong;

  const isTitleGiven = title.length > 0;
  const isAuthorGiven = author.length > 0;
  const isNoteGiven = note.length > 0;

  const isFormFilled = isTitleGiven && isAuthorGiven && isNoteGiven;

  const isReadyToSend = isFormFilled && isFormValid;

  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label className="todo-form__field__label">Tytuł</label>
        <input
          className={isTitleToLong ? 'input-error' : ''}
          type="text"
          placeholder="Wpisz tytuł (max 15 znaków)"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          onFocus={resetSuccessMessage}
        />
      </div>

      {!isEditMode && (
        <div className="todo-form__field">
          <label className="todo-form__field__label">Autor</label>
          <input
            type="text"
            placeholder="Jan Kowalski"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            onFocus={resetSuccessMessage}
          />
        </div>
      )}

      <div className="todo-form__field">
        <label className="todo-form__field__label">Treść</label>
        <textarea
          placeholder="Kup ser w biedronce"
          rows={5}
          cols={25}
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
          onFocus={resetSuccessMessage}
        />
      </div>

      <b>
        {isInProgress && (
          <p className="todo-form__info-message">Trwa zapisywanie...</p>
        )}

        {isSuccess && (
          <p className="todo-form__success-message">
            {isEditMode ? (
              <>Todo "{title}" zostało zapisane pomyślnie!</>
            ) : (
              <>Todo "{prevTitle}" dodało się!</>
            )}
          </p>
        )}

        {isError && (
          <p className="todo-form__error-message">
            Wystąpił błąd, spróbuj ponownie!
          </p>
        )}
      </b>

      <div className="todo-form__buttons">
        <button
          className="big-button"
          onClick={() => {
            handleFetchTodoData(isEditMode ? data.id : undefined);
            setFormVisibility(false);
            setIdForEdit(null);
          }}
        >
          COFNIJ
        </button>
        <button
          className="big-button"
          onClick={() => {
            if (isEditMode) {
              handleEditTodo();
            } else {
              handleCreateTodo();
            }
          }}
          disabled={!isReadyToSend || isInProgress}
        >

          {isEditMode ? 'ZAPISZ' : 'DODAJ'}
        </button>

      </div>
    </div>
  );
}