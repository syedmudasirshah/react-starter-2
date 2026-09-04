import { cva } from "class-variance-authority";

const cta = cva("block rounded-4xl border-1", {
  variants: {
    intent: {
      primary: "bg-primary text-white border-transparent ",
      outline: "bg-white text-gray-800 border-black",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-6",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Cta({ className, intent, size, children, ...props }) {
  return (
    <a className={cta({ intent, size, className })} {...props} href="">
      {children}
    </a>
  );
}
