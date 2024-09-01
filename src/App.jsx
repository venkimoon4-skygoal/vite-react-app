import "./App.css";

function App() {
  const name = import.meta.env.VITE_ADMIN_NAME;

  return (
    <>
      <div>
        <p>{name}</p>
      </div>
    </>
  );
}

export default App;
