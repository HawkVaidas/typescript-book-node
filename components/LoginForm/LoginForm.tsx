

import { useState } from 'react';
import styles from "./styles.module.css";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import { login } from '@/apiCalls/user';


const LoginForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowError, setShowError] = useState(false);
    const [isButtonLoading, setButtonLoding] = useState(false);


const loginUser = async () => {
    try {
        setButtonLoding(true);

    const response = await login({email, password});

    if (response.status === 200) {
        cookie.set(process.env.JWT_KEY as string, response.data.token);
        cookie.set("user_id", response.data.userId);
        
        router.push("/");
    }

    console.log(response);
    setButtonLoding(false);
} catch (err) {
    console.log("err", err);
    setShowError(true);
    setButtonLoding(false);
}
};


  return (
    <div className={styles.main}>
        <input onChange={(e) => {setEmail(e.target.value);
        }}
        value={email} placeholder='email' type='text'/>

        <input onChange={(e) => {setPassword(e.target.value);
        }}
        value={password} placeholder='password' type='password'/>

       {isShowError && <h5 className={styles.error}>Bad email or password</h5>}

        <Button onClick={loginUser} title="Login" isLoading={isButtonLoading}/>
    </div>
  )
};

export default LoginForm;