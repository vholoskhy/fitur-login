"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUpCredentials } from "@/lib/actions";

const FormRegister = () => {
  const [state, formAction] = useActionState(signUpCredentials, null);
  return (
    <div>
      <form action={formAction} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-gray-900  "
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Vholoskhy"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">
              {state?.error?.name}
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-gray-900  "
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="vholoskhy@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">
              {state?.error?.email}
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2 text-gray-900  "
          >
            Pasword
          </label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">
              {state?.error?.password}
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="ConfirmPassword"
            className="block text-sm font-medium mb-2 text-gray-900  "
          >
            comfirm password
          </label>
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="*******"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">
              {state?.error?.confirmPassword}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="text-md w-full bg-[#3E5879] rounded-lg px-5 text-white py-2.5 text-center uppercase font-medium hover:bg-[#213555]"
        >
          Register
        </button>
        <p className="text-sm font-light text-gray-800 ">
          already have an account ?
          <Link href="/login">
            <span className="font-medium pl-1 text-blue-500 hover:text-blue-800 ">
              Sigh In
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
