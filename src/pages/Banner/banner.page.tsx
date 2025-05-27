import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Divider, Flex, Table, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title"
import { useState } from "react"
import { NavLink } from "react-router"
import { IBasicApiDataStr, IImageData } from "../../config/contract"

export interface IBannerData extends IBasicApiDataStr{
   _id: string
            title : string
            url: string
            image: IImageData,
            
}

function BannerPage() {
  const columns = [
  {
    title: 'Banner Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Banner Url',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'Banner Image',
    dataIndex: 'image',
    key: 'image',
    render: ((value: IImageData ,row: IBannerData)=>{
      return(
        <>
         <img src={value.optimizedUrl} alt={row.title} className="w-30"/>
        </>
      )
    })
  },
  {
    title: 'Banner Satus',
    dataIndex: 'status',
    key: 'status',
  },
 
  {
    title: '',
    render: ((row: IBannerData )=>{
      return (
        <>
        <div className="flex gap-3">
          <NavLink className={`flex items-center justify-center h-10 w-10 bg-emerald-800! text-white! rounded-full transition hover:bg-emerald-950!` } to={"/admin/banner/" + row._id}>
          <EditOutlined/>
          </NavLink>

           <NavLink className={`flex items-center justify-center h-10 w-10 bg-red-800! text-white! rounded-full transition hover:bg-red-950!` } to={"/admin/banner/" + row._id}>
          <DeleteOutlined/>
          </NavLink>
        </div>
        </>
      )
    })
  },
];
const [data, setData] = useState<Array<IBannerData>>([
        {
            _id: "20bb8b97-5393-4e24-8031-6b4bffeba734",
            title : "Ecom Banner",
            url: "https://google.com",
            status: "inactive",
            image: {
                url: "https://res.cloudinary.com/dzrkcaqd1/image/upload/v1748366796/ecom-api-38/banner/bm5d9tsiu0pyxqzwguag.jpg",
                optimizedUrl: "https://res.cloudinary.com/dzrkcaqd1/image/upload/f_auto,q_80/v1/ecom-api-38/banner/bm5d9tsiu0pyxqzwguag?_a=BAMCkGTG0"
            },
            createdAt: "2025-05-27T17:26:36.758Z",
            updatedAt: "2025-05-27T17:39:11.166Z"
        }
    ],)

  return (
    <>
    <Typography className="flex flex-col">
        <div className="flex flex-row justify-between! w-full">
            <Title className="w-full">Banner Listing</Title>
        <div className="w-full flex justify-end"> 
          <NavLink className="h-10 text-white! bg-teal-600! rounded-md flex items-center justify-center px-3!" to="/admin/banner/create"><PlusOutlined className="me-2"/> Add Banner</NavLink>
        </div>
        </div>
    </Typography>
    <Divider  className="bg-gradient-to-r from-teal-100 from-10% via-teal-300 via-30% to-teal-800 to-90% h-0.5"/>
    <Content>
<Table columns={columns} dataSource={data} bordered size="small"/>;

    </Content>
    </>
  )
}

export default BannerPage
