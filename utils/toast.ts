import { store } from "react-notifications-component";

const ToastDanger = (title = "Title", message = "Message") => {
  store.addNotification({
    title: title,
    message: message,
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export { ToastDanger };
