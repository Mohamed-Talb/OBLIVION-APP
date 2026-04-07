import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { PastEvents } from "./pages/pastevents";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pastevents" element={<PastEvents />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
