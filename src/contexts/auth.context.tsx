import { useEffect, useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import firebase from "firebase/app";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }: any) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if(user) history.push('/chat');
    });
  }, [user, history]);

  const value: any = { user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
