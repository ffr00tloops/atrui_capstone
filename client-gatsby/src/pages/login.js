import * as React from "react"


const LoginPage = () => {
  return (
    <div className="bg-green-500 h-48 lg:p-48 ">
        <div className="bg-slate-100 lg:w-6/12 m-auto drop-shadow-2xl lg:rounded-xl">
            <div className="p-3 text-center">
                <h1 className="text-5xl mt-6 font-bold">Atrui </h1>
                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-1">
                        <label className="mr-32 mt-3 mb-3">Username</label>
                        <input className="p-1 m-auto" placeholder="Type your username" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="mr-32 mt-3 mb-3">Password</label>
                        <input className="p-1 m-auto" placeholder="Type your password" />
                    </div>
                    <button className="bg-green-300 p-2 rounded-xl lg:mr-48 lg:ml-48 m-auto mt-6 mb-3 font-bold">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage

export const Head = () => <title>Login</title>
