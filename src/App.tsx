import { ToastContainer } from "react-toastify";

import AppRouter from "./router/AppRouter";

// import.meta.env.VITE_BASE_URL
const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
