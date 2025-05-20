
import DashboardCard from "../../components/dashboard/dashboard.card"
import {FaCartShopping, FaDollarSign, FaSitemap, FaUserGroup} from "react-icons/fa6"


function Dashboard() {
  return (
   <>
   <h1 className="text-2xl font-semibold">DASHBOARD</h1>

   <div className="flex gap-4 flex-wrap ">
     <DashboardCard icons={<FaDollarSign />} title="Total Revenue" bg="bg-teal-800" />
     <DashboardCard icons={<FaCartShopping />} title="Total Sales" bg="bg-red-800"/>
     <DashboardCard icons={<FaSitemap />} title = "Total Profit" bg="bg-pink-800"/>
     <DashboardCard icons={<FaUserGroup />} title="Total Users" bg="bg-blue-800"/>

    
   </div>
   </>
  )
}

export default Dashboard
