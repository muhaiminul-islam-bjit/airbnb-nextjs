"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";

interface ClinetOnlyProps {
  children: ReactNode;
}
const ClinetOnly: FC<ClinetOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClinetOnly;
