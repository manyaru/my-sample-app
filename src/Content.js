import React from 'react';

function Content({ count, increment }) {
  return (
    <main>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </main>
  );
}

export default Content;
