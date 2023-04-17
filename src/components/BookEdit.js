import { useState } from "react";
import BookForm from "./BookForm";
function BookEdit({book, onSubmit}){
  const [title, setTitle] = useState(book.title);
  const handleChange = (event)=> {
    setTitle(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    onSubmit(book.id, title);
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