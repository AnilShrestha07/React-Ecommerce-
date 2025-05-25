import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import {
  InputType,
  LabelText,
  PasswordInput,
  TextInput,
} from "../../../components/form/input.component";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

import authSvc from "../../../services/auth.service";
import { toast } from 'react-toastify';
import { useAuth } from "../../../context/auth.context";




function WelcomeMessage() {
  const [pageContent] = useState<string>(
    "We're so glad  you're here. Explore our collection of [mention top categories or products briefly], enjoy exclusive deals, and experience seamless shopping. Need help? Our team is just a click away!"
  );

  // useEffect(() => {
  //   console.log("i am always execute on any state changes");
  // });

  // useEffect(() => {
  //   console.log("i will execute only once when the component first render");
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "i will only execute, when there is any change on pageContent "
  //   );
  // }, [pageContent]);

  return (
    <>
      <p className="text-white text-sm font-semibold  text-justify">
        {" "}
        {pageContent}
      </p>
    </>
  );
}
export interface ICredentials{
  email: string,
  password: string
}
const LoginDTO = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
})

function Login() {

  const {loggedInUser, setLoggedInUser} = useAuth()
  // console.log(loggedInUser)
  const navigate = useNavigate();

 const {control, handleSubmit, formState: {errors}, reset} = useForm({
  defaultValues:{
    email: "",
    password: ""
  } as ICredentials,
  resolver: yupResolver(LoginDTO)
 })

 const submitForm = async (data:ICredentials )=>{
  try{

      const response = await authSvc.login(data)

      toast.success(`welcome to ${response.role} panel!!!`)
      setLoggedInUser(response)
      navigate(`/${response.role}`)
      // console.log(response)
  } catch(exception: any){
    console.error(exception)
    toast.error(exception.error.message)
  }
  // reset()
  // navigate("/home")
  
 }

 useEffect(()=>{
  const token = localStorage.getItem("_at_")
  if(token && loggedInUser){
    navigate("/" + loggedInUser.role)
  } 
 },[])
//  console.log(errors)

  return (
    <>
      <div className="flex justify-center items-center h-screen w-[90%] mx-auto ">
        <div className=" flex overflow-hidden rounded-lg h-auto   md:h-[500px] md:w-[800px] shadow-md">
          <div className=" flex-1 hidden md:flex bg-teal-500 p-4   items-center justify-center flex-col gap-4">
            <img className="rounded-full w-20 h-20" src={logo} alt="logo" />
            <h1 className="text-white font-semibold text-3xl">
              Welcome To Home
            </h1>
            <WelcomeMessage />
          </div>

          <div className="md:flex-1 py-4 px-4">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="font-semibold text-3xl mb-4">Sign In!!!</h1>
              <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <LabelText htmlfor="email" label="Username" />
                  <TextInput
                    control={control}
                    type={InputType.EMAIL}
                    name="email"
                    placeholder="Enter your Email"
                    errorMsg= {errors.email?.message}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <LabelText htmlfor="password" label="Password" />
                  <PasswordInput
                    control={control}
                    name="password"
                    placeholder="Enter your password"
                    errorMsg= {errors.password?.message}

                  />
                </div>
                <div className="flex justify-end">
                  <NavLink
                    to="/forget-password"
                    className="text-teal-400 text-sm"
                  >
                    {" "}
                    Forget Password?
                  </NavLink>
                </div>
                <div>
                  <button type="submit" className="bg-teal-500 py-2 rounded-md font-semibold text-white w-full cursor-pointer hover:scale-99 transition">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                Don't Have an Account?
                <NavLink to="/register" className="text-teal-400 text-sm">
                  {" "}
                  Register Now
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
