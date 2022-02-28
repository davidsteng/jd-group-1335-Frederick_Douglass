import { useEffect, useState } from "react";
import popupStyles from "./mystyle.module.css";
import PropTypes from "prop-types";
const CustomPopupBigger = (props) => {
  const [show, setShow] = useState(false);
 
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };
 
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
 
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        {/* <h2 style={{fontWeight: 'bold'} , {fontSize: 'xx-large'}}>{props.title}</h2> */}
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};
 
CustomPopupBigger.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopupBigger;
 