import Container from "../Layout/Container";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-12
      "
    >
      <Container>
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
          "
        >
          <div>
            © 2026 GFX Portfolio
          </div>

          <div
            className="
            flex
            gap-6
            "
          >
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}