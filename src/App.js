import './App.css';

import Header from "./components/Header"
import Main from "./components/Main"
import BooksProvider from "./context/BooksContext"

function App() {
  return (
    <BooksProvider>
      <div className="App">
      <Header />
      <Main />
    </div>
    </BooksProvider>
  );
}

export default App;
