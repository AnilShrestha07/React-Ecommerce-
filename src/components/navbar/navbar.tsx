import logo from "../../assets/images/logo.png"
export default function NavBar(props: {title:string}){
    return(
        <>
        <div className=" flex justify-between w-full h-15  items-center px-4 sm:px-10 lg:px-20 py-3 border-b border-gray-100">
            
            <div className="flex gap-1 ">
                <img src={logo} className="h-10 rounded-full " alt="logo"/>
                <h1 className=" mt-1 font-semibold text-2xl">{props.title}</h1>
            </div>
            <div >
                <div className="md:hidden text-white"><h1>X</h1></div>
                <ul className=" gap-8 hidden md:flex">
                    <li className="font-semibold hover:text-teal-600"><a href="#">Home</a></li>
                    <li className="font-semibold hover:text-teal-600"><a href="#">Products</a></li>
                    <li className="font-semibold hover:text-teal-600"><a href="#">Categories</a></li>
                    <li className="font-semibold hover:text-teal-600"><a href="#">Cart</a></li>
                    <li className="font-semibold hover:text-teal-600"><a href="#">SignUp</a></li>

                    

                    

                </ul>
            
            </div>
        </div>
        </>
    )
}