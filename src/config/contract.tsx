import { IUserDetail } from "../context/auth.context";

export interface IBasicApiDataStr{
    _id: string;
    status: string;
    createdAt: Date | string;
    updatedAt: Date| string;
    createdBy?: IUserDetail;
    updatedBy?:IUserDetail
}

export interface IImageData {
    url: string;
    optimizedUrl: string
}

