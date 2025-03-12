import React from "react";

const FormRegister = () => {
  return (
    <div>
      <form action="" className="space-y-6">
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
            placeholder="Jhon Doe"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">Message</span>
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
            placeholder="john.doe@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">Message</span>
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
            <span className="text-red-500 text-sm mt-2">Message</span>
          </div>
        </div>
        <div>
          <label
            htmlFor="ConfirmPassword"
            className="block text-sm font-medium mb-2 text-gray-900  "
          ></label>
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="*******"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-red-500 text-sm mt-2">Message</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
