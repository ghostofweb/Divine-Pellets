import React from 'react'

const MissionCard = ({ img, name, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md shadow-black overflow-hidden p-6 max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-green-950">
      {/* Image Container with hidden overflow */}
      <div className="w-26 h-56 overflow-hidden mb-6 rounded-md">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform transform hover:scale-110"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{name}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  )
}

export default MissionCard
