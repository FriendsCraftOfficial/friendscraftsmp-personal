import data from "../../data/personal.json";
import { React, useState } from "react";
import styles from "@/styles/personal.module.css"

function Personal() {
    const [widgetmenu, setwidgetmenu] = useState(false);
    const [profile, setProfile] = useState("");
    const handleclose = () => {
      setwidgetmenu(false);
    };
  
    const setDialogData = (e) => {
      setProfile(e);
      setwidgetmenu(true);
    };
  return (
    <div className={styles.row}>
      <div className={styles.icon}>
        {data
          ? data.map((index, key) => (
              <div
                className={styles.no1}
                key={key}
                onClick={() => setDialogData(index)}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={index.img + String(key).padStart(2, "0") + ".jpg"}
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
export default Personal;
