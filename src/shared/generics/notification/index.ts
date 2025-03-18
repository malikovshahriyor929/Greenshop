import { notification } from "antd";

type notificationApiType = "login" | "register";

export const notificationApi = () => {
  const notify = (type: notificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "you successfuly logined" });

      case "register":
        return notification.success({ message: "you successfuly resgtered" });

      default:
        break;
    }
  };
  return notify;
};
