import { createContext } from "react";
import useFirebase from "../hooks/useFirebase.js";
import useCourses from "./../hooks/useCourses.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const AllContexts = useFirebase();
  const { courses } = useCourses();

  const data = { AllContexts, courses };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
