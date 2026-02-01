import { JSX } from "react";

export  interface NavItem {
  name: {
    EN: string;
    AR: string;
  };
  link: string;
  icon?: JSX.Element;
}

export interface CartProps {
  project: {
    id: number;
    img: string;
    title: { EN: string; AR: string };
    description: { EN: string; AR: string };
    link: string;
    category?: "ecommerce" | "webapp" | "portfolio" | "corporate";
    icons?: string[] | undefined;
  };
  index: number;
}