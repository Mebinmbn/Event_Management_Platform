import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./components/Event";
import EventRequests from "./components/EventRequests";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EventRequests />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
