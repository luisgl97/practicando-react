import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Prueba } from "./pages/Prueba";
import { AuthProvider } from "./context/AuthProvider";

import { store } from "./app/store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/prueba" />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};
