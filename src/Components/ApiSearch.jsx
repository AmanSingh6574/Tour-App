import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function ApiSearch({ getid, loading }) {
  const [placeid, setplaceid] = useState("");

  function onPlaceSelect(value) {
    // console.log(value);
    setplaceid(value);
  }

  // console.log(placeid?.properties?.place_id);

  useEffect(() => {
    getid(placeid?.properties?.place_id);
  }, [onPlaceSelect]);

  return (
    <div className="mt-10 text-center ">
      <h1 className="font-bold text-2xl mb-4 relative">
        Search Places To Visit Near your City
      </h1>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <GeoapifyContext apiKey="9db3b697d562439b85a1fb2f86d0cf31">
            <GeoapifyGeocoderAutocomplete
              placeholder="Enter address here"
              placeSelect={onPlaceSelect}
            />
          </GeoapifyContext>
        )}
      </div>
    </div>
  );
}

export default ApiSearch;
