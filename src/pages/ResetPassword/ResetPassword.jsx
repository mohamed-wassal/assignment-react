import { Button, Input } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const initialValues = { newPassword: "" };

  function onSubmit(values) {
    setIsLoading(true);
    setErrMsg("");
    setSuccessMsg("");

    axios
      .put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
        email: email,
        newPassword: values.newPassword,
      })
      .then(({ data }) => {
        if (data.token) {
          setSuccessMsg("Password reset successfully! Redirecting...");
          navigate("/login");
        }
      })
      .catch((err) => {
        setErrMsg(err.response?.data?.message || "Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold">Reset Your Password</h1>

      <form onSubmit={handleSubmit}>
        <div className="py-5 grid gap-4">
          <Input
            isInvalid={touched.newPassword && errors.newPassword}
            errorMessage={errors.newPassword}
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter New Password"
            type={showPassword ? "text" : "password"}
            variant="bordered"
            endContent={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 focus:outline-none"
              >
                {showPassword ? <Eye size={20} />  :<EyeOff size={20} /> }
              </button>
            }
          />

          <Button disabled={isLoading} type="submit" isLoading={isLoading} color="primary">
            Reset Password
          </Button>

          {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}
          {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}
        </div>
      </form>
    </div>
  );
}
