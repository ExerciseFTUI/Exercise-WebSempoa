import React, { useContext, useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

import { UserContext } from "../../components/Contexts/UserContext"

import sempoaLogo from "../../assets/sempoa-logo.png"
import exerciseLogo from "../../assets/Exercise Logo.png"
import vector from "../../assets/Frame 7 1.svg"
import vectorMobile from "../../assets/Frame 8 2.svg"

const LoginPage = (props) => {
  //Global State
  const { login } = useContext(UserContext)

  const [username, setUsername] = useState("")
  const [pass, setPass] = useState("")
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, pass)
  }

  return (
    <div className="bg-contain bg-no-repeat w-full h-screen py-12 md:py-0 overflow-hidden bg-white">
      <img
        src={exerciseLogo}
        className="absolute bottom-4 right-0"
        alt="Exercise"
      />

      <img
        src={vector}
        alt="Background Vector"
        className="absolute top-0 left-0 h-screen object-cover z-[1] hidden md:block"
      />

      <img
        src={vectorMobile}
        alt="Background Vector"
        className="absolute top-0 left-0 h-screen object-cover z-[1] md:hidden"
      />

      <div className="flex flex-col xl:flex-row items-center xl:justify-around w-full h-screen gap-12 md:pt-12 xl:pt-0">
        <img
          src={sempoaLogo}
          className="lg:h-[240px] md:h-[160px] h-[136px] z-[2]"
          alt="logo"
        />

        <div className="backdrop-blur-sm rounded-2xl min-w-[20rem] min-h-[24rem] sm:w-[26rem] sm:h-[30rem] border-2 border-orange-sempoa shadow-2xl border-solid border-opacity-100 bg-white bg-opacity-95 z-[2]">
          <div className="my-10 space-y-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black text-center font-Montserrat">
              Log In
            </h1>

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
                      e.target.classList.add("border-orange-sempoa", "border-2")
                    } else {
                      e.target.classList.remove(
                        "border-orange-sempoa",
                        "border-2"
                      )
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
                        e.target.classList.add(
                          "border-orange-sempoa",
                          "border-2"
                        )
                      } else {
                        e.target.classList.remove(
                          "border-orange-sempoa",
                          "border-2"
                        )
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="text-3xl absolute bottom-1/4 right-[15%]"
                    onClick={toggle}
                  >
                    {open === false ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="hover:bg-orange-sempoa hover:text-gray-50 bg-gray-50 text-orange-sempoa font-Inter sm:text-xl rounded-full w-10/12 h-[3rem] sm:h-[4rem] border-orange-sempoa shadow-xl border-solid border-2"
                >
                  LOGIN
                </button>
              </div>
            </form>

            <p className="sm:p-1.5 p-1 text-sm text-center font-Montserrat text-gray-800">
              Do not have account?{" "}
              <a
                href="#"
                onClick={() => alert("clicked")}
                className="font-Montserrat text-gray-500 underline underline-offset-2"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
