import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const DbStoreProduct = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [products, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "product");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "product", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "product", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create user</button>
      {products.map((product) => {
        return (
          <div>
            {" "}
            <span key={product}>{product}</span>
            <h1>Name: {product.category}</h1>
            <h2>Name: {product.price}</h2>
            <h2>Name: {product.description}</h2>
            <img src={product.photo} alt="" />
            <button
              onClick={() => {
                updateUser(product.id, product.age);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(product.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DbStoreProduct;
