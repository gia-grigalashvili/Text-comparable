import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SidebarResponsive from "./components/sidebar/Sidebar";
import MainComparison from "./components/Comparison/MainComparison";
import Grammar from "./components/Grammar/Grammar";
import Voise from "./components/Voic/Voise";
import TextVoise from "./components/textvoise/TextVoise";
import Pdf from "./components/pdffile/Pdf";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar - Fixed on desktop, header on mobile */}
        <SidebarResponsive />

        {/* Main Content Area - with proper margins */}
        <div className="flex-1 lg:ml-56 xl:ml-64 pt-14 sm:pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<Navigate to="/composition" replace />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/composition" element={<MainComparison />} />
            <Route path="/voice-to-text" element={<TextVoise />} />
            <Route path="/text-to-voice" element={<Voise />} />
            <Route path="/pdf" element={<Pdf />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
