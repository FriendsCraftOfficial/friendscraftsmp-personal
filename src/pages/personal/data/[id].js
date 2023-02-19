import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/personal/data/data01.module.css";
import data from "../../../../data/personal.json";

function data01() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.data_name}>ประวัติส่วนตัว: {data[id]?.name}</div>
        <div className={styles.data_favsay}>
          คำพูดติดปาก: {data[id]?.fav_say}
        </div>
        <hr
          style={{
            width: "40%",
          }}
        />
        <div className={styles.data_title}></div>
      </div>
    </>
  );
}
export default data01;
