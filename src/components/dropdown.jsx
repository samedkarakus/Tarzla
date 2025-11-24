import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Dropdown = ({ label, options, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-3 py-2 bg-transparent text-gray-700 text-sm"
      >
        {selected || label}
        <ChevronDownIcon className="w-4 h-4 ml-2 opacity-60" />
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-full bg-white shadow z-20">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onSelect(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;