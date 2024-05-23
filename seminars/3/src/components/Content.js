import React from "react";

const Content = ({ theme }) => {
  const styles = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
      padding: "20px",
      textAlign: "center",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "20px",
      textAlign: "center",
    },
  };

  return (
    <div style={theme === "light" ? styles.light : styles.dark}>
      This is the {theme} theme
    </div>
  );
};

export default Content;
