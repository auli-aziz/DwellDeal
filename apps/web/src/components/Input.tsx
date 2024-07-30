import React, { forwardRef } from "react";

interface Props {
  title: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input({
  title,
  name,
  type,
  placeholder,
}, ref) {
  return (
    <div className="flex flex-col w-full h-fit font-shanti mb-5">
      <label htmlFor="username" className="mb-2 text-base font-medium">
        {title}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        required
        className="font-regular text-sm rounded-3xl p-3 border-2 border-primary"
      />
    </div>
  );
});

export default Input;
