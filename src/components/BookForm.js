function BookForm ({handleSubmit, titleValue, titleOnChange, action}){
  return(
    <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className='input' onChange={titleOnChange} value={titleValue}/>
          <button className='button'>{action}</button>
      </form>
  )
}

export default BookForm;