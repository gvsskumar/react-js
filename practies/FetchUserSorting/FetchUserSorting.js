import React, { useState, useReducer } from "react";

export default function FetchUserSorting() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(-1);
  const FetchUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.org/users`);
    const userInfo = await response.json();
    return userInfo;
    //setData(userInfo);
  };
  const getusers = async () => {
    const users = await FetchUsers();
    setData(users);
  };
  const sortNames = async () => {
    if (count < 0) {
      let users1 = await FetchUsers();
      let sortuser = users1.sort(function (a, b) {
        if (a.firstname.length < b.firstname.length) {
          console.log("Name Short to Long");
          setCount(1);
          return -1;
        }
      });
      setData(sortuser);
    } else if (count > 0) {
      let sortuser = data.reverse();
      setCount(0);
      setData(sortuser);
    } else if (count === 0) {
      const users = await FetchUsers();
      setCount(-1);
      setData(users);
    }
    console.log(count);
  };

  return (
    <div className="App">
      <button onClick={getusers}>Get Users</button>
      <button onClick={sortNames}>Sort</button>
      <div>
        <ul>
          {data.length > 0 &&
            data.map((el, index) => {
              return <li key={index}>{el.firstname}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}
