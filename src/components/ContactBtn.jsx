import Component from "../images/Vector 1.svg";

const ToInstagram = () => {
  const handleInstagramNav = () => {
    // Replace with actual Instagram DM link
    window.open("https://instagram.com/direct/new/", "_blank");
  };
  return (
    <button
      onClick={handleInstagramNav}
      className="gitBtn bg-white flex items-center align-middle gap-3 text-violet-800 hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-colors max-w-48 h-12 sm:h-14"
    >
      <span className="hidden sm:inline">Get In Touch</span>
      <span className="sm:hidden">Contact</span>
      <img
        src={Component}
        alt="Instagram"
        className="gitBtnIcon w-4 h-4 bg-violet-800 p-1 rounded-full"
      />
    </button>
  );
};

const ToWhatsapp = () => {
  const handleWhatsAppNav = () => {
    // Replace with actual WhatsApp business number
    const phoneNumber = "+1234567890"; // Replace with actual business number
    const message = "Hello! I'm interested in your photography services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <button
      onClick={handleWhatsAppNav}
      className="gitBtn bg-white flex items-center align-middle gap-3 text-violet-800 hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-colors max-w-48 h-12 sm:h-14"
    >
      <span className="hidden sm:inline">Get In Touch</span>
      <span className="sm:hidden">Contact</span>
      <img
        src={Component}
        alt="WhatsApp"
        className="gitBtnIcon w-4 h-4 bg-violet-800 p-1 rounded-full"
      />
    </button>
  );
};

export { ToInstagram, ToWhatsapp };
