import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log("offer", offerListings.imageUrls);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/listing/get?offer=true&limit=4"
        );
        const data = await res.data;
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await axios(
          "http://localhost:3000/api/listing/get?type=rent&limit=4"
        );
        const data = await res.data;
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await axios(
          "http://localhost:3000/api/listing/get?type=sale&limit=4"
        );
        const data = await res.data;
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    // <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
    <div className="">
      {/* {top} */}
      {/* <div className="" >
        <img
          src="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div> */}
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
          height: "400px",
          opacity: 1,
          display: "flex",
          alignItems: "center",

          // justifyContent: "center",
        }}
      >
        <div
          style={{
            // textAlign: "center",
            marginLeft: "120px",
            opacity: 1,
            zIndex: 1,
          }}
        >
          <h1
            className="text-slate-700 font-bold text-3xl lg:text-6xl"
            style={{ color: "black" }}
          >
            Find your next{" "}
            <span className="text-slate-500" style={{ color: "white" }}>
              perfect
            </span>
            <br />
            place with ease
          </h1>
          <div
            className="text-gray-400 text-xs sm:text-sm"
            style={{ color: "white", marginTop: "23px", fontWeight: "500" }}
          >
            ElevatedEstate is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties dfor you to choose from.
          </div>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid black",
              width: "140px",
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              borderRadius: "6px",
              padding: "6px",
            }}
          >
            <Link
              to={"/search"}
              className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
              style={{ fontWeight: "500", color: "white" }}
            >
              Lets get Started...
            </Link>
          </div>
        </div>
      </div>
      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((ofrlisting) => (
            <SwiperSlide key={ofrlisting._id}>
              <div
                style={{
                  background: `url(${ofrlisting.imageUrls}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={ofrlisting._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}
      {/* <div className="w-full md:w-auto" style={{ width: "100%" }}>
        <img
          src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div> */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
