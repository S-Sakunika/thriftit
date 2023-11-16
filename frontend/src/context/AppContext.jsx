import { createContext, useContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null);

  return (
    <AppContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
