import banner from "../../assets/images/banenr.jpg"
export default function  Banner(){
    return(
        <>
        <div className="px-4 sm:px-10 lg:px-20 py-3">
            <img className="w-full h-auto object-cover rounded-md" src={banner} alt="banner"/>
        </div>
        </>
    )
}