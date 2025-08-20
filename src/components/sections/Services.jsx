import ServiceCard from "../ui/ServiceCard";
import { FaCode, FaMobile, FaServer, FaChartLine } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs",
      icon: FaCode,
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "Performance Optimization",
        "SEO Best Practices"
      ]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: FaMobile,
      features: [
        "iOS and Android",
        "React Native",
        "User-Friendly UI",
        "Offline Capability"
      ]
    },
    {
      title: "Backend Solutions",
      description: "Scalable and secure backend infrastructure",
      icon: FaServer,
      features: [
        "API Development",
        "Database Design",
        "Cloud Solutions",
        "Security Implementation"
      ]
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning for digital transformation",
      icon: FaChartLine,
      features: [
        "Market Analysis",
        "Technology Consulting",
        "Growth Strategy",
        "Performance Metrics"
      ]
    }
  ];

  return (
    <section id="services" className="w-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 max-sm:text-3xl text-gray-900">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;