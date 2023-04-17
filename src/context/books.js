import  {createContext, useState} from 'react';
import {v4 as uuid} from 'uuid';
const BooksContext = createContext();


export function Provider({children}) {
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
  const valueToShare = { books, deleteBookByID, editBookByID, createBook}
  
  return <BooksContext.Provider value={valueToShare}>
    {children}
  </BooksContext.Provider>
}

export default BooksContext;