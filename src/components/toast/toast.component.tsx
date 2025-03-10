import { ReactElement } from "react";
import { Zoom, ToastContainer, ToastContainerProps } from "react-toastify";

type Props = Partial<ToastContainerProps>;

export default function ToastComponent(props: Props): ReactElement {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Zoom}
      {...props}
    />
  );
}
