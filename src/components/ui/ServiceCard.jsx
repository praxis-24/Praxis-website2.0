import { FaCheckCircle } from "react-icons/fa";

const ServiceCard = ({ title, description, features, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center mb-6">
        {Icon && <Icon className="text-blue-600 text-3xl mr-3 group-hover:scale-110 transition-transform" />}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-8 text-lg">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-blue-600 mt-1.5 mr-3 group-hover:scale-110 transition-transform" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;