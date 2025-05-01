import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  setUser: () => {},  
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(getApp());
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUserState(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const setUser = (user: FirebaseAuthTypes.User | null) => {
    setUserState(user);
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
