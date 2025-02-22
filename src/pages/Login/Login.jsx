import { Button, Input } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authContext } from "../../contexts/authContext";

export default function Login() {
  const [isLoding, setisLoding] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(authContext);

  const initialValues = {
    email: "",
    password: "",
  };

  function onSubmit(values) {
    setisLoding(true);
    seterrMsg("");
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then(({ data }) => {
        if (data.message === "success") {
          setIsLoggedIn(true);
          localStorage.setItem("token", data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        seterrMsg(err.response.data.message);
      })
      .finally(() => {
        setisLoding(false);
      });
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold">Login Now</h1>

      <form onSubmit={handleSubmit}>
        <div className="py-5 grid gap-4">
          <Input
            isInvalid={touched.email && errors.email}
            errorMessage={errors.email}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email"
            type="email"
            variant="bordered"
          />
          
          <div className="relative">
            <Input
              isInvalid={touched.password && errors.password}
              errorMessage={errors.password}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="bordered"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ?<Eye size={20} />  :<EyeOff size={20} /> }
            </button>
          </div>

          <Button
            disabled={isLoding}
            type="submit"
            className=""
            isLoading={isLoding}
            color="primary"
          >
            Login
          </Button>

          {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}
        </div>
        
        <button
          type="button"
          onClick={() => navigate("/forgotPassword")}
          className="text-blue-500 text-sm underline hover:text-blue-700 w-fit"
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
}
