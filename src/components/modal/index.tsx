import AuthorixationModal from "./authorization";
import { useReduxSelector } from "../../hooks/useRedux";

const ModalForHeader = () => {
  let { ModalVisibilty } = useReduxSelector((state) => state.modalSlice);
  return <div>{ModalVisibilty && <AuthorixationModal />}</div>;
};

export default ModalForHeader;
