// import React from "react";
// import Form from "./Form";
// import { setUser } from "./../store/slices/userSlice";
// import { useDispatch } from "react-redux";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const handleLogin = (email, password) => {
//     const auth = getAuth();
//     // console.log(auth);
//     signInWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         // console.log(user);
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.accessToken,
//           })
//         );
//         navigate("/");
//       })
//       // eslint-disable-next-line no-undef
//       .catch(e);
//   };
//   return (
//     <div>
//       <Form title="sign in" handleClick={handleLogin} />
//     </div>
//   );
// };

// export default Login;
