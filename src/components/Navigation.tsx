import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = ["Quem Somos", "Regras", "Contato", "Documentos"];

export const Navigation = () => (
  <motion.ul variants={variants} className="flex flex-col items-start p-6">
    {menuItems.map((text, i) => (
      <MenuItem text={text} key={i} />
    ))}
  </motion.ul>
);
