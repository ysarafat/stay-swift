import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import ProfileInfo from "@/components/user/ProfileInfo";

export default function BookingsPage() {
  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
}
