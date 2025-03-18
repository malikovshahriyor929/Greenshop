import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalVisibilty } from "../../../redux/modalSlice";
import { notificationApi } from "../../../shared/generics/notification";
import { signWithGoogle } from "../../../configs";
import { notification } from "antd";

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
      dispatch(setModalVisibilty());
      notify("register");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    },
  });
};

export const LoginWithGoogle = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  return useMutation({
    mutationFn: async () => {
      let response = await signWithGoogle();
      // console.log(response.user.email);
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response?.user?.email },
      });
    },
    onSuccess: (data) => {
      dispatch(setModalVisibilty());
      notify("login_with_google");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    },
  });
};
export const RegisterWithGoogle = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  return useMutation({
    mutationFn: async () => {
      let response = await signWithGoogle();
      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response?.user?.email },
      });
    },
    onSuccess: (data) => {
      dispatch(setModalVisibilty());
      notify("register_with_google");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    },
    onError: (error: { status: number }) => {
      if (error?.status == 406) {
        notification.error({ message: "you already registered" });
      }
    },
  });
};
