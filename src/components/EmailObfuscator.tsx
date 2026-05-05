"use client";

import { useEffect, useState } from "react";

interface EmailObfuscatorProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EmailObfuscator({ email, className, children }: EmailObfuscatorProps) {
  const [displayEmail, setDisplayEmail] = useState("");

  useEffect(() => {
    setDisplayEmail(email);
  }, [email]);

  if (!displayEmail) return <span className={className}>...</span>;

  return (
    <a href={`mailto:${displayEmail}`} className={className}>
      {children || displayEmail}
    </a>
  );
}
