import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ hotel }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" info={hotel} />
      </div>
    </section>
  );
};

export default Summary;
