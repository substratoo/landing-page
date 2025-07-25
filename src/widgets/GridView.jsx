import GridCard from "./GridCard";

export default function GridView({ title, cards, mode }) {
  const isMobile = mode === "mobile";

  return (
    <div
      className={
        isMobile
          ? "bg-dark-grid h-full w-full flex flex-col p-6" // Fill all space, no padding or width constraints
          : "shadow-2xl p-6 bg-dark-grid flex flex-col max-w-[90%] max-h-[90%] min-w-[700px] h-full"
      }
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-dark-text">{title}</h2>
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-1 pr-4">
          {cards.map((card, idx) => (
            <GridCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
