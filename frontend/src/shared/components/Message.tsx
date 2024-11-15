import type { ReactNode } from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const Message = ({
  variant,
  children,
  dismissible,
}: {
  variant: "info" | "warning" | "danger" | "success";
  children: ReactNode;
  dismissible: boolean;
}) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <>
        <Alert
          variant={variant}
          onClose={() => setShow(false)}
          dismissible={dismissible}
        >
          {children}
        </Alert>
      </>
    );
  } else {
    return <></>;
  }
};
export default Message;
