import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../../assets/images/banner.png";
import styles from "./HeroBanner.module.css";
const HeroBanner = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.text1}>Fitness Club</div>
      <div className={styles.text2}>
      Sweat, Smile <br /> and Repeat
      </div>
      <div className={styles.text3}>
      Check out the most effective exercises
      </div>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>

      <div className={styles.text4}>Exercises</div>

      <img src={HeroBannerImage} alt="banner"  className="hero-banner-img"/>
    </div>
    // <Box
    //   sx={{
    //     mt: { lg: "212px", xs: "70px" },
    //     ml: { sm: "50px" },
    //   }}
    //   position="relative"
    //   p="20px"
    //   backgroundColor="red"
    //   width={"100vw"}
    // >
    //   <Typography color="#ff2625" fontWeight="600" fontSize="26px">
    //     Fitness Club
    //   </Typography>

    //   <Typography
    //     fontWeight={700}
    //     sx={{ fontSize: { lg: "44px", xs: "40px" } }}
    //     mb="23px"
    //     mt="30px"
    //   >
    //     Sweat, Smile <br /> and Repeat
    //   </Typography>

    //   <Typography fontSize="22px" LineHeight="35px" mb={4}>
    //     Check out the most effective exercises
    //   </Typography>

    //   <Button
    //     variant="contained"
    //     color="error"
    //     href="#exercises"
    //     sx={{ backgroundColor: "#ff2625", padding: "10px" }}
    //   >
    //     Explore Exercises
    //   </Button>

    //   <Typography
    //     fontWeight={600}
    //     color="#ff2625"
    //     sx={{
    //       opacity: 0.1,
    //       display: { lg: "block", xs: "none" },
    //     }}
    //     fontSize="200px"
    //   >
    //     Exercises
    //   </Typography>

    //   <img src={HeroBannerImage} alt="banner"  className="hero-banner-img"/>
    // </Box>
  );
};

export default HeroBanner;
