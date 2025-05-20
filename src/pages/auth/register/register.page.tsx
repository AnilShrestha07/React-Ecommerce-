import {
  InputType,
  LabelText,
  PasswordInput,
  TextInput,
} from "../../../components/form/input.component";
import { NavLink } from "react-router";

import logo from "../../../assets/images/logo.png"
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

export interface IRegisterdata{
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  phone: string
}

export const RegisterDTO = Yup.object({
  name: Yup.string().required(),
  email:Yup.string().email().required(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

})
function Register() {
  const {control, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
      phone: ""
    } as IRegisterdata,
    resolver: yupResolver(RegisterDTO)
  })
  const submitForm = (data: IRegisterdata)=>{
    console.log(data)

  }
  // console.log(errors)
  return (
    <> 
     <div className="flex justify-center items-center h-screen w-[90%] mx-auto ">
        <div className=" flex overflow-hidden rounded-lg h-auto   md:h-auto md:w-[800px] shadow-md">
          <div className=" flex-1 hidden md:flex bg-teal-500 p-4   items-center justify-center flex-col gap-4">
            <img className="rounded-full w-20 h-20" src={logo} alt="logo" />
            <h1 className="text-white font-semibold text-3xl">
              Welcome To Home
            </h1>
            <p className="text-white  text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed error nostrum officiis iusto explicabo optio rem, cumque labore? Placeat minus nulla culpa excepturi molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit, voluptatum ea est incidunt consequatur.</p>
          </div>

          <div className="md:flex-1 py-4 px-4">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="font-semibold text-3xl mb-4">Register!!!</h1>
              <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 md:gap-1 w-full ">
                <div className="flex flex-col gap-1">
                  <LabelText htmlfor="Fullname" label="FullName" />
                  <TextInput
                    control={control}
                    type={InputType.TEXT}
                    name="name"
                    placeholder="Enter your Name..."
                    errorMsg={errors.name?.message}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <LabelText htmlfor="email" label="Email" />
                  <TextInput
                    control={control}

                    type={InputType.EMAIL}
                    name="email"
                    placeholder="Enter your Email..."
                    errorMsg={errors.email?.message}

                  />
                </div>
                 <div className="flex flex-col gap-1">
                  <LabelText htmlfor="phone" label="Phone no." />
                  <TextInput
                    control={control}
                    type={InputType.TEXT}
                    name="phone"
                    placeholder="Enter your phone no...."
                    errorMsg={errors.phone?.message}

                  />
                </div>
                <div className="flex flex-col gap-1">
                  <LabelText htmlfor="password" label="Password" />
                <PasswordInput
                    control={control}

                  name="password"
                  placeholder="Enter your password"
                    errorMsg={errors.password?.message}

                />
                </div>
                 <div className="flex flex-col gap-1">
                  <LabelText htmlfor="confirmpassword" label="ConfirmPassword" />
                <PasswordInput
                  control={control}
                  name="confirmPassword"
                  placeholder="Enter your password"
                    errorMsg={errors.confirmPassword?.message}

                />
                </div>
              
                <div className="flex justify-end">
                  <NavLink to="/forget-password" className="text-teal-400 text-sm"> Forget Password?</NavLink>
                </div>
                <div>
                  <button type="submit" className="bg-teal-500 py-2 rounded-md font-semibold text-white w-full cursor-pointer hover:scale-99 transition">Submit</button>
                </div>
              </form>
             
            </div>
             <div className=" mt-4">
              <p className="text-sm">Already Have an Account?
                  <NavLink to="/" className="text-teal-400 text-sm"> Login Now</NavLink>
</p>
</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
