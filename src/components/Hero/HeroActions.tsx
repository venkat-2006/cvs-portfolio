import Button from "../UI/Button";

export default function HeroActions() {
  return (
    <div
      className="
      flex
      flex-col
      sm:flex-row

      items-start

      gap-6
      "
    >
      <Button>
        View Work
      </Button>

      <Button>
        Let's Talk
      </Button>
    </div>
  );
}