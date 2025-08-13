import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getHotelById, getUserByEmail } from "@/queries";
import { getDayDeference } from "@/utils/data-utils";
import { redirect } from "next/navigation";

export default async function PaymentPage({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);

  const hasCheckinCheckout = checkin && checkout;
  let cost = hotelInfo?.highRate + hotelInfo?.lowRate / 2;
  if (hasCheckinCheckout) {
    const days = getDayDeference(checkin, checkout);
    cost *= days;
  }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and base price is{" "}
          <b>${cost}</b>
        </p>
        <PaymentForm checkin={checkin} checkout={checkout} />
      </div>
    </section>
  );
}
