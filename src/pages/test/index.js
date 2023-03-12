import { React, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/personal.module.css"
import data from "../../../data/personal.json";


function Test() {
    const router = useRouter();

    const handleClick = (e) => {
      router.push("/test/data/" + e);
    };
  return (
    <div className={styles.row}>
      <div className={styles.icon}>
        {data
          ? data.map((index, key) => (
              <div
                className={styles.no1}
                key={key}
                onClick={() => handleClick(key)}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={index.img + String(key).padStart(2, "0") + ".png"}
                  // src={index.img + String(key + 1).padStart(2, "0") + ".jpg"}
                  // teach me : @Br6wnDev //
                  alt="FRIENDSCRAFT MEMBERS"
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
export default Test;
