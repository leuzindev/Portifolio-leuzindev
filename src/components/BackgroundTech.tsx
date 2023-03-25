import { motion } from "framer-motion";
import { DiReact, DiPython, DiJavascript1 } from "react-icons/di";
import { SiNginx, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export function BackgroundTech(){
    return(
   
        <>
         <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: "100vw", rotate: 360, opacity: 0  }}
            transition={{ duration: 20, repeat: Infinity, delay: 4 }}
            style={{
              position: "absolute",
              top: "30%",
              left: "0%",
            }}
            onUpdate={(values) => {
              if (+values.x > window.innerWidth * 0.7) {
                // Aplica o efeito de fade-in quando o elemento estiver a 70% da largura da tela
                return { opacity: 1 };
              }
            }}
          >
            <DiReact color="white" size={40} />
          </motion.div>
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: "100vw", rotate: 360, opacity: 0 }}
            transition={{
              duration: 13,
              repeat: Infinity,
              delay: 3,
            }}
            style={{
              position: "absolute",
              top: "70%",
              left: "0%",
            }}
            onUpdate={(values) => {
              if (values.x > window.innerWidth * 0.7) {
                // Aplica o efeito de fade-in quando o elemento estiver a 70% da largura da tela
                return { opacity: 1 };
              }
            }}
          >
            <DiPython color="white" size={40} />
          </motion.div>
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: "100vw", y: "-20vh", rotate: 360, opacity: 0  }}
            transition={{ duration: 17, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "40%",
              left: "0%",
            }}
            onUpdate={(values) => {
              if (values.x > window.innerWidth * 0.7) {
                // Aplica o efeito de fade-in quando o elemento estiver a 70% da largura da tela
                return { opacity: 1 };
              }
            }}
          >
            <DiJavascript1 color="white" size={40} />
          </motion.div>
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: "100vw", y: "-40vh", rotate: 360, opacity: 0  }}
            transition={{ duration: 25, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "90%",
              left: "0%",
            }}
            onUpdate={(values) => {
              if (values.x > window.innerWidth * 0.7) {
                // Aplica o efeito de fade-in quando o elemento estiver a 70% da largura da tela
                return { opacity: 1 };
              }
            }}
          >
            <TbBrandNextjs color="white" size={40} />
          </motion.div>
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: "100vw", y: "40vh", rotate: -360, opacity: 0  }}
            transition={{ duration: 30, repeat: Infinity, delay: 1 }}
            style={{
              position: "absolute",
              top: "10%",
              left: "0%",
            }}
            onUpdate={(values) => {
              if (values.x > window.innerWidth * 0.7) {
                // Aplica o efeito de fade-in quando o elemento estiver a 70% da largura da tela
                return { opacity: 1 };
              }
            }}
          >
            <SiNginx color="white" size={30} />
          </motion.div>
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: "100vw", rotate: -360, opacity: 0  }}
            transition={{ duration: 16, repeat: Infinity, delay: 2 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "0%",
            }}
            onUpdate={(values) => {
              if (values.x > window.innerWidth * 0.7) {
                // Aplica o efeito de fade-in quando o elemento estiver a 70% da largura da tela
                return { opacity: 1 };
              }
            }}
          >
            <SiTypescript color="white" size={30} />
          </motion.div>
        </>
    )
}