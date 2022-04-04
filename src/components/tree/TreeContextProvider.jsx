import React from "react";

export const TreeContext = React.createContext();

export const TreeContextProvider = ({children}) => {
  const [nodes, setNodes] = React.useState({});
  return <TreeContext.Provider value={{nodes, setNodes}}>{children}</TreeContext.Provider>;
};


export const useTreeContext = () => {
    return React.useContext(TreeContext);
}
