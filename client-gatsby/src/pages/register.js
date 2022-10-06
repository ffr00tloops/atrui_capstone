import * as React from "react"


const RegisterPage = () => {
  return (
    <div className="bg-green-500 lg:h-48 lg:p-48">
        <div className="bg-slate-100 lg:w-6/12  lg:m-auto drop-shadow-2xl lg:rounded-xl border-green-300 mt-32 border-4">
            <div className="p-3 text-center">
                <h1 className="text-5xl mt-6 font-bold">Atrui </h1>
                <hr></hr>

                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-1">
                        <label className="m-auto mt-3 mb-3">Username</label>
                        <input className="p-1 m-auto" placeholder="Type your username" />
                        <label className="m-auto mt-3 mb-3">Confirm Password</label>
                        <input className="p-1 m-auto" placeholder="Type new password password" />
                        <label className="m-auto mt-3 mb-3">Retype Password</label>
                        <input className="p-1 m-auto" placeholder="Confirm password" />
                        <a className="m-auto mt-3 mb-3 text-red-600 text-sm" href="/register">Already have an Account?</a>
                    </div>
                    <div className="grid grid-cols-2 m-auto">
                        <a href="/login" className="bg-green-300 p-2 rounded-xl mt-6 mb-3 font-bold">Login</a>
                        <a href="/register" className="bg-red-600 p-2 rounded-xl  mt-6 mb-3 font-bold">Register</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage

export const Head = () => <title>Register</title>
