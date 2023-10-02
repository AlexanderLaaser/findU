import AppHeader from "./components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import CreationModal from "./components/CreationModal.tsx";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader></AppHeader>
        <CreationModal></CreationModal>
      </header>
    </div>
  );
}

export default App;
