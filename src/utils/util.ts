export const handleWhatsAppNav = () => {
  const phoneNumber = "+2349027104215";
  const message =
    "Hi there!!! Mr Dotun Ajayi. \nI would like to learn more about your services.";
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};



  export const handleInstagramNav = () => {
    window.open("https://instagram.com/dotunajayistudios", "_blank");
  };