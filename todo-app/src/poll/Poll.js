import React, { useState } from "react";

const Poll = () => {
  const [options, setOptions] = useState([
    { id: 1, text: "Option 1", votes: 0 },
    { id: 2, text: "Option 2", votes: 0 },
    { id: 3, text: "Option 3", votes: 0 },
  ]);

  const handleVote = (optionId) => {
    const updatedOptions = options.map((option) => {
      if (option.id === optionId) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  return (
    <div>
      <h2>Vote for your favorite option:</h2>
      <ol value="1">
        {options.map((option) => (
          <li key={option.id}>
            {option.text}
            <span>Votes: {option.votes} </span>
            <button onClick={() => handleVote(option.id)}> Vote</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Poll;
