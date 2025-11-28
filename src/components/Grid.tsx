import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section
      id="about"
      className="
        bg-gray-50 
        dark:bg-transparent
        transition-colors duration-300
      "
    >
      <div className="text-center my-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
              w-48 h-48 
              bg-white/70 
              dark:bg-blue-500/10
              blur-3xl 
              rounded-full 
              transition-all
            "
          ></div>
        </div>

        {/* Sub Title */}
        <p
          className="
            text-sm tracking-widest font-semibold uppercase relative z-10
            text-blue-600 
            dark:text-blue-500
          "
        >
          What We Offer
        </p>

        {/* Main Title */}
        <h2
          className="
            text-4xl md:text-5xl font-extrabold mt-2 
            bg-gradient-to-r 
            from-blue-500 via-cyan-400 to-teal-400 
            dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 
            bg-clip-text text-transparent drop-shadow-sm 
            relative z-10
          "
        >
          Our Premium Services
        </h2>

        {/* Underline Decor */}
        <div
          className="
            mt-3 mx-auto w-24 h-1 rounded-full
            bg-gradient-to-r from-blue-500 to-cyan-400
            dark:from-cyan-400 dark:to-blue-500
          "
        ></div>
      </div>

      <BentoGrid
        className="
          w-full pb-20 px-10 
          bg-white/80 
          dark:bg-transparent 
          transition-all
        "
      >
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
