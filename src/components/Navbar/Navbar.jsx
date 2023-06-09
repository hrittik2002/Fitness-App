import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../../assets/images/Logo.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" } , mt:{sm:"32px" , xs:"20px"}, justifyContent:"none"}}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className={styles.homeLink}>
          Home
        </Link>
        <a href="#exercises" className={styles.exerciseLink}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
