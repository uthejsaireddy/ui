import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import LargeDropdown from "components/largeDropdown";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from "store";
import { addUser } from "features/auth/authSlice";
import { LoginUser } from "features/auth/authAction";
import { useNavigate } from "react-router-dom";
import { signIn } from "services/authService";
// import { loginUser } from "features/auth/authAction";

export default function SignIn() {


  const roles = ['Admin', 'Teacher', 'Student']
  const [role, setRole] = useState<String>('--Select-role--')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [userName, setUsername] = useState<String>('')
  const [password, setPassword] = useState<String>('')

  const handleLogin = async () => {
    // if (!userName && !password && !role) alert('fields cant be empty')
    try {
      const res = await signIn({ userName, role: role.toLowerCase(), password, })
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }



  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div> */}
        {/* <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
        {/* Email */}
        <LargeDropdown
          label="I am *"
          extra="mb-3"
          dropdownData={roles}
          selected={role}
          setSelected={setRole}
          id="role"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          setInput={setUsername}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          setInput={setPassword}
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-[#007bff] hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button className="linear mt-2 w-full rounded-xl bg-[#007bff] py-[12px] text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleLogin}>
          Sign In
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-[#007bff] hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
