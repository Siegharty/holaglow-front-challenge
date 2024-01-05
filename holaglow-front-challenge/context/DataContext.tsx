"use client";
import { DataMock } from "@/types/DataContext";
import React, { useContext } from "react";
import { createContext, useState } from "react";

interface DataContextProps {
  children: React.ReactNode;
}

const DataContext = createContext<DataMock | null>(null);

const DataContextProvider = ({ children }: DataContextProps) => {
  const [mockDataBoolean, setMockDataBoolean] = useState(false);

  const toggleMockData = () => {
    setMockDataBoolean((prevState) => !prevState);
  };

  const contextValues: DataMock = {
    mockDataBoolean,
    toggleMockData,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      "useDataContext debe ser utilizado dentro de un DataContextProvider"
    );
  }

  return context;
};

//export default DataContextProvider;
export { DataContextProvider, useDataContext };
