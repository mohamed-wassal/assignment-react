import { Button, Input } from "@heroui/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function ForgotPassword() {
  const [isLoding, setIsLoding] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  function onSubmit(values) {
    setIsLoding(true);
    setErrMsg("");

    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values)
      .then(({ data }) => {
     
        if (data.statusMsg === "success") {
          
          navigate("/verifyCode", { state: { email: values.email } });
        }
      })
      .catch((err) => {
        setErrMsg(err.response?.data?.message || "Something went wrong!");
      })
      .finally(() => {
        setIsLoding(false);
      });
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email"),
  });

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold">Forgot Password</h1>

      <form onSubmit={handleSubmit}>
        <div className="py-5 grid gap-4">
          <Input
            isInvalid={touched.email && errors.email}
            errorMessage={errors.email}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter your email"
            type="email"
            variant="bordered"
          />

          <Button disabled={isLoding} type="submit" isLoading={isLoding} color="primary">
            Send Verification Code
          </Button>

          {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}
        </div>
      </form>
    </div>
  );
}
