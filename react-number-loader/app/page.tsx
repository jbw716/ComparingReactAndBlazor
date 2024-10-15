'use client'

import { useState } from "react";

export default function Home() {
  const numberOfNumbers = 100000;
  const [numbers, setNumbers] = useState<number[]>([]);

  const fillArray = () => {
    const arr = [];
    for (let i = 0; i < numberOfNumbers; i++) {
      arr.push(i);
    }
    setNumbers(arr);
  };

  const fillArraySimple = () => setNumbers(Array.from({ length: numberOfNumbers }, (_, i) => i));

  // fillArrayFromWebAPI
  const fillArrayFromWebAPI = async () => {
    const response = await fetch("https://localhost:5001/numbers");
    const data = await response.json();
    setNumbers(data);
  }

  const reset = () => setNumbers([]);

  return (
    <div>
      <h1>React Numbers</h1>
      <button onClick={reset}>
        Reset
      </button>
      <button onClick={fillArray}>
        Load Numbers
      </button>
      <button onClick={fillArrayFromWebAPI}>
        Load Numbers From API
      </button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
