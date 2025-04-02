import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const NumberData = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Stops observing once animated
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden bg-[#000] pt-11 pb-16 text-center">
      <div className="container">
        <p className="text-white m-9 text-lg">
          Impulso (QingDao) Health Tech CO., LTDsi impegna a fornire prodotti, servizi e supporto alle vendite competitivi per i clienti nel settore del fitness, è stato costruito un sistema di prodotti e servizi perfetto nei settori della ricerca e sviluppo delle attrezzature per il fitness, della produzione, del marketing e della gestione della salute.
          I nostri prodotti sono stati venduti in centinaia di paesi e hanno guadagnato una buona reputazione e fan fedeli in tutto il mondo. Crediamo che la fiducia dei clienti derivi dalla nostra ricerca dell'eccellenza del prodotto e dall'esplorazione delle esigenze dei clienti.
        </p>
        <div className="statsContainer">
          {[
            { value: 10, suffix: "+", label: "offre garanzia a vita sui prodotti fitness" },
            { value: 500, suffix: "+", label: "offre garanzia a vita sui prodotti fitness" },
            { value: 80, suffix: "+", label: "offre garanzia a vita sui prodotti fitness" },
            { value: 15, suffix: "k+", label: "offre garanzia a vita sui prodotti fitness" }
          ].map((stat, index) => (
            <div key={index} className="statsData mt-3">
              <h3 className="numberChange">
                {startAnimation ? (
                  <CountUp start={0} end={stat.value} duration={2.5}/>
                ) : (
                  "0+"
                )} <span className="suffix">{stat.suffix}</span>
              </h3>
              <p className="text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberData;
