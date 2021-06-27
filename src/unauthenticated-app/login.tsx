import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import React from "react";

export const Login = () => {
  const { login, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name={"useranme"}
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
            <Button type={"primary"} htmlType={"submit"}>
              登录
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
