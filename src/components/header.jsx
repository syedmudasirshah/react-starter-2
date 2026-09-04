import { logo } from "../assests";
import { icon1 } from "../assests";
import { icon2 } from "../assests";
import { navItems } from "../practice";
import Cta from "./Button";

export default function Header() {
  return (
    <header className="w-full p-10 absolute top-0">
      <div className="flex justify-between items-center gap-5 bg-white py-5 px-10 rounded-full font-medium">
        <a href="">
          <img className="w-36 h-auto" src={logo} alt="logo here" />
        </a>
        <ul className="flex justify-around items-center gap-12 text-base">
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
          <ul className="flex justify-between gap-5">
            <li className="flex items-center text-base">
              <img className="mr-2 w-5 h-5" src={icon1} />
              +68 695 88666
            </li>
            <li className="border rounded-3xl flex items-center justify-center w-10 h-10">
              <img className="w-4 h-4" src={icon2} />
            </li>
            <li>
              <Cta intent="outline" size="medium" className="">
                Add Property
              </Cta>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
