import TestimonialCard from "../common/TestimonialCard";

const TestimonialSection = () => {
  const reviews = [
    {
      name: "John Smith",
      role: "CEO, Tech Corp",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exceptional service and results!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Would highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Great team to work with!",
      rating: 5,
    },
  ];

  return (
    <section className="w-screen bg-base-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 max-sm:text-3xl text-base-content">What Our Clients Say</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;