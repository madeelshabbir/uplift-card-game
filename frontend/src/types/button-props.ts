import React from "react";

export interface ButtonProps {
  inverse?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
