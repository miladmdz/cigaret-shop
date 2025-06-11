import React from "react";

function InputField({ label, required = false, ...props }) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={props.id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className="outline-none w-full border border-gray-300 rounded-2xl py-2 px-3"
      />
      <span className="text-sm min-h-[20px] text-red-500"></span>
    </div>
  );
}

export default InputField;
