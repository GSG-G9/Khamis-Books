import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState("");
  console.log(data);
  console.log(data.items);

  useEffect(() => {
    const abortController = new AbortController();
    axios(`https://www.googleapis.com/books/v1/volumes/?q=aa`, {
      signal: abortController.signal,
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error" + err.name));

    return () => abortController.abort();
  }, []);
  return (
    <div>
      <h1>Main</h1>
      <ul>
        {data &&
          data.items.map((item) => (
            <li key={item.id}>
              <p>name: {item.volumeInfo.title}</p>
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                alt={item.volumeInfo.title}
              />
              <p>description: {item.volumeInfo.description}</p>
             <p>url : <a href={item.volumeInfo.infoLink}>{item.volumeInfo.infoLink}</a></p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Main;
