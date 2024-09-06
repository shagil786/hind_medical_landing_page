"use client";
import React, { useState, createContext, ReactNode } from "react";

interface TableContextType {
  cardData: any[];
  loading: boolean;
  products: any[];
}

const TableContext = createContext<TableContextType | undefined>(undefined);

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [cardData, setCardData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const values = {
    cardData,
    loading,
    products,
  };

  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};

export const useTable = () => {
  const context = React.useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
};
