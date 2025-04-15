
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add event handler to listen for package selection and scroll to contact form
  useEffect(() => {
    const handlePackageClick = (serviceType: string) => {
      // Scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        
        // Send message to select the appropriate service in the form
        // This will be received by the Contact component's event listener
        setTimeout(() => {
          window.postMessage({ serviceType }, "*");
          console.log("Posted message for service:", serviceType);
        }, 1000); // Small delay to ensure the form is loaded
      }
    };

    // Add event listeners to pricing package cards
    const setupPackageButtons = () => {
      const packages = [
        { id: "premium-package", service: "Premium Package" },
        { id: "full-spa-package", service: "Full Spa Package" },
        { id: "ultimate-package", service: "Ultimate Package" }
      ];

      packages.forEach(pkg => {
        const element = document.getElementById(pkg.id);
        if (element) {
          element.addEventListener("click", () => handlePackageClick(pkg.service));
          // Make it look clickable
          element.classList.add("cursor-pointer");
        }
      });
    };

    // Ensure DOM is loaded before attaching listeners
    if (document.readyState === "complete") {
      setupPackageButtons();
    } else {
      window.addEventListener("load", setupPackageButtons);
      // Cleanup
      return () => window.removeEventListener("load", setupPackageButtons);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
