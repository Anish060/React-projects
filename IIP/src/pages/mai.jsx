import React from 'react'
import { Link } from 'react-router-dom'

function mai() {
  return (
    <div>
    <div className="flex flex-col bg-white min-h-[screen]">
      <div className="flex gap-9 items-center p-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f13a0ea89897aa06d7cb1702529c28ba0314f5a"
          alt=""
        />
        <div className="flex gap-9 items-center max-sm:hidden">
          <div className="text-2xl text-black underline">About</div>
          <div className="text-2xl text-black underline">Contact us</div>
        </div>
      </div>
      <div className="flex flex-col items-center px-2.5 mx-auto mt-10 max-w-[535px]">
        <div className="mb-2.5 text-2xl text-center text-black">
          SMART PETITION
        </div>
        <div className="relative p-16 mx-auto my-0 w-full bg-white rounded-3xl border border-solid border-[black] max-w-[800px] max-sm:p-8">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex gap-10 items-center max-sm:flex-col">
              <div className="flex flex-col gap-4 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d8b4bef737cb7ff5cbce430470872bb0d13693"
                  alt=""
                />
                <Link to="/loginA">
                <div className="px-5 py-2 text-2xl text-white bg-black rounded-2xl">
                  Admin
                </div>
                </Link>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb5e7b576dcc0825b1738f256f49d44b8ac39df"
                  alt=""
                />
                <Link  to="/login">
                <div className="px-5 py-2 text-2xl text-white bg-black rounded-2xl">
                  User
                </div>
                </Link>
              </div>
            </div>
            <div className="text-2xl text-center text-black">
              &quot;Raise Your Voice to Make a Change!&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default mai