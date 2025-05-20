
type Icon = {
  icons: React.ReactNode;
  title: string
  bg: string
};
function DashboardCard({icons, title, bg}: Icon) {
  return (
    <>
        <div className= {` flex flex-1 shadow  rounded-md p-2 items-center justify-center ${bg}`}>
        <div className="flex-1/3 text-5xl  p-4 text-white">
        {icons}
        </div>
        <div className=" flex flex-2/3 flex-col ">
        <div className="flex-1  font-semibold py-2 px-4">
            <h2 className="text-lg text-white">{title}</h2>
            <p className="text-sm text-gray-500 text-white">Last 30 days</p>
        </div>
        <div className="flex-1  font-semibold py-2 px-4">
            
            <h2 className="text-lg text-white">Rs 200000</h2>

        </div>
        </div>
    </div>
    </>
  )
}

export default DashboardCard
