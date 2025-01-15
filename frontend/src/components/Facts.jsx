import React from 'react';
import Title from './Title';
import FactCard from './FactCard';
import FactItem from './FactItem';

const Facts = () => {
  const facts = [
    {
      title: 'Eco-Friendly',
      description:
        'Our pellets are crafted from 100% natural and renewable resources, minimizing environmental impact. Choose sustainable energy that reduces deforestation and fossil fuel dependence.',
      icon: '🌱'
    },
    {
      title: 'Cost-Effective',
      description:
        'Experience smarter energy solutions with our high-density pellets that burn longer and hotter. Reduce energy costs while supporting sustainable practices.',
      icon: '💰'
    },
    {
      title: 'High Energy Output',
      description:
        'Achieve optimal performance with our premium pellets that deliver exceptional energy output and minimal residue, perfect for both industrial and household use.',
      icon: '⚡'
    },
    {
      title: 'Sustainable Future',
      description:
        'Join our mission for a greener tomorrow. Support global climate action and resource preservation with Divine Pellets clean energy solutions.',
      icon: '🌍'
    },
  ];

  const facts2 = [
    'Biomass pellets are an eco-friendly fuel source made from renewable organic materials.',
    'They offer a cleaner alternative to fossil fuels by reducing carbon emissions.',
    'Biomass pellets are cost-effective and provide high energy efficiency.',
    'Using biomass pellets helps reduce waste by repurposing agricultural and wood residues.',
  ];

  return (
    <div className="w-full from-gray-50 to-gray-100">
      {/* Main Facts Section */}
      <section className="bg-gradient-to-b py-16 w-full shadow-xl shadow-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <Title
              title="Why Choose Divine Pellets Energies?"
              bodyText="At Divine Pellets Energies, we combine innovation with sustainability to bring you cost-effective, eco-friendly, and efficient energy solutions."
            />
          </div>

          {/* Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {facts.map((fact, index) => (
              <FactCard
                key={index}
                icon={fact.icon}
                title={fact.title}
                description={fact.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Biomass Facts Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title title="Facts about Biomass Pellets" />
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {facts2.map((fact, index) => (
              <FactItem
                key={index}
                fact={fact}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facts;