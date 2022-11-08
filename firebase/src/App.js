import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Getting Started with Firebase 9</h1>

      <h2>Firebase Firestore</h2>

      <form className="add">
        <label for="title">Title:</label>
        <input type="text" name="title" required />
        <label for="author">Author:</label>
        <input type="text" name="author" required />

        <button>add a new book</button>
      </form>

      <form className="delete">
        <label for="id">Document id:</label>
        <input type="text" name="id" required />

        <button>delete a book</button>
      </form>
    </div>
  );
}

export default App;
