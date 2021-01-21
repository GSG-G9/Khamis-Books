import { useEffect, useContext } from "react";
import axios from "axios";
import { BooksContext } from "../../context/BooksContext";
import "./style.css";

function Main() {
  const { inpValue, data, setData } = useContext(BooksContext);
  console.log(inpValue);

  useEffect(() => {
    const abortController = new AbortController();
    axios(
      `https://www.googleapis.com/books/v1/volumes/?q=${
        inpValue ? inpValue : "J"
      }`,
      {
        signal: abortController.signal,
      }
    )
      .then((res) => setData(res.data))
      .catch((err) => console.log("error" + err.name));

    return () => abortController.abort();
  }, [inpValue]);

  return (
    console.log(inpValue, data) || (
      <div className="container">
        <ul>
          {data.items
            ? data.items.map(({ id, volumeInfo: { title, imageLinks } }) => (
                <li key={id}>
                  <p>name: {title.slice(0, 20)}</p>
                  <img
                    src={
                      imageLinks
                        ? imageLinks.thumbnail
                        : "https://via.placeholder.com/120x150.png"
                    }
                    alt={title}
                  />
                  {/* <p>description: {item.volumeInfo.description}</p>
             <p>url: <a href={item.volumeInfo.infoLink}>{item.volumeInfo.infoLink}</a></p> */}
                </li>
              ))
            : "No Data"}
        </ul>
      </div>
    )
  );
}

export default Main;
