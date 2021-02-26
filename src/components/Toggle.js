// Reusable component
import React, { useState } from "react";
import { motion } from "framer-motion";
const Toggle = ({ children, title }) => {
  // Children gets the whole elements inside the Toggle component in FAQ section
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
