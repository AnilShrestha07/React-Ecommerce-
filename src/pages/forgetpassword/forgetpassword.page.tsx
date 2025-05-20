import {

  LabelText,
  PasswordInput,

} from "../../components/form/input.component";
import { NavLink } from "react-router";

import logo from "../../assets/images/logo.png"
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

export interface IPassword{
   password : string,
  confirmPassword: string
}
export const ForgetPasswordDTO = Yup.object({
 password: Yup.string()
     .min(6, "Password must be at least 6 characters")
     .required("Password is required"),
   
   confirmPassword: Yup.string()
     .oneOf([Yup.ref("password")], "Passwords must match")
     .required("Please confirm your password"),
})
function ForgetPasswordPage() {
  const {control , handleSubmit, formState:{errors}, reset} = useForm({
defaultValues:{
  password :"",
  confirmPassword:""
} as IPassword,
resolver: yupResolver(ForgetPasswordDTO)
  })

  const submitForm = (data:IPassword)=>{
    console.log(data)
    reset()
  }
  // console.log(errors)
  return (
    <>
         <div className="flex justify-center items-center h-screen w-[90%] mx-auto ">
            


        <div className=" flex overflow-hidden rounded-lg h-auto  md:h-[500px] md:w-[800px] shadow-md">
          <div className=" flex-1 hidden md:flex bg-teal-500 p-4   items-center justify-center flex-col gap-4">
            <img className="rounded-full w-20 h-20" src={logo} alt="logo" />
            <h1 className="text-white font-semibold text-3xl">
              Welcome To Home
            </h1>
            <p className="text-white  text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed error nostrum officiis iusto explicabo optio rem, cumque labore? Placeat minus nulla culpa excepturi molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit, voluptatum ea est incidunt consequatur.</p>
          </div>

          <div className="md:flex-1 py-4 px-4 w-full">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="font-semibold text-3xl mb-4">Register!!!</h1>
              <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 w-full ">
                <div className="flex flex-col gap-1">
                  <LabelText htmlfor="password" label="Password" />
                <PasswordInput
                  name="password"
                control={control}

                  placeholder="Enter your password"
                  errorMsg={errors.password?.message}
                />
                </div>
                 <div className="flex flex-col gap-1">
                  <LabelText htmlfor="confirmPassword" label="ConfirmPassword" />
                <PasswordInput
                  name="confirmPassword"
                control={control}
                    errorMsg={errors.confirmPassword?.message}


                  placeholder="Enter your password"
                />
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

export default ForgetPasswordPage
