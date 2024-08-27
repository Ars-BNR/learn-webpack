import React from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Image from "@/assets/app-image.svg";
const App = () => {
  const [count, setCount] = React.useState(0);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDescTOP</div>;
  // }
  // if (__PLATFORM__ === "mobile") {
  //   return <div>Mobile</div>;
  // }
  // if (__ENV__ === "development") {
  //   // sfsf
  // }
  return (
    <div data-testid={"App.DataTestId"}>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="" />
        <img width={100} height={100} src={avatarJpg} alt="" />
      </div>
      <div>
        <Image
          style={{ color: "yellow" }}
          width={100}
          height={100}
          fill={"blue"}
        />
      </div>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <h1 className={styles.value}>{count}</h1>
      <button className={styles.button} onClick={inc}>
        inc
      </button>
      <Outlet />
    </div>
  );
};

export default App;
