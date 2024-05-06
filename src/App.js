import "./App.css";
import LoginPage from "./pages/LoginPage";
import UserInfo from "./pages/UserInfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/userInfo" element={<UserInfo />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
