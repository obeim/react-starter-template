import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
//import { Error } from "../../components/Error";
import { loginValidationSchema } from "./validation";
///import { LanguageContext } from "../../context/language.context";
import { authSelector, logIn } from "@/store/api/auth/jwtAuth.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useJtwLoginMutation } from "@/store/api/auth/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LoginResult } from "@/types";
import { Button } from "@mantine/core";
import { Error } from "@/components/Error";
import { useTranslation } from "react-i18next";
function Login() {
  const { t } = useTranslation();
  const auth = useSelector(authSelector);
  const [login, { isLoading, data, error }] = useJtwLoginMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginValidationSchema),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(logIn(error as FetchBaseQueryError));
    } else if (data) {
      dispatch(logIn(data as LoginResult));
    }
  }, [error, data, dispatch]);
  const onSubmit = (e: FieldValues) => {
    login({ email: e["email"], password: e["password"] });
  };

  return (
    <div
      className="h-full flex flex-col bg-div items-center"
      style={{ height: "100vh" }}
    >
      <form
        className="flex transition-all duration-700 my-auto  md:min-w-[350px]   mx-10 gap-3 rounded-md flex-col p-5  border-[1px] border-b-4 border-l-4 border-gray-700 shadow-md "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-5 text-2xl">
          Welcome <span className="underline">back</span> to the{" "}
          <span className="animate-pulse font-semibold shadow-inner dark:shadow-md text-gray-500 px-1 rounded-sm shadow-red-900 dark:shadow-white">
            bit
          </span>
        </h1>
        {auth.errorKey && <Error msg={auth.errorKey} />}
        <input
          id="email"
          placeholder={t("Email")}
          {...register("email")}
          type={"email"}
        />
        {errors.email && <Error msg={errors.email.message as string} />}
        <input
          id="password"
          placeholder={t("Password")}
          type={"password"}
          {...register("password")}
        />
        {errors.password && <Error msg={errors.password.message as string} />}

        <Button
          type="submit"
          variant="primary"
          className="ml-0 mr-auto"
          disabled={isLoading}
        >
          {t("Login")}
        </Button>
      </form>
    </div>
  );
}

export default Login;
