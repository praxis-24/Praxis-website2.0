const Contact = () => {
  return (
    <section id="contact" className="w-screen bg-base-100 py-24">
      <div className="container mx-auto px-4 text-slate-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;