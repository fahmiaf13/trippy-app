import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/authentication/userAction";

const FormLogin = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [navigate, data]);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const payload = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };
    console.log(payload);
    dispatch(userLogin(payload));
  };
  return (
    <div className="container mx-auto h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="md:basis-1/2 lg:basis-1/3 p-8 bg-white mt-5">
          <div className="f-bold text-blue-700 text-2xl text-center mb-5 text-orange">Login</div>
          <form onSubmit={submitHandler}>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange focus:outline-none focus:ring-0 focus:border-orange peer"
                placeholder=" "
                required=""
                ref={emailRef}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange peer-focus:dark:text-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange focus:outline-none focus:ring-0 focus:border-orange peer"
                placeholder=" "
                required=""
                ref={passRef}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange peer-focus:dark:text-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                className="text-white bg-orange hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SUBMIT
              </button>
            </div>
            {/* <button
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
              <FcGoogle />
              Register With Google
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
