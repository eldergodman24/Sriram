import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import TrustedCompanies from '../components/TrustedCompanies';
import FocusProducts from '../components/FocusProducts';
import OmanSoftwareSection from '../components/OmanSoftwareSection';
import AIFeatures from '../components/AIFeatures';
import PromiseSection from '../components/PromiseSection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import BlogTeaser from '../components/BlogTeaser';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
        <Navbar />
             {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Client Logos */}
      <TrustedCompanies />

      {/* Section 3: Focus Products */}
      <FocusProducts />

      {/* Section 4: Product Philosophy */}
      <OmanSoftwareSection />

      {/* Section 5: AI Solutions */}
      <AIFeatures />

      {/* Section 6: Our Promise to Businesses */}
      <PromiseSection />

      {/* Section 7: Testimonials */}
      <Testimonials />

      {/* Section 8: Call to Action */}
      <CallToAction />

      {/* Section 9: Blog Teaser (Optional) */}
      <BlogTeaser />

      {/* Contact Form and Footer */}
      <ContactForm />
      <Footer />
        </div>
    );
}
 
export default Home;