import { useState } from "react";
import {v4 as uuid} from 'uuid';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App(){
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {id:uuid(), title}
    ]
    setBooks(updatedBooks)
  }
  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book)=>book.id !== id);
    setBooks(updatedBooks);
  }
  const editBookByID = (id, title) => {
    const updatedBooks = books.map((book)=>{
      if(book.id === id){
        book.title = title
      }
      return book
    })
    setBooks(updatedBooks);
  } 
  return <div className="app">
    <h1>Reading List</h1>
    <BookList books={books} 
    onDelete={deleteBookByID}
    onEdit ={editBookByID}
    />
    <BookCreate onCreate={createBook}/>
        </div>
  
}

export default App;