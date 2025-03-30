import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
    };

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <div className='border-[2px] shadow-md px-8 py-5 rounded-xl text-white'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-100"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                SignUp
              </button>
              <p>
                Have Account?{" "}
                <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
