import { FC, PropsWithChildren, useState } from "react";
import cls from "classnames";
import styles from "./Modal.module.sass";

const Modal: FC<PropsWithChildren<any>> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div onClick={() => setIsActive((active) => !active)}>
      <div
        className={cls("modal", styles.root, {
          "is-active": isActive,
        })}
      >
        <div className="modal-background"></div>
        <div className="modal-content">{children}</div>
      </div>
      {children}
    </div>
  );
};

export default Modal;
