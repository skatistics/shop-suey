
import React, {useState} from "react";
import LoginModal from "./LoginModal";
import { openModal } from "./LoginModal";

export function TempPage (){
    return (
        <div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl font-semibold mb-7 text-white">
                Temporary Page </h1>
                <button onClick={()=>openModal('login-modal')} className="bg-blue-200 py-2 px-4 rounded text-xl text-white mr-4">
                    Login
                </button>

            </div>
            <LoginModal id="login-modal">
            <h1 className="text-2xl font-semibold mb-7 text-white"> Login </h1>
            <form className="w-[450px]">
                <div>
                    <input className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none" type="email" placeholder="Enter user"/>
                </div>

                <div>
                    <input className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none" type="password" placeholder="Password"/>
                </div>
            </form>
            <button className="w-full text-white py-2 px-4 rounded text-[15px] bg-blue-600">
                Login to your account
            </button>
            </LoginModal>
        </div>
    );
}
export default TempPage;