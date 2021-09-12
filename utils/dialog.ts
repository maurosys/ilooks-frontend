import { store } from "react-notifications-component";

interface AlertParamsProps {
    title: string;
    message: string;
}

export const AlertDanger = ({ title, message }: AlertParamsProps) => {
    store.addNotification({
        title: title,
        message: message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate_animated", "animate_fadeIn"],
        animationOut: ["animate_animated", "animate_fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
        },
    });
};

export const AlertWarning = ({ title, message }: AlertParamsProps) => {
    store.addNotification({
        title: title,
        message: message,
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate_animated", "animate_fadeIn"],
        animationOut: ["animate_animated", "animate_fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
        },
    });
};

export const AlertSuccess = ({ title, message }: AlertParamsProps) => {
    store.addNotification({
        title: title,
        message: message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate_animated", "animate_fadeIn"],
        animationOut: ["animate_animated", "animate_fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
        },
    });
};