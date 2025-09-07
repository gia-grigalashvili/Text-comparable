import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SidebarResponsive from "./components/sidebar/Sidebar";
import MainComparison from "./components/Comparison/MainComparison";

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        <SidebarResponsive />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Navigate to="/composition" replace />} />
            <Route path="/grammar" element={<MainComparison />} />
            <Route path="/composition" element={<MainComparison />} />
            <Route path="/voice-to-text" element={<MainComparison />} />
            <Route path="/text-to-voice" element={<MainComparison />} />
            <Route path="/pdf" element={<MainComparison />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
