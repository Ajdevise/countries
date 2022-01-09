import Image from "next/image";

const Card = ({ country }) => {
  return (
    <figure className="bg-elements shadow-lg rounded-lg overflow-hidden">
      {country.flag && (
        <Image
          alt={country.name + " flag"}
          src={country.flag}
          width={220}
          height={120}
          objectFit="cover"
          layout="responsive"
        />
      )}
      <figcaption className="p-6">
        <h2 className="font-extrabold mb-3 text-text">{country.name}</h2>
        <p className="text-sm text-text mb-1">
          <span className="font-semibold mr-1">Population:</span>
          <span>{country.population}</span>
        </p>
        <p className="text-sm text-text mb-1">
          <span className="font-semibold mr-1">Region:</span>
          <span>{country.region}</span>
        </p>
        {country.capital && (
          <p className="text-sm text-text mb-1">
            <span className="font-semibold mr-1">Capital:</span>
            <span>{country.capital}</span>
          </p>
        )}
      </figcaption>
    </figure>
  );
};

export default Card;
