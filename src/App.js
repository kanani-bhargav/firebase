import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ProtectedRoute from "./component/ProtectedRoute";
import { UserAuthContextProvider } from "./contex/UserAuthContext";
import Header from "./component/Header";
import Storage from "./component/Storage";
import Firestore from "./component/Firestore";
import Realtimedb from "./component/Realtimedb";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
              <Route
                path="/firestore"
                element={
                  <ProtectedRoute>
                    <Firestore />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/realdb"
                element={
                  <ProtectedRoute>
                    <Realtimedb />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/storage"
                element={
                  <ProtectedRoute>
                    <Storage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
