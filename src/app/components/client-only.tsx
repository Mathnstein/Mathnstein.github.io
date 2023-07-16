import React from "react";

/**
 * This is used to override MUI and NextJS naming conflicts on their IDs
 */
const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <React.Fragment {...delegated}>{children}</React.Fragment>;
};

export default ClientOnly;
