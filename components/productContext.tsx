import React, { createContext, useState, ReactNode } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ProductContextType {
  products: Product[];
  updateProductQuantity: (productId: string, quantity: number) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const updateProductQuantity = (productId: string, quantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(0, product.quantity + quantity) } // Ensure we don't set negative quantity
          : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, updateProductQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};
