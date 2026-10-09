import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "motion/react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <motion.main
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <AppRoutes />
      </motion.main>
      <Footer />
    </Router>
  );
}

export default App;
