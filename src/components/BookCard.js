import { useState } from "react";
import BookEdit from "./BookEdit";
function BookCard ({book, onDelete, onEdit}){
  const [showEdit, setShowEdit] = useState(false);
  const hnadleDeleteClick = ()=>{
    onDelete(book.id)
  }
  const handleEditClick = ()=>{
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id, newTitle)=>{
    onEdit(id, newTitle);
    setShowEdit(false);
  }

  return<div className="book-show">
    <img alt="books" src ={`https://picsum.photos/seed/${book.id}}/300/200` }/>
    {showEdit?<BookEdit book={book} onSubmit={handleSubmit}/>:book.title}
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>Edit</button>
      <button className="delete" onClick={hnadleDeleteClick}>Delete</button>
    </div>
    </div>
}

export default BookCard;