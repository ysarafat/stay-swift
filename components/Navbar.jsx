import Image from "next/image";
import Link from "next/link";

const Navbar = ({ sideMenu }) => {
  return (
    <nav>
      <Link href="/">
        <Image src="/logo.svg" alt="Stay Swift Logo" width={200} height={200} />
      </Link>
      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            <Link href="/login" class="login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
