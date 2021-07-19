import "./App.css";
import Form2 from "./components/Form2";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(./images/celty.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        paddingTop: "4rem",
      }}
    >
      <h1 style={{ color: "white" }}>Join the Dollars</h1>
      <Form2 />
    </div>
  );
}

export default App;
