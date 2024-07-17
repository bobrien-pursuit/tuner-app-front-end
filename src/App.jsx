// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PAGES
import Home from "./Pages/Home.jsx";
import Show from "./Pages/Show.jsx";
import Index from "./Pages/Index.jsx";
import Edit from "./Pages/Edit.jsx";
import New from "./Pages/New";

// COMPONENTS
import NavBar from "./Components/NavBar.jsx"

function App() {
  return (
  <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="/songs/new" element={<New />} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App
