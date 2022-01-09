import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="py-5 shadow-md">
      <Container>
        <Link href="/">
          <a>
            <h1 className="text-xl font-bold text-text">Where in the world?</h1>
          </a>
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
