import React, { useState } from "react";
import firebase from "../util/firebase";
import { Row, Col } from "react-bootstrap";
import { Form, Card, Input, Button, notification } from "antd";
import "antd/dist/antd.css";
import emailjs from "emailjs-com";
import "./form2.css";

const { TextArea } = Input;

export default function Form2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  const handlechange = (e) => {
    setName(e.target.value);
  };

  const onFinish = (values) => {
    function createTodonow() {
      const todoRef = firebase.database().ref("TodoNow");

      const todo = {
        name,
        email,
        message,
      };

      todoRef.push(todo);
      console.log(todo);

      emailjs
        .send(
          "service_3rn207d",
          "template_03dy4sk",
          todo,
          "user_PRZMj8M9O77zh8KiQnnsu"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    createTodonow();

    setEmail("");
    form.resetFields();

    const type = "success";

    const openNotificationWithIcon = () => {
      notification[type]({
        message: "Form Submitted",
        description:
          "Hurray! your form has been submitted. You will receive an email soon",
      });
    };

    openNotificationWithIcon();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{ backgroundColor: "#2F4F4F", padding: "5px" }}
        className="formcard"
      >
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col md={12}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name!",
                  },
                ]}
              >
                <Input
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  onChange={handlechange}
                  value={name}
                />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
              >
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please enter your message!",
                  },
                ]}
              >
                <TextArea
                  name="message"
                  rows={4}
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  placeholder="Enter message"
                />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item>
                <Button
                  type="primary"
                  size={"large"}
                  style={{ width: "100%" }}
                  htmlType="submit"
                >
                  <b>Submit</b>
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <p style={{ color: "white" }}>made by Souvik Das</p>
      </Card>
    </div>
  );
}
