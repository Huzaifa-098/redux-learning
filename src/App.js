import logo from "./logo.svg";
import "./App.css";
import { Map } from "immutable";
import { produce } from "immer";
function App() {
  const person = { name: "john" };
  // const update = Object.assign({}, person, { name: "bob", age: "30" });
  const update = { ...person, name: "John" };
  // console.log(update);

  //Arrays
  const number = [1, 2, 3, 4];
  const added = [6, ...number, 5];
  // console.log(added);

  const numbers = [1, 2, 3];
  const index = numbers.indexOf(2);
  const add = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
  // console.log(add);
  //remove
  const remove = numbers.filter((n) => n !== 0);
  // console.log(remove);
  //update
  const updated = numbers.map((n) => (n === 2 ? 20 : n));
  // console.log(updated);
  //immutable
  let book = new Map({ title: "abdullah abid" });
  function publish(book) {
    return book.set("isPublish", true);
  }
  book = publish(book);
  // console.log(book);
  //immer

  // let books = new Map({ title: "abdullah abid" });
  // function publish(books) {
  //   return produce(books, (draftbooks) => {
  //     draftbooks.osPublished = true;
  //   });
  // }
  // let updates = publish(books);
  // console.log(book);
  // console.log(updates);

  return <div className=""></div>;
}

export default App;
