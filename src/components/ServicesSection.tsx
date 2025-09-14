
import { Camera, Target, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      //icon: <Star className="w-8 h-8 icon" />,
      img: Star,
      title: "Professional Editing",
      description:
        "Enhancing every shot with expert precision for a flawless finish.",
    },
    {
      //icon: <Target className="w-8 h-8 icon" />,
      img: Target,
      title: "Long hour shoots",
      description: "Dedicated to capturing every moment for you.",
    },
    {
      //icon: <Camera className="w-auto h-14 mt-2 mb-3 icon" />,
      img: Camera,
      title: "Extensive Equipments",
      description: "Equipped with the best tools to bring your vision to life.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-left sm:text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          <span className="block sm:hidden">Why Choose us?</span>
          <span className="hidden sm:block">Why Choose us?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-left sm:text-center space-y-4">
              <div className="flex justify-start sm:justify-center items-center">
                <service.img className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
