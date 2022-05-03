import React, { useState, useContext, useEffect, Fragment } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
// import { FaMapMarker } from 'react-icons/fa';s
import mapStyles from "../data/mapStyles";
import Context from "../context/context";

const Map = () => {
  const context = useContext(Context);
  const { latitude, address, getUserAddress, longitude, getLocation } = context;

  const [lng, setLongitude] = useState(-122.463);
  const [lat, setLatitude] = useState(37.7648);
  const [info, setInfo] = useState("San Francisco, US");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getLocation();
    getUserAddress();
    return () => {
      setLatitude(latitude);
      setLongitude(longitude);
      setInfo(address);
    };
    // eslint-disable-next-line
  }, [latitude, longitude]);

  return (
    <Fragment>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultOptions={{ styles: mapStyles }}
      >
        <Marker
          position={{
            lat,
            lng,
          }}
          onClick={() => {
            setModal(true);
          }}
          icon={{
            url: `/skateboarding.svg`,
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />

        {modal && (
          <InfoWindow
            position={{
              lat,
              lng,
            }}
            onCloseClick={() => {
              setModal(false);
            }}
          >
            <div>
              <h5>
                {info === "San Francisco, US" ||
                info === "1260 6th Ave, San Francisco, CA 94122, USA"
                  ? "user's address is currently unavailable."
                  : info}
              </h5>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <button
        className="find-me-btn btn btn-warning"
        type="button"
        onClick={() => {
          getLocation();
          getUserAddress();
          setLatitude(latitude);
          setLongitude(longitude);
          setInfo(address);
          setModal(true);
        }}
      >
        Find Me
      </button>
    </Fragment>
  );
};

export default Map;
