import { logo } from "../assests";
import { icon1 } from "../assests";
import { icon2 } from "../assests";
import { navItems } from "../practice";

export default function Header() {
  return (
    <header className="w-full p-5 bg-gray-400">
      <div className="flex justify-between items-center gap-5">
        <a href="">
          <img src={logo} alt="logo here" />
        </a>
        <ul className="flex justify-center items-center gap-5">
          {navItems.map((items) => (
            <li key={items.id}>
              <a href={items.link}>
                {items.name}
                {items.icon && (
                  <span className="ml-1 align-middle">{items.icon}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <ul className="flex">
            <li className="flex items-center">
              <img className="mr-2" src={icon1} />
              +68 695 88666
            </li>
            <li className="ml-2 border px-2.25 py-2 rounded-3xl">
              <img className="" src={icon2} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
