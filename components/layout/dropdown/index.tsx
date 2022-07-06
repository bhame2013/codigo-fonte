import { useState } from "react";

interface DropdownProps {
  title: string;
  children?: React.ReactNode;
}

export function Dropdown({ title, children }: DropdownProps) {
  const [drop, setDrop] = useState(false);

  return (
    <div className="dropdown">
      <div className="father" onClick={() => setDrop(!drop)}>
        <svg
          fill="none"
          height="10"
          viewBox="0 0 6 10"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
          style={{transform: drop ? "rotate(90deg)" : "rotate(0deg)"}}
        >
          <path
            d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
            stroke="#999"
            stroke-linecap="square"
          ></path>
        </svg>

        <span>{title}</span>
      </div>

      <ul style={{display: drop ? "block" : "none"}}>{children}</ul>
    </div>
  );
}
