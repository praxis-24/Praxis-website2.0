import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, role, text, rating }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex mb-6">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-blue-600 w-5 h-5" />
        ))}
      </div>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">{text}</p>
      <div className="mt-4">
        <p className="font-bold text-gray-900 text-lg">{name}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;