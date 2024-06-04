import Image from 'next/image';

const Card = ({ imageSrc, category, title, price, description }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full md:max-w-2xl my-4">
      <div className="md:w-1/2 p-4 flex flex-col">
        <span className={`inline-block px-3 py-1 text-sm rounded-full text-white ${category === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}>
          {category === 'veg' ? 'Bestseller' : 'Non Veg'}
        </span>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-700 mt-1">${price}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="md:w-1/2 relative">
        <Image
          src={imageSrc}
          alt="Food Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
