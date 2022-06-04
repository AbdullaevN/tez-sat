import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteUser } from "../features/Users";

const AddComponent = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  //   const [name, setName] = useState("");
  //   const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  return (
    <div className="App">
      <h2>create with redux</h2>{" "}
      <div className="addProduct">
        {/* <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        /> */}
        <input
          type="text"
          placeholder="Description..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Price..."
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Photo..."
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addProduct({
                id: userList[userList.length - 1].id + 1,

                description,
                price,
                photo,
              })
            );
          }}
        >
          {" "}
          Add Product
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <img src={user.photo} alt="" />
              <h2> {user.price}</h2>
              <span> {user.description}</span>

              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddComponent;
