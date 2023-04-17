import { useContext } from "react";
import BookCard from "./BookCard"
import BooksContext from "../context/books";

function BookList({books, onDelete, onEdit}){
  const renderedBooks = books.map((book)=>
        <BookCard key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit = {onEdit}
        />
  )
  return<div className="book-list">
  {renderedBooks}</div>
}

export default BookList;