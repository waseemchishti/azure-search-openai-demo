import styles from "./Layout.module.css";
import architecture from "../../assets/appcomponents.png";

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
                </div>
                    
  ) }

export default Image;
