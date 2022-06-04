// import React from "react";
// import Form from "./Form";
// import { setUser } from "./../store/slices/userSlice";
// import { useDispatch } from "react-redux";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleRegister = (email, password) => {
//     const auth = getAuth();
//     console.log(auth);

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         console.log(user);
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.accessToken,
//           })
//         );
//         navigate("/");
//       })
//       .catch(console.error);
//   };
//   return (
//     <div>
//       <Form title="register" handleClick={handleRegister} />
//     </div>
//   );
// };

// export default SignUp;
