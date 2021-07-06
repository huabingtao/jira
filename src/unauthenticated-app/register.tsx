import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { LoingButton } from "unauthenticated-app";

export const RegisterScreen = () => {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="用户名" type="text" id={"username"} />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder="密码" type="password" id={"password"} />
        </Form.Item>
        <div>
          <Form.Item>
            <LoingButton type={"primary"} htmlType={"submit"}>
              注册
            </LoingButton>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
