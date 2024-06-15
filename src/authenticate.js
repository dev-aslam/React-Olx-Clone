import {  signInWithEmailAndPassword} from "firebase/auth";
import { auth  } from "./firebase";


export const authenticate  = (props) =>{
return signInWithEmailAndPassword(auth, props.email, props.password)
.then((userCredential) => {
    return userCredential.user;
  })
  .catch((error) => {
    throw error
  });

}