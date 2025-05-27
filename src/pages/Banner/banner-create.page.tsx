import { Divider, Typography } from "antd"
import Title from "antd/es/typography/Title"
function BannerCreate() {
    return (
    <>
    <Typography className="flex flex-col">
        <div className="flex flex-row justify-between! w-full">
            <Title className="w-full">Banner Create</Title>
    
        </div>
    </Typography>
        <Divider  className="bg-gradient-to-r from-teal-100 from-10% via-teal-300 via-30% to-teal-800 to-90% h-0.5"/>

    </>
  )
}

export default BannerCreate
