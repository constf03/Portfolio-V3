"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
import { toast, ToastContainer } from "react-toastify";

export default function ContactForm() {
  const serviceID = "service_pr7inxf";
  const templateID = "template_rqamf35";
  const publicKey = "WU9dC2Uwm4AXB9yib";
  const [userInput, setUserInput] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const emailParams = {
        from_name: userInput.from_name,
        from_email: userInput.from_email,
        subject: userInput.subject,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publicKey
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error: unknown) {
      toast.error("Failed to send message. Please try again later.");
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className={styles.contact_form}
      style={{ margin: 24 }}
    >
      <h2 className="h2">Contact Me Directly</h2>
      <p>Feel free to contact me to discuss work opportunities etc.</p>
      <Form.Group as={Col} controlId="formGridName" style={{ marginTop: 8 }}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="from_name"
          type="text"
          value={userInput.from_name}
          required={true}
          onChange={handleChange}
          placeholder="Your name"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: 8 }}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="from_email"
          type="email"
          value={userInput.from_email}
          required={true}
          onChange={handleChange}
          placeholder="Your email address"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridSubject" style={{ marginTop: 8 }}>
        <Form.Label>Subject</Form.Label>
        <Form.Control
          name="subject"
          type="text"
          value={userInput.subject}
          required={true}
          onChange={handleChange}
          placeholder="Enter subject"
        />
      </Form.Group>

      <Form.Group as={Col} id="formGridMessage" style={{ marginTop: 8 }}>
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          value={userInput.message}
          required={true}
          onChange={handleChange}
          placeholder="Enter your message here"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
        Submit
      </Button>
      <ToastContainer />
    </Form>
  );
}
