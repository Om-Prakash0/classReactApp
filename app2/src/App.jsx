import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const y = [2024, 2025, 2026, 2027];
  const c = { name: "KIET", location: "Ghaziabad" };
  return (
    <div className="app">
      <Header title="My New React Website" />
      <Footer year={y} name={c.name} y="2025" />
    </div>
  );
}

export default App;
