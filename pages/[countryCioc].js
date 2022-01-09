import { getCountriesId, getCountryData } from "../lib/countries";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function Country({ countryData }) {
  const router = useRouter();

  const goBackOnePage = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>{countryData.name}</title>
        <meta
          name="description"
          content={`country ${countryData.name} details`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <button
          onClick={goBackOnePage}
          className="shadow-lg mt-16 bg-elements py-1 px-4 rounded-md cursor-pointer"
        >
          Back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-12">
          <Image
            src={countryData.flag}
            width={600}
            height={400}
            objectFit="contain"
            layout="responsive"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-min">
            <h1 className="font-bold text-2xl md:col-span-2">
              {countryData.name}
            </h1>
            <p className="text-sm text-text">
              <span className="font-semibold mr-1">Population:</span>
              <span>{countryData.population}</span>
            </p>
            <p className="text-sm text-text">
              <span className="font-semibold mr-1">Capital:</span>
              <span>{countryData.capital}</span>
            </p>
            <p className="text-sm text-text">
              <span className="font-semibold mr-1">Region:</span>
              <span>{countryData.region}</span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getCountriesId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const countryData = await getCountryData(params.countryCioc);

  return {
    props: {
      countryData,
    },
  };
}
