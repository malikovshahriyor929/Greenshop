import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import {
  setModalVisibilty,
  setModalVisibiltyForOrder,
} from "../../../redux/modalSlice";
import { notificationApi } from "../../../shared/generics/notification";
import { signWithGoogle } from "../../../configs";
import { message, notification } from "antd";
import CookiesInfo from "../../../shared/generics/cookie";
import Cookies from "js-cookie";
let logOut = () => {
  localStorage.removeItem("token");
  Cookies.remove("user");
};
export const useLoginMutation = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  let { setCookie } = CookiesInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", body: data, method: "POST" }),
    onSuccess: (data) => {
      dispatch(setModalVisibilty());
      notify("login");
      localStorage.setItem("token", data.data.token);
      setCookie("user", data.data.user);
      window.location.reload();
    },
  });
};
export const useRegiterMutation = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  let { setCookie } = CookiesInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ method: "POST", url: "user/sign-up", body: data }),
    onSuccess: (data) => {
      dispatch(setModalVisibilty());
      notify("register");
      localStorage.setItem("token", data.data.token);
      setCookie("user", data.data.user);
      window.location.reload();
    },
  });
};

export const LoginWithGoogle = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  // let notify = notificationApi();
  // let { setCookie } = CookiesInfo();
  return useMutation({
    mutationFn: async () => {
      let response = await signWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response?.user?.email },
      });
    },
    onSuccess: () => {
      dispatch(setModalVisibilty());
      // notify("login_with_google");
      // localStorage.setItem("token", data.data.token);
      // setCookie("user", data.data.user);
      notification.warning({
        message: "Warning",
        description: "Google is not working ",
      });
      window.location.reload();
    },
    onError: () => {
      notification.warning({
        message: "Warning",
        description: "Please enter your email",
      });
      logOut()
      window.location.reload()

    },
  });
};
export const RegisterWithGoogle = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  let notify = notificationApi();
  // let { setCookie } = CookiesInfo();
  return useMutation({
    mutationFn: async () => {
      let response = await signWithGoogle();
      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response?.user?.email },
      });
    },
    onSuccess: () => {
      dispatch(setModalVisibilty());
      notify("register_with_google");
      // localStorage.setItem("token", data.data.token);
      // setCookie("user", data.data.user);
      window.location.reload();
    },
    onError: (error: { status: number }) => {
      notification.warning({
        message: "Warning",
        description: "Please enter your email",
      });
      logOut()
      window.location.reload()

      if (error?.status == 406) {
        notification.error({ message: "you already registered" });
      }
    },
  });
};

export const orderDataMutation = () => {
  let axios = useAxios();
  let dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "order/make-order",
        body: data,
        method: "POST",
      }),
    onSuccess: () => {
      dispatch(setModalVisibiltyForOrder());
      message.success("Order placed successfully!");
    },
  });
};

export const BlogView = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "user/blog/view",
        method: "PUT",
        body: data,
      }),
  });
};

export const AccountDetails = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        method: "POST",
        body: data,
        url: "user/account-details",
      }),
    onSuccess(data) {
      message.success(data.message);
    },
  });
};
export const AddressMutation = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        method: "POST",
        body: data,
        url: "user/address",
      }),
    onSuccess(data) {
      message.success(data?.message);
    },
  });
};

export const DeleteOrderMutaion = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "order/delete-order",
        method: "POST",
        body: data,
      }),
    onSuccess: () => {
      // console.log(data);
    },
  });
};

export const Create_Wishlist = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        method: "POST",
        body: data,
        url: "user/create-wishlist",
      }),
    onSuccess(data) {
      message.success(`${data?.message} added`);
    },
  });
};

export const Delete_Wishlist_Mutation = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        method: "DELETE",
        body: data,
        url: "user/delete-wishlist",
      }),
    onSuccess(data) {
      message.success(`${data?.message} deleted`);
    },
  });
};
export const Join_NewsMutation = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "features/email-subscribe",
        method: "POST",
        body: data,
      }),
    onSuccess(data) {
      message.success(data.message);
    },
  });
};

export const FollowMutation = () => {
  let axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "user/follow",
        method: "POST",
        body: data,
      }),
    onSuccess: (data) => {
      console.log(data);
      message.success(data?.message);
    },
  });
};
