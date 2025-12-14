import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "preact/hooks";

export function FadeTransition({ show, children }) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    } else {
      const timeout = setTimeout(() => setRender(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!render) return null;

  return (
    <Box
      opacity={show ? 1 : 0}
      transition="opacity 0.2s ease"
    >
      {children}
    </Box>
  );
}
