import { createContext, useState } from "react";

 const BooksContext = createContext();
 
 function BooksProvider({children}) {
  const [inpValue , setInpValue] = useState("");
  const [data, setData] = useState("");
  
  const handleChange = (e) => {
    setInpValue(e.target.value)
  }
     return (
        <BooksContext.Provider value={{inpValue,handleChange,data,setData}}>
        {children}
      </BooksContext.Provider>
     )
 }
 
 export {BooksContext, BooksProvider as default };
 