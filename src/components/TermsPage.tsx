import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const TermsPage = () => {
  const location = useLocation();

  // Force fresh page load behavior
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.display = "none";
      document.body.offsetHeight;
      document.body.style.display = "";
    }, 10);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleInstagramNav = () => {
    window.open("https://instagram.com/direct/new/", "_blank");
  };

  const termsData = [
    {
      title: "Booking Deposit and Payment",
      content:
        "The Client shall make a booking fee as per contract to retain the Studio/Event date to perform the services specified in the contract. Dotun Ajayi won't be liable to payment of specific location aside the studio.",
    },
    {
      title: "Display",
      content:
        "The client(s) hereby allow(s) the photographer to display any photograph covered by this contract and to generally promote the business in advertising, brochures, magazine articles, websites, sample albums etc.",
    },
    {
      title: "Cancellation",
      content:
        "If the Client shall cancel this Agreement more than six (6) calendar days before the photo shooting day, any booking fee paid to the Photographer shall be refunded in full if Dotun Ajayi is able to re-book the same date. If the Photographer is NOT able to secure another client for the date, or if the cancellation occurs less than six (6) calendar days before the portrait date, the Client forfeits the booking fee.",
    },
    {
      title: "Ideal Timeline",
      content:
        "4-6 weeks after the wedding is considered a professional and client-friendly window",
    },
    {
      title: "Photographic Materials and Copyright",
      content:
        "All photographic materials, such as original negatives, photos, or slides, shall be the exclusive property of the Photographer. The Photographer shall own the copyright in all images created and may use the work for samples, contests, exhibition, advertising and self-promotion. Usage outside the bounds of this agreement will require the Client's consent.",
    },
    {
      title: "Failure to Perform",
      content:
        "If the Photographer cannot perform this Agreement due to a fire or other casualty, strike, or other cause beyond the control of the parties, or due to the Photographer's illness, then the Photographer shall return any funds previously paid to the Client but shall have no further liability with respect to the Agreement.",
    },
    {
      title: "High-Resolution",
      content:
        "Images deliverable in High-Resolution (or known as High-Res) are 300DPI.",
    },
    {
      title: "File Retention",
      content:
        "Dotun Ajayi Studios keeps client files for up to 2 months (online) and 6 months (harddrive) after the photography session, and is not liable for any claims after this period. All client files will be deleted and backups will be purged after this period.",
    },
    {
      title: "Liability",
      content:
        "It is client's responsibility to take care of the children; Dotun Ajayi will not accept any responsibility due to any accident to children or damage to public or private properties during the photo shooting or consultation session.",
    },
    {
      title: "Communication",
      content:
        "All the communications with the Photographer or the Studio shall be made in English and in Writing.",
    },
    {
      title: "Refund Policy",
      content:
        "All payments to Dotun Ajayi Studios are final and non-refundable. This includes booking fees, session payments, and product orders. Refunds will not be issued after services are rendered or files delivered. Exceptions apply only if the Photographer fails to deliver services due to reasons outside the client's control.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 px-4 sm:px-6 lg:px-20 pb-12">
        <div className="max-w-4xl mx-auto py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Terms & Conditions
          </h1>

          <div className="space-y-6 sm:space-y-8">
            {termsData.map((term, index) => (
              <div
                key={index}
                className="rounded-lg p-4 sm:p-6 shadow-lg"
                style={{ backgroundColor: "rgb(44, 14, 168)" }}
              >
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  {term.title}
                </h2>
                <p className="text-white leading-relaxed text-sm sm:text-base">
                  {term.content}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <button
              onClick={handleInstagramNav}
              className="bg-violet-800 text-white font-semibold py-4 px-8 rounded-lg hover:bg-violet-900 transition-colors"
            >
              Make a Reservation
            </button>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
