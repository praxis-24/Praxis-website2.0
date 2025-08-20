const About = () => {
  return (
    <section id="about" className="w-screen bg-base-100 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="bg-base-200 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-base-content/50">Company Image</span>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Praxis</h2>
            <p className="text-lg text-base-content/80">
              We are a passionate team of digital innovators, dedicated to transforming ideas into powerful digital solutions. With years of experience and a commitment to excellence, we help businesses navigate the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">150+</h3>
                <p className="text-base-content/70">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-base-content/70">Team Members</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-base-content/70">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">99%</h3>
                <p className="text-base-content/70">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;