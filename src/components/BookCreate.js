import { useState } from 'react';
import BookForm from './BookForm';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const [title, setTitle] = useState('');
  const {createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
 const handleSubmit = (event) => {
  event.preventDefault();
  createBook(title);
  setTitle('');
 } 
  return (<div className='book-create'>
    <h3>Add a Book</h3>
    <BookForm 
      handleSubmit={handleSubmit}
      titleValue = {title}
      titleOnChange = {handleChange}
      action = "Save"
      />
</div>);

}

export default BookCreate;