import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from './use-dimensions';
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Botao } from "./Botao";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Header(props: { handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined; buttonName: string }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement | null>(null);
  const { height } = useDimensions(containerRef);

  function clickLogo() {
    window.location.href = "/";
  }

  return (
    <div className="w-[100%] h-[120px] flex justify-center mb-4">
      <div className="w-[90%] h-[120px] flex justify-between items-center">
    
        <button className="h-[80%] aspect-square">
          <img
            src="/assets/logo.png"
            alt="foto"
            className="w-full h-full"
            onClick={clickLogo}
          />
        </button>

       
        <div className="text-xl gap-32 items-center hidden md:hidden xl:flex">
          <div>Quem Somos</div>
          <div>Regras</div>
          <div>Contato</div>
          <div>Documentos</div>
        </div>

       
        <Botao
          onClick={props.handleClick}
          className="w-[140px] h-[50px] rounded-md flex justify-center items-center"
        >
          {props.buttonName}
        </Botao>
        <div className="md:flex xl:hidden">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full"
          >
            <motion.div className="background bg-gray-800" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
      </div>
    </div>
  );
}
