//MAIN DATA//
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../../styles/personal/data/data01.module.css";
import data from "../../../../data/teacher.json";
import Button from "components/Button";
//MAIN DATA//

//MUI ICON//
import BadgeIcon from "@mui/icons-material/Badge";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";

function data01() {
  const router = useRouter();
  const { id } = router.query;

  const handlePer = (e) => {
    router.push("/teacher");
  };

  const handleClick = (e) => {
    router.push("/");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={"/img/FSC/Teacher/" + String(id).padStart(2, "0") + ".png"}
            width={210}
            height={210}
            className={styles.img}
          />
        </div>
        <br />
        {/* ประวัติส่วนตัว */}
        <div className={styles.data_header}>
          <BadgeIcon className={styles.icon_header} />
          ประวัติส่วนตัว
        </div>
        <hr className={styles.hr_text} data-content={data[id]?.name} />
        <div className={styles.data_favsay}>
          <InterpreterModeIcon
            style={{ color: "orange" }}
            className={styles.icon}
          />
          คำพูดติดปาก: {data[id]?.fav_say}
        </div>
        <br />
        <br />
        <div className={styles.data_main}>
          <div className={styles.left}>
            <div className={styles.data_name}>
              <span className={styles.iconp}>◈</span> ชื่อ: {data[id]?.name}
            </div>
            <div className={styles.data_gender}>
              <span className={styles.iconp}>◈</span>เพศ: {data[id]?.gender}
            </div>
            <div className={styles.data_blood_type}>
              <span className={styles.iconp}>◈</span>
              กรุ๊ปเลือด: {data[id]?.blood_type}
            </div>
            <div className={styles.data_height}>
              <span className={styles.iconp}>◈</span>สูง: {data[id]?.height}
            </div>
            <div className={styles.data_weight}>
              <span className={styles.iconp}>◈</span>
              น้ำหนัก: {data[id]?.weight}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.data_name}>
              <span className={styles.iconp}>◈</span>อายุ: {data[id]?.old}
            </div>
            <div className={styles.data_gender}>
              <span className={styles.iconp}>◈</span>วันเกิด: {data[id]?.date}
            </div>
            <div className={styles.data_blood_type}>
              <span className={styles.iconp}>◈</span>
              งานอดิเรก: {data[id]?.hobby}
            </div>
            <div className={styles.data_stats_school}>
              <span className={styles.iconp}>◈</span>
              สถานะในโรงเรียน: {data[id]?.stats_school}
            </div>
            <div className={styles.t_room}>
              <span className={styles.iconp}>◈</span>
              เป็นอาจารย์ประจำชั้นห้อง: {data[id]?.t_room}
            </div>
          </div>
        </div>
        <div className={styles.data_dream}>
          <span className={styles.iconp}>◈</span>
          ความฝัน: {data[id]?.dream}
        </div>
        {/* ประวัติส่วนตัว */}
        <br />
        <br />
        {/* ความชอบ/ไม่ชอบ */}
        <div className={styles.data_bottom}>
          <ThumbUpAltIcon
            style={{ color: "lime" }}
            className={styles.icon_header}
          />{" "}
          ความชอบ/
          <ThumbUpAltIcon
            style={{ color: "red" }}
            className={styles.icon_header}
          />
          ไม่ชอบ
        </div>
        <hr className={styles.hr_text} /> <br />
        <div className={styles.data_main}>
          <div className={styles.left}>
            <div className={styles.data_name}>
              <span className={styles.iconp}>◈</span>
              สิ่งที่ชอบ: {data[id]?.fav_thing}
            </div>
            <div className={styles.data_gender}>
              <span className={styles.iconp}>◈</span>
              สิ่งที่ไม่ชอบ: {data[id]?.unfav_thing}
            </div>
            <div className={styles.data_blood_type}>
              <span className={styles.iconp}>◈</span>
              สัตว์ที่ชอบ: {data[id]?.fav_animal}
            </div>
            <div className={styles.t_subject}>
              <span className={styles.iconp}>◈</span>
              วิชาที่สอน: {data[id]?.t_subject}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.data_height}>
              <span className={styles.iconp}>◈</span>
              สีที่ชอบ: {data[id]?.fav_color}
            </div>
            <div className={styles.data_weight}>
              <span className={styles.iconp}>◈</span>
              สีที่ไม่ชอบ: {data[id]?.unfav_color}
              <div className={styles.data_weight}>
                <span className={styles.iconp}>◈</span>
                อาหารที่ชอบ: {data[id]?.fav_food}
              </div>
              <div className={styles.fav_location}>
                <span className={styles.iconp}>◈</span>
                สถานที่ที่ชอบไป: {data[id]?.fav_location}
              </div>
            </div>
          </div>
        </div>
        {/* ความชอบ/ไม่ชอบ */}
        <div className={styles.btn}>
          <div onClick={handleClick}>
            <Button
              link="/"
              icon="/img/home.svg"
              text="กลับไปหน้าแรก"
              layout={"raw"}
            />
          </div>
          <div onClick={handlePer}>
            <Button
              link="/personal"
              icon="/img/diary-rr.svg"
              text="กลับไปก่อนหน้านี้"
              layout={"raw"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default data01;
