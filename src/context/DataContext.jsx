import React, { useState, useEffect } from "react";
import Data from "./data.json";
import { pFirestore } from "../firebase/firebaseConfig";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const data = Data;

  const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      const unsub = pFirestore
        .collection(collection)
        .orderBy("order")
        .onSnapshot((snapshot) => {
          let documents = [];
          snapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
          console.log(documents);
        });

      return () => unsub();
    }, [collection]);

    return { docs };
  };

  return (
    <DataContext.Provider
      value={{
        data,
        useFirestore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
