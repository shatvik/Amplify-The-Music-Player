"use client";

import Box from "@/components/Box";
import { useEffect, useState } from "react";

const Error = () => {
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowError(true);
    }, 5000);
  }, []);
  return (
    <>
      {showError ? (
        <Box className="h-full flex items-center justify-center">
          <div className="text-neutral-400">
            Unable to search ! Sorry We are facing some trouble on server side
            will be right back
          </div>
        </Box>
      ) : null}
    </>
  );
};

export default Error;
