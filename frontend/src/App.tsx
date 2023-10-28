import AppHeader from "./components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/General.css";
import "./styles/Searchbar.css";
import CreationModal from "./components/CreationModal.tsx";

function App() {
  return (
    <div>
      <header id="header">
        <AppHeader></AppHeader>
      </header>
      <main id="body">
        <CreationModal></CreationModal>
      </main>
    </div>
  );
}

export default App;
