"use client";
import React, { FormEvent, useState } from "react";

const InputBar = ({
  action,
  variable,
  setVariable,
  placeholder,
  handleSubmit,
  isLoading,
}: {
  action: string;
  variable: string;
  setVariable: (variable: string) => void;
  placeholder: string;
  handleSubmit: (event: FormEvent) => void;
  isLoading: boolean;
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVariable(event.target.value);
  };

  return (
    <form className="my-5 flex w-11/12 lg:w-8/12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 border-t-2 border-l-2 border-b-2 border-primary rounded-l-3xl"
        value={variable}
        onChange={onChange}
      />
      <div className="border-b-2 border-primary rounded-r-full font-shanti">
        <button
          type="submit"
          disabled={variable === "" || isLoading}
          className={`py-3 px-5 h-full rounded-r-3xl rounded-bl-3xl button-gradient text-white font-bold ${
            variable === "" ? "" : "hover:bg-gray-900"
          }`}
        >
          {action}
        </button>
      </div>
    </form>
  );
};

export default InputBar;
