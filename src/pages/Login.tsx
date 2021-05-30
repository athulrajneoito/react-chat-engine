
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../assets/images/index";
import { googleLogin } from "../services/auth.service";
import { useAuth } from "../contexts/auth.context";

const Login = () => {
  const { user }: any = useAuth();

  const loginUser = async () => await googleLogin();

  return (
    <div className="h-screen flex items-center flex-wrap justify-items-center w-screen">
      <div className="w-1/2 text-center">
        <img src={auth} width="500" alt="" className="mx-auto" />
        <h1 className="font-bold text-5xl mt-10">Welcome to My Chat</h1>
      </div>
      <div className="w-1/2 px-20 bg-red-600 h-full flex  items-center justify-items-center">
        <div className="flex flex-col items-center justify-items-center w-full  py-40 ">
          <div
            onClick={() => loginUser()}
            className="bg-white p-5 rounded-lg flex items-center w-full text-center justify-center cursor-pointer hover:bg-red-200"
          >
            <GoogleOutlined></GoogleOutlined>{" "}
            <span className="ml-5">Sign In with google</span>
          </div>
          {user && (
            <div className="mt-3 w-full">
              <div className="inline-flex w-full items-center bg-white leading-none text-green-600 rounded-full p-2 shadow text-teal text-sm">
                <span className="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">
                  Success
                </span>
                <span className="inline-flex px-2">Login Successfull </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
