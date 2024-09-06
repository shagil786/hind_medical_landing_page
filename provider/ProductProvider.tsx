"use client";
import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

interface ProductProviderContext {
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any>>;
  searchValue: string;
  handleSearch: (value: string) => void;
  addProduct: (product: any, operation: 1 | 0) => void;
  findProduct: (id: number) => any;
  formSubmit: any;
  showSuccess: boolean;
  dropdown: boolean;
  handleShow: (value: boolean) => void;
}

export const ProductContext = createContext<ProductProviderContext | undefined>(
  undefined
);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedProduct, setFilteredProduct] = useState<any>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const addProduct = (product: any, operation: 1 | 0) => {
    let filteredProduct = [...selectedProduct];

    if (operation === 0) {
      const index = filteredProduct?.findIndex(
        (item: any) => item?.id === product?.id
      );

      if (index !== -1) {
        filteredProduct.splice(index, 1);
      }

      setFilteredProduct(filteredProduct);
      return;
    }

    setFilteredProduct([...selectedProduct, product]);
  };

  const findProduct = (id: number) =>
    selectedProduct.filter((item: any) => item.id === id)?.length;

  const formSubmit = (data: any) => {
    console.log(data);
    setTimeout(() => {
      setShowSuccess(true);
    }, 200);
  };

  const handleShow = (value: boolean) => {
    setDropdown(value);
  };

  const values = {
    products,
    setProducts,
    searchValue,
    handleSearch,
    addProduct,
    findProduct,
    formSubmit,
    showSuccess,
    dropdown,
    handleShow,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
