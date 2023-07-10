import { Space } from "antd";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { authServices } from "~/services";
import { Status } from "~/types";
import { AxiosError } from "axios";

const LoginV2 = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<Status>(Status.Ready);
  const [error, setError] = useState("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onFinish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Success:", values);
    setStatus(Status.Start);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await authServices.login(values);
        setStatus(Status.Complete);
        console.log(response);
        resolve(true);
      } catch (error) {
        setStatus(Status.Fail);
        if (error instanceof AxiosError) {
          if (error.response && error.response.data) {
            setError(error.response.data.error);
          }
        }
      }
    });
  };

  console.log(error);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Space align="center">
        <form onSubmit={onFinish} action="" method="post">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={onChangeInput}
              value={values.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={onChangeInput}
              value={values.password}
              type="password"
              name="password"
            />
          </div>
          <div>{error}</div>
          <button disabled={status === Status.Start} type="submit">
            {status === Status.Start ? "Loading..." : "Login"}
          </button>
        </form>
      </Space>
    </div>
  );
};

export default LoginV2;
