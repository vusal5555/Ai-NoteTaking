import React from "react";
import { Button, ButtonProps } from "./button";
import { Loader } from "lucide-react";

type LoadingButtonProps = {
  loading: boolean;
} & ButtonProps;

const LoadingButton = ({ children, loading, ...props }: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={props.disabled || loading}>
      {loading && <Loader className="mr-2 h-4 w-4 animate-spin"></Loader>}
      {children}
    </Button>
  );
};

export default LoadingButton;
