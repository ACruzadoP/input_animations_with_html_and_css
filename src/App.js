import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1>Animation Input</h1>

      <div className="form">
        <input type="text" name="name" autoComplete="off" required />
        <label for="name" className="label-name">
          <span className="content-name">Name</span>
        </label>
      </div>
    </React.Fragment>
  );
}

export default App;
