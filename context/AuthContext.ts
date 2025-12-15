import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  email: string;
  username: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (user: User) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (user: User) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }

  async function register(newUser: User) {
    await AsyncStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  }

  async function login(email: string, password: string) {
    const storedUser = await AsyncStorage.getItem("user");
    if (!storedUser) return false;

    const parsed = JSON.parse(storedUser);
    if (parsed.email === email && parsed.password === password) {
      setUser(parsed);
      return true;
    }
    return false;
  }

  async function logout() {
    setUser(null);
  }

  async function updateProfile(updatedUser: User) {
    await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
