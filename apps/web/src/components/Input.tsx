import React from "react";

const Input = ({ title, name, type, placeholder }: { title: string, name: string, type: string, placeholder: string }) => {
  return (
    <div className="flex flex-col w-full h-fit font-shanti mb-5">
      <label htmlFor="username" className="mb-2 text-base font-medium">
        {title}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="font-regular text-sm rounded-3xl p-3 border-2 border-primary"
      />
    </div>
  );
};

export default Input;
