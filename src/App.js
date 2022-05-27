import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [container, setContainer] = useState([]);

  function messageMe() {
    const options = {
      method: "POST",
      url: "https://waifu.p.rapidapi.com/path",
      params: {
        user_id: "sample_user_id",
        message: "Hi",
        from_name: "Boy",
        to_name: "Girl",
        situation: "Girl loves Boy.",
        translate_from: "auto",
        translate_to: "auto"
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "waifu.p.rapidapi.com",
        "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setContainer(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    messageMe();
  }, [query]);

  function sumiter(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1> Chat Bot</h1>
      <form onSubmit={sumiter}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" onClick={(e) => setQuery(e.target.value)}>
          Send
        </button>
      </form>
      {container.map((item) => {
        return (
          <div>
            <h1>{item.data}</h1>
          </div>
        );
      })}
    </div>
  );
}
