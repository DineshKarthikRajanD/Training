import { useEffect, useState } from "react";
import axios from "axios";

var UseEffect = () => {
  //   var [text, setText] = useState("Dinesh");
  //   useEffect(() => {
  //     console.log(text);
  //   }, [text]);

  //   return (
  //     <>
  //       <h1>UseEffect Example</h1>
  //       <input
  //         type="text"
  //         placeholder="Enter your text"
  //         value={text}
  //         onChange={(e) => {
  //           setText(e.target.value);
  //         }}
  //       />
  //       <h2>Text Typed is {text}</h2>
  //     </>
  //   );
  var [post, setPost] = useState([]);
  var [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes);
        setRecipes(res.data.recipes || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <h1>Getting data from Json Placeholder API</h1>
      <h2>Posts are </h2>
      <ol>
        {post.map((element, index) => (
          <li key={index}>{element.title}</li>
        ))}
      </ol>
      <ol
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {recipes.map((element, index) => (
          <li key={index}>
            <img src={element.image} alt="" style={{ width: "100px" }} />
            <h1>{element.name}</h1>
          </li>
        ))}
      </ol>
    </section>
  );
};
export default UseEffect;
