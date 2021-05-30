import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth.context";
import "./assets/css/main.css";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chat" component={Chat} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
