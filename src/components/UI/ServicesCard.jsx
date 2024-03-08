import React from "react";
import { useState } from "react";
import { services } from "../../assets/data-projects-skills";

const ServicesCard = () => {
  const [servicesItem, setServicesItem] = useState(services);
  return (
    <div className="grid place-items-center lg:grid-cols-1 gap-9 max-w-4xl mx-auto">
      {servicesItem.map((service) => (
        <div key={service.id}>
          <div className="card-content flex flex-col items-center text-center">
            <div className="text-center">{service.icon}</div>
            <h2 className="text-3xl mb-2">{service.service}</h2>
            <p className="">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
