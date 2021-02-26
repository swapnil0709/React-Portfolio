const { useEffect } = require("react");
const { useLocation } = require("react-router-dom");

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(
      {
        top: 0,
        left: 0,
      },
      [pathname]
    );
  });
  return null;
};

export default ScrollTop;
