import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };
  return (
    <div>
      <div className="flex flex-col w-full bg-white min-h-[screen]">
        <div className="flex gap-4 items-center p-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
            alt=""
            className="w-[42px] h-[42px]"
          />
          <div className="flex gap-4 items-center max-sm:hidden">
            <a href="#" className="text-base text-black underline">
              About
            </a>
            <a href="#" className="text-base text-black underline">
              Contatct us
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center px-10 py-14">
          <div className="text-xs text-center text-black underline">
            Smart Pettition
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-[solidpx] min-w-80"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base text-stone-900">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Value"
                className="flex-1 px-4 py-3 text-base leading-4 bg-white rounded-lg border border-solid border-slate-300 min-w-60 text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base text-stone-900">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Value"
                className="flex-1 px-4 py-3 text-base leading-4 bg-white rounded-lg border border-solid border-slate-300 min-w-60 text-zinc-400"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Link to="/user">
              <button
                type="submit"
                className="flex-1 gap-2 p-3 text-base leading-4 bg-black rounded-lg border-black border-[solidpx] text-neutral-100"
              >
                Log In
              </button>
              </Link>
            </div>
            <a href="#" className="text-base underline text-stone-900">
              Forgot password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
