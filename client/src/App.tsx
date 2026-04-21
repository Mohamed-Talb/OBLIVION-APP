import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/admin/home";
import { Login as AdminLogin } from "./pages/admin/login";
import { Profile as AdminProfile } from "./pages/admin/profile";
import { AddEvent } from "./pages/admin/addEvent";
import { ScanPage } from "./pages/admin/scan";
import { Events } from "./pages/admin/events";

// import { Home } from "./pages/user/home";
// import { PastEvents } from "./pages/user/pastevents";
// import { Profile } from "./pages/user/profile";
// import { Login } from "./pages/user/login";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="min-h-screen flex items-center justify-center">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/pastevents" element={<PastEvents />} />
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/scan" element={<ScanPage />} />
        <Route path="/admin/events" element={<Events />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/addEvent" element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
