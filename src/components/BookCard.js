import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookCard ({book}){
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookByID } = useBooksContext();

  const handleDeleteClick = ()=>{
    deleteBookByID(book.id)
  }

  const handleEditClick = ()=>{
    setShowEdit(!showEdit);
  }

  return<div className="book-show">
    <img alt="books" src ={`https://picsum.photos/seed/${book.id}}/300/200` }/>
    {showEdit?<BookEdit book={book} onSubmit={handleEditClick}/>:book.title}
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>Edit</button>
      <button className="delete" onClick={handleDeleteClick}>Delete</button>
    </div>
    </div>
}

export default BookCard;