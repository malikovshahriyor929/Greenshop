import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalVisibilty } from "../../../redux/modalSlice";
import { notificationApi } from "../../../shared/generics/notification";

export let useLoginMutation = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", body: data, method: "POST" }),
    onSuccess: (data) => {
      console.log(data);
      dispatch(setModalVisibilty());
      notify("login");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    },
  });
};
export const useRegiterMutation = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ method: "POST", url: "user/sign-up", body: data }),
    onSuccess: (data) => {
      console.log(data);
      dispatch(setModalVisibilty())
      notify("register");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    },
  });
};
