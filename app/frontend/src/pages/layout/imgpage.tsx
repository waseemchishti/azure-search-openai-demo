import styles from "./Layout.module.css";
import architecture from "../../assets/appcomponents.png";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

const Image = () => {
    return (
        <div className={styles.architecture}>
            <img
                src={architecture}
                alt="Veraqor logo"
                aria-label="Architecture"
                // width="4000px"
                // height="4000px"
                className={styles.archimg}
            />
            <div className={styles.btnbox}>
                <button className={styles.backbtn}>Go Back</button>
            </div>
        </div>
    );
};

export default Image;
