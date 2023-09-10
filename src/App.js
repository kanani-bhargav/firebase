import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./component/Login";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ProtectedRoute from "./component/ProtectedRoute";
import { UserAuthContextProvider } from "./contex/UserAuthContext";
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Container style={{ width: "400px" }}>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
