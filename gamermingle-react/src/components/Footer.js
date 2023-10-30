function Footer() {
  const footerStyles = {
    backgroundColor: "#3b3b58",
    position: "fixed",
    bottom: "0", // Keep the footer at the very bottom
    left: "0", // Align to the left edge
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "0", // Adjust padding
    textAlign: "center", // Center text
    height: "75px",
    fontSize: "12px",
  };

  return (
    <footer style={footerStyles}>
      <div className="footerContainer">
        <span className="text-light">© 2023, GamerMingle LLC.</span>
      </div>
    </footer>
  );
}

export default Footer;
