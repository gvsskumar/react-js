import useStorage from "./components/useStorage";

export default function App() {
  const { data } = useStorage("myName");
  //console.log(data);
  //const setLocalStorage = localStorage.setItem("uname", "Kumar");
  //const getLocalStorage = localStorage.getItem("uname");
  return <div className="App">{data}</div>;
}
