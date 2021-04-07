import React, { useState } from "react";


export default function App() {
  const [textsList, setTextsList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addToList = () => {
    const newArray = [...textsList];
    newArray.push(inputValue);
    setTextsList(newArray);
    setInputValue("");
  };

  const renderList = textsList.map((text) => {
    return <p>{text}</p>;
  });

  return (
    <div className="App">
      <input onChange={handleInputValue} value={inputValue} />
      <input onChange={handleInputValue} value={inputValue} />
      <input onChange={handleInputValue} value={inputValue} />
      <button onClick={addToList}>Adicionar</button>
      {renderList}
    </div>
  );
}

