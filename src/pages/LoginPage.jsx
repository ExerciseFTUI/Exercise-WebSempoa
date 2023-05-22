import React, { useState } from "react";
import sempoaLogo from "../assets/sempoa-logo.png";
import exerciseLogo from "../assets/Exercise Logo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <div className="sm:bg-login-pattern bg-login-pattern-mobile bg-contain bg-no-repeat w-full h-screen bg-[#FAFAFA]">
      <img src={exerciseLogo} className="absolute bottom-4 right-0" alt="Exercise" />
      <div className="flex flex-col md:flex-row items-center md:justify-around mx-auto h-screen">
        <img src={sempoaLogo} className="lg:h-[320px] md:h-[200px] h-[136px]" alt="logo" />
        <div className="sm:mr-24 backdrop-blur-sm rounded-2xl min-w-[20rem] min-h-[24rem] sm:w-[26rem] sm:h-[30rem] border-2 border-orange-sempoa shadow-2xl border-solid border-opacity-100">
          <div className="my-10 space-y-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black text-center font-Montserrat">Log In</h1>
            <form className="space-y-4" action="#" onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="placeholder:text-lg placeholder:sm:text-xl hover:border-black hover:border-2 bg-gray-50 border border-gray-300 text-gray-900 font-Inter px-5 sm:px-8 sm:text-xl rounded-full w-10/12 h-[3rem] sm:h-[4rem] p-2.5 focus:placeholder-transparent focus:outline-none focus:border-orange-sempoa focus:border-2"
                  placeholder="Username"
                  required=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.target.value !== "") {
                      e.target.classList.add("border-orange-sempoa", "border-2");
                    } else {
                      e.target.classList.remove("border-orange-sempoa", "border-2");
                    }
                  }}
                />
              </div>

              <div>
                <div className="relative flex justify-center">
                  <input
                    type={open === false ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="placeholder:text-lg placeholder:sm:text-xl hover:border-black hover:border-2 bg-gray-50 border border-gray-300 text-gray-900 font-Inter px-5 sm:px-8 sm:text-xl rounded-full w-10/12 h-[3rem] sm:h-[4rem] p-2.5 focus:placeholder-transparent focus:outline-none focus:border-orange-sempoa focus:border-2"
                    required=""
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.target.value !== "") {
                        e.target.classList.add("border-orange-sempoa", "border-2");
                      } else {
                        e.target.classList.remove("border-orange-sempoa", "border-2");
                      }
                    }}
                  />
                  <button type="button" className="text-3xl absolute bottom-1/4 right-[15%]" onClick={toggle}>
                    {open === false ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button type="submit" className="hover:bg-orange-sempoa hover:text-gray-50 bg-gray-50 text-orange-sempoa font-Inter sm:text-xl rounded-full w-10/12 h-[3rem] sm:h-[4rem] border-orange-sempoa shadow-xl border-solid border-2">
                  LOGIN
                </button>
              </div>
            </form>
            <p className="sm:p-1.5 p-1 text-sm text-center font-Montserrat text-gray-500">
              Do not have account?{" "}
              <a href="#" onClick={() => alert("clicked")} className="font-Montserrat text-[#FB9E23] hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
