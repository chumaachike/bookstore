import BookCard from "./BookCard"
import useBooksContext from "../hooks/use-books-context";
function BookList(){
  const { books} = useBooksContext();
  const renderedBooks = books.map((book)=>
        <BookCard key={book.id}
        book={book}
        />
  )
  return<div className="book-list">
  {renderedBooks}</div>
}

export default BookList;