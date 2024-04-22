import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contects/AuthProvider";
import googleLogo from "../../../assets/google-logo.svg"


const Signup = () => {

  const { createUser ,loginwithGoogle} = useContext(AuthContext);
  const [error, setError] = useState(null); // Set initial error state to null
  const location=useLocation()
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("sign successfull")
        navigate(from,{replace:true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage); // Set error message when signup fails
      });
  };


  // sign uop using google accout
  const handleRegister=()=>{
    loginwithGoogle().then((result)=>{
      const user=result.user;
      alert("sign up succesfull !")
      navigate(from,{replace:true})

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage); // Set error message when signup fails
    });
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSignUp}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message if there's any */}
            <p>
              if you have an account.please{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>{" "}
              Here
            </p>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <hr></hr>
            <div className="flex items-center w-full flex-col mt-5 gap-5">
            <button onClick={handleRegister} className="block"> <img src={googleLogo} alt="image" className="w-12 h-12 inline-block"/>Login with Google</button>
            </div>
          
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
