import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/monsters/card-list/CardList";
import { SearchBox } from "./components/monsters/search-box/SearchBox";

function AppMonsters() {
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const resJson = await response.json();
      setMonsters(resJson);
      console.log("useEffect fired");
    };
    fetchFunc();
  }, [searchQuery]);

  const getMonsters = () => {
    return monsters.filter((monster) => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  function onSearchChange(event) {
    setSearchQuery(event.target.value);
  }
  // const onSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox value={searchQuery} placeholder="search monsters" handleChange={onSearchChange} />
      <CardList monsters={getMonsters()} />
    </div>
  );
}

export default AppMonsters;
