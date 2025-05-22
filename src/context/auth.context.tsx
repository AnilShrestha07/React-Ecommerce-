import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import authSvc from "../services/auth.service";

export interface IUserDetail {
  _id: string;
  name: string;
  email: string;
  image: {
    url: string
  };
  address: {
    billing: {
      houseNo: number
      toleName: string
      wardNo: number
      municipalityName: string
      district: string;
      state: string
      _id: string
    };
    shipping: {
      houseNo: number
      toleName: string
      wardNo: number
      municipalityName: string
      district: string
      state: string
      _id: string
    };
  };
  role: string
  gender: string
  dob: string
  phone: number
  status: string
}
export const AuthContext = createContext<{
  loggedInUser: IUserDetail | undefined
  setLoggedInUser: Function;
}>({
  loggedInUser: undefined,
  setLoggedInUser: () => {},
});

export const AuthProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ loggedInUser, setLoggedInUser ] = useState();

  const refreshToken = async()=>{
    try {
        const response = await authSvc.refreshTokenCall();
        setLoggedInUser(response)
    } catch (exception) {
        localStorage.removeItem("_rt_")
    }
  }

  useEffect(() => {
    getLoggedInUser();
  },[]);

  const getLoggedInUser = async () => {
    try {
        let token = localStorage.getItem("_at_") || null; 
        if(token){
            const response = await authSvc.getLoggedInUser()
            setLoggedInUser(response)
        }
    } catch (exception: any) {
            // localStorage.removeItem("_at_")

        if(exception?.error?.message  === 'jwt expired'){
            await refreshToken()
        }
    }finally{
        setLoading(false)
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          loggedInUser: loggedInUser,
          setLoggedInUser: setLoggedInUser
        }}
      >
        {loading ? <>Loading...</> : children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  return {
    loggedInUser,
    setLoggedInUser
  };
};
