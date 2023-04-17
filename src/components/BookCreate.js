import { useState } from 'react';
import BookForm from './BookForm';
function BookCreate({onCreate}) {
  const [title, setTitle] = useState('');
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
 const handleSubmit = (event) => {
  event.preventDefault();
  onCreate(title);
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