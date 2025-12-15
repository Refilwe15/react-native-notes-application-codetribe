import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// eslint-disable-next-line import/namespace
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
// eslint-disable-next-line import/no-unresolved
import ProtectedRoute from "./navigation/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <NavigationContainer>
          <ProtectedRoute />
        </NavigationContainer>
      </NotesProvider>
    </AuthProvider>
  );
}
