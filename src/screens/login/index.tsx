import { register } from "auth-provider";
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const Login = () => {
  const { login, user } = useAuth();
  // const login = (param: { username: string; password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(param),
  //   }).then(async (res) => {
  //     if (res.ok) {
  //     }
  //   });
  // };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <div>
      {user && <p>登录成功,用户名{user?.name}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id={"username"} />
        </div>
        <div>
          <label htmlFor="passowrd">密码</label>
          <input type="password" id={"password"} />
        </div>
        <div>
          <button>登录</button>
        </div>
      </form>
    </div>
  );
};
