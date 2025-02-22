import { Button, Input } from "@heroui/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function VerifyCode() {
  const [isLoding, setIsLoding] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; 

  const initialValues = {
    resetCode: "",
  };

  function onSubmit(values) {
    setIsLoding(true);
    setErrMsg("");
    console.log(values)
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values)
      .then(({ data }) => {
      
        if (data.status === "Success") {
         
          navigate("/resetPassword", { state: { email } });


        }
      })
      .catch((err) => {
        setErrMsg(err.response?.data?.message || "Invalid code!");
       
      })
      .finally(() => {
        setIsLoding(false);
      });
  }

  const validationSchema = Yup.object({
    resetCode: Yup.string().required("Verification code is required").matches(/^\d{6}$/, "Code must be 6 digits"),
  });

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold">Verify Your Code</h1>

      <form onSubmit={handleSubmit}>
        <div className="py-5 grid gap-4">
          <Input
            isInvalid={touched.resetCode && errors.resetCode}
            errorMessage={errors.resetCode}
            name="resetCode"
            value={values.resetCode}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter Verification Code"
            type="text"
            variant="bordered"
          />

          <Button disabled={isLoding} type="submit" isLoading={isLoding} color="primary">
            Verify Code
          </Button>

          {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}
        </div>
      </form>
    </div>
  );
}
