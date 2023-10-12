import AppHeader from "./components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import CreationModal from "./components/CreationModal.tsx";
import SearchBar from "./components/SearchBar.tsx";

function App() {
  return (
    <div>
      <header id="header">
        <AppHeader></AppHeader>
      </header>
      <body id="body">
        <CreationModal></CreationModal>
        <SearchBar></SearchBar>
      </body>
    </div>
  );
}

export default App;
