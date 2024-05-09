import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}

              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div>
                <div className="my-4">
                  <span>Email</span>
                  <br />
                  <input
                    className="py-1 px-3 mt-2 rounded-md outline-none"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      email is required
                    </span>
                  )}
                </div>
                <div>
                  <span>Password</span>
                  <br />
                  <input
                    className="py-1 px-3 mt-2 rounded-md outline-none"
                    type="password"
                    name="email"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      password is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <button className="bg-pink-500 text-white py-1 px-2 rounded-md mt-5 ml-1">
                    Log In
                  </button>
                </div>
                <div className="mt-5">
                  <p>
                    Not register?
                    <Link to={"/signup"} className="text-blue-500 underline">
                      {" "}
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
