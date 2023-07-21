"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const services = [
    {
      title: "Enterprise Software Development",
      description:
        "Skeletos understands that technology is just a tool. People buy tools, but do not necessarily re-engineer the business cycle. Our team of techno-functional engineers help you build customized enterprise software such as ERP, CRM, HRMS,lead management solutions, business process automation,mobile applications, and enterprise integration platform.",
      illustration: "/images/hero-section-layer.svg", // Replace with the path to your illustration image
    },
    // Add details for the remaining services
    {
      title: "Staff Augmentation",
      description:
        "Regain Business Momentum. Skeletos helps you hire certified and trained IT professionals so you become quickly effective. Reliability, domain-expertise, performance and strong ethics are the innate qualities they all possess. We collaboratively work with you to ensure their effectiveness.",
      illustration: "/images/hero-section-layer1.svg", // Replace with the path to your illustration image
    },
    {
      title: "IMS",
      description:
        "Experience highest ROI-quotient with an ensemble of IMS expertise! With Skeletos, you experience the transparency of an in-house IT team and expertise of a result-oriented team. It’s a crime to reduce the importance of in-house IT team to that of a firefighter. If your core business is not technology, your existing IT department can significantly help you achieve company’s strategic objectives, quickly.",
      illustration: "/images/hero-section-layer2.svg", // Replace with the path to your illustration image
    },
    {
      title: "DevOps",
      description:
        "Collaborative innovation & consistent delivery. DevOps is a mindset that's based on Continuous Integration, Continuous Delivery, and is represented with an infinity symbol denoting that innovationis a journey and not a destination.",
      illustration: "/images/hero-section-layer3.svg", // Replace with the path to your illustration image
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [services.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + services.length) % services.length
    );
  };

  return (
    <section className={styles.heroSection}>
      <div className="container justify-content-center vh-100">
        <div className="row align-items-center pt-3">
          <div className="col-lg-7">
            <div className="service-content">
              <p className={styles.title}>{services[currentSlide].title}</p>
              <p className={styles.description}>
                {services[currentSlide].description}
              </p>
              <button className="btn btn-lg btn-dark p-2">More</button>
            </div>
          </div>
          <div className="col-lg-5 justify-content-center">
            <div className="illustration">
              <img
                src={services[currentSlide].illustration}
                alt="Service Illustration"
                className={styles.imgContainer}
              />
            </div>
          </div>
        </div>
        <div className={styles.arrowButtons}>
          <button className={styles.arrowButton} onClick={goToPreviousSlide}>
            &lt; {/* Left Arrow */}
          </button>
          <button className={styles.arrowButton} onClick={goToNextSlide}>
            &gt; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
