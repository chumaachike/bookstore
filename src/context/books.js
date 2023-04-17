import  {createContext, useState} from 'react';

const BooksContext = createContext();


export function Provider({children}) {
  
  return <BooksContext.Provider value={{}}>
    {children}
  </BooksContext.Provider>
}

export default BooksContext;