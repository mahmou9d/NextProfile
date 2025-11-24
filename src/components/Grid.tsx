import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <div className="text-center my-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 bg-blue-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Sub Title */}
        <p className="text-sm tracking-widest text-blue-500 font-semibold uppercase relative z-10">
          What We Offer
        </p>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-sm relative z-10">
          Our Premium Services
        </h2>

        {/* Underline Decor */}
        <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>
      <BentoGrid className="w-full pb-20 px-10">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            // className={item.className}
            img={item.img}
            // imgClassName={item.imgClassName}
            // titleClassName={item.titleClassName}
            // spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
