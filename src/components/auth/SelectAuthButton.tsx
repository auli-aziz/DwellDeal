import React, { ReactElement } from "react";

const SelectAuthButton = ({
  children,
  handleSelected,
  isSelected,
}: {
  children: string;
  handleSelected: (selected: string) => void;
  isSelected: boolean;
}) => {
  return (
    <button
      className={`text-sm p-2 w-40 rounded-3xl hover:bg-primary hover:text-white ${
        isSelected ? "bg-primary text-white" : "bg-transparent text-primary"
      }`}
      onClick={() => handleSelected(children)}
    >
      {children}
    </button>
  );
};

export default SelectAuthButton;
