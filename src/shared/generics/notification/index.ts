import { notification } from "antd";

type notificationApiType =
  | "login"
  | "register"
  | "login_with_google"
  | "register_with_google";

export const notificationApi = () => {
  const notify = (type: notificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "you successfuly logined" });

      case "register":
        return notification.success({ message: "you successfuly resgtered" });
      case "login_with_google":
        return notification.success({
          message: "you successfuly login with google",
        });
      case "register_with_google":
        return notification.success({
          message: "you successfuly register with google",
        });

      default:
        break;
    }
  };
  return notify;
};
