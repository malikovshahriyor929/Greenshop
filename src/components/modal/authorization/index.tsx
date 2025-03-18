import { Modal } from "antd";

import LogIn from "./login";
import { useState } from "react";
import Register from "./register";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setModalVisibilty } from "../../../redux/modalSlice";

const AuthorixationModal = () => {
  let [check, setCheck] = useState(true);
    let { ModalVisibilty } = useReduxSelector((state) => state.modalSlice);
    let dispatch = useReduxDispatch()
  return (
    <div>
      <Modal footer={false} onCancel={()=>dispatch(setModalVisibilty())} open={ModalVisibilty}>
        <div className="mx-5 flex flex-col gap-4 ">
          <div className="flex items-center justify-center gap-5">
            <p
              onClick={() => setCheck(true)}
              style={{ color: check ? "#46a358" : "#3d3d3d" }}
              className="cursor-pointer  text-[#3d3d3d] text-[20px] font-medium "
            >
              Login
            </p>
            <div className="w-0.5 h-5 bg-black "></div>
            <p
              onClick={() => setCheck(false)}
              style={{ color: !check ? "#46a358" : "#3d3d3d" }}
              className="cursor-pointer  text-[#3d3d3d] text-[20px] font-medium "
            >
              Register
            </p>
          </div>
          {/* login and register */}
          {check ? <LogIn /> : <Register />}
        </div>
      </Modal>
    </div>
  );
};

export default AuthorixationModal;
