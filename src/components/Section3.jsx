import { Card } from "./Cards";

const Section3 = () => {
  return (
    <section className="w-screen min-h-[60vh] flex items-center justify-center bg-[#F0F4F8] px-0 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12">
        {/* Left: Headline and Description */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-[#043873] mb-4">Our Services</h2>
          <p className="text-gray-600 mb-6">
            Explore our range of services designed to help you achieve your business goals.
          </p>
        </div>
        {/* Right: Cards Section */}
        <div className="flex flex-wrap justify-center gap-6">
          <Card
            icon={<i className="fas fa-chart-line text-3xl"></i>}
            heading="Analytics"
            para="Gain insights into your business performance with our analytics services."
            onKnowMore={() => alert("Know more about Analytics")}
          />
          <Card
            icon={<i className="fas fa-cogs text-3xl"></i>}
            heading="Automation"
            para="Streamline your processes with our automation solutions."
            onKnowMore={() => alert("Know more about Automation")}
          />
          <Card
            icon={<i className="fas fa-headset text-3xl"></i>}
            heading="Support"
            para="Get 24/7 support for all your technical needs."
            onKnowMore={() => alert("Know more about Support")}
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;