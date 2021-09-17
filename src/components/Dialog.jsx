import React from "react";
import styles from "./../styles/dialog.module.css";
const Dialog = ({ title = "some titlw", handleClose, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.dialogbox}>
        <div className={styles.DialogHeading}>
          <div>
            <p>{title}</p>
          </div>
          <div>
            <button onClick={handleClose} className={styles.btn}>
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};

export default Dialog;
