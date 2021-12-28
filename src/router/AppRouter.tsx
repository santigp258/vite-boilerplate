import React, { useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "src/global_stores/useAuth";
import RouterHandler from "src/router/RouterHandler";

const AppRouter: React.FC = () => {
  const user = useAuth(useCallback((state) => !!state.user, []));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/page1" element={<h1> Page 1</h1>} />
        <Route
          path="/login"
          element={
            <RouterHandler
              component={() => <h1>Login page</h1>}
              isAuth={user}
              isPublic
            />
          }
        />
        <Route
          path="/dash"
          element={
            <RouterHandler
              component={() => <h1>You are logged in</h1>}
              isAuth={!user}
            />
          }
        />
        <Route path="*" element={<h1>No found</h1>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
