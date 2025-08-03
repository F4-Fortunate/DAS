const Chat = () => {
  const handleWhatsAppClick = () => {
    console.log("WhatsApp icon clicked");
    window.open(
      "ttps://wa.me/2348012345678?text=Hi%20there!%20I%20want%20to%20learn%20more%20about%20your%20services.",
      "_blank"
    );
  };
  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "14px",
          borderRadius: "50%",
          fontSize: "24px",
          zIndex: 1000,
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        💬
      </button>

      <div
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          backgroundColor: "white",
          color: "#25D366",
          padding: "8px 12px",
          borderRadius: "12px",
          fontSize: "14px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          zIndex: 999,
        }}
      >
        Chat with us on WhatsApp!
      </div>
    </>
  );
};

export default Chat;
