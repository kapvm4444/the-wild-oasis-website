"use client";
import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        you clicked me {count} times
      </button>
    </>
  );
}
