import { useState } from "react";
import BookForm from "./BookForm";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}){
  const { editBookByID } = useBooksContext()
  const [title, setTitle] = useState(book.title);

  const handleChange = (event)=> {
    setTitle(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    editBookByID(book.id, title);
    onSubmit();
  }
  return<div>
      <BookForm 
      handleSubmit={handleSubmit}
      titleValue = {title}
      titleOnChange = {handleChange}
      action = "Save"
      />
    </div>
}

export default BookEdit;