import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary position-fixed"
        aria-label="Scroll to top"
        style={{
          bottom: "30px",
          right: "30px",
          borderRadius: "50%",
          padding: "10px 14px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;
