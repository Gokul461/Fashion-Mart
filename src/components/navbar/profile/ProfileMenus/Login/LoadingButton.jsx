import React from "react";
import { Button, CircularProgress } from "@mui/material";

const Loadingbtn = ({
  children,
  color,
  variant,
  isLoading = false,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={className}
      disabled={disabled || isLoading}
      type={type}
      startIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : null}
    >
      {isLoading ? "" : children}
    </Button>
  );
};

export default Loadingbtn;
