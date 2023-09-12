import { useEffect, useState } from 'react';
import './ToDoList.css';
import { fakeApiManager } from './ApiManager';
if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', '[]');
}

const toDoItem = {
    title: 'title',
    author: 'author',
    formText: 'formText',
};
const toDoItem2 = {
    title: 'title',
    author: 'author',
    formText: 'formText',
};

const toDoList = [toDoItem, toDoItem2];

toDoList.map((data) => {
    console.log(data);
});

function ToDoList() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [formText, setFormText] = useState('');
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        fakeApiManager.list().then((list) => {
            setToDoList(list);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Title', title);
        console.log('Author', author);
        console.log('Content', formText);
    };
    return (
        <>
            <div className="todo__wrapper">
                <div>
                    <h1>ToDoList</h1>
                </div>
                <div>
                    {toDoList.map((data, index) => (
                        <div key={index}>
                            <div>{data.title}</div>
                            <div>{data.author}</div>
                            <div>{data.formText}</div>
                        </div>
                    ))}
                </div>

                <div className="todo__title-wrapper">
                    <label className="todo__title-field">Title</label>
                    <input
                        className="todo__title-input"
                        type="text"
                        placeholder="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="todo__author-wrapper">
                    <label className="todo__author-field">Author</label>
                    <input
                        className="todo__author-input"
                        type="text"
                        placeholder="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="todo__form-wrapper">
                    <label className="todo__form-field">Content</label>
                    <input
                        className="todo__form-input"
                        type="text"
                        placeholder="ser"
                        value={formText}
                        onChange={(e) => setFormText(e.target.value)}
                    />
                </div>

                <button onClick={handleSubmit}>submit</button>
            </div>
        </>
    );
}

export default ToDoList;
