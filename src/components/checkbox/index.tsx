import { useState } from "react";

const Checkbox = (props: {
  checked?: boolean;
  label?: string;
  extra?: string;
  register?: any;
  color?:
  | "red"
  | "blue"
  [x: string]: any;
}) => {
  const { extra, color, checked, label, register } = props;
  const [checkbox, setCheckbox] = useState<boolean>(false)
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        className={`defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 ${color === "red"
            ? "checked:border-none checked:bg-red-500 dark:checked:bg-red-400"
            : color === "blue"
              ? "checked:border-none checked:bg-gray-500 dark:checked:bg-gray-400"
              : "checked:bg-[#007bff] dark:checked:bg-brand-400"
          } `}
        name="weekly"
      />
      {
        label && <label htmlFor={label} className="select-none cursor-pointer">{label}</label>
      }
    </div>
  );
};

export default Checkbox;
