import { link } from "fs";
import Link from "next/link";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const colorStyles = {
  1: {
    gradient: "from-blue-500/10 to-blue-300/20",
    glow1: "bg-blue-300/30",
    glow2: "bg-blue-500/20",
    badge: "from-blue-600 to-blue-400",
    button: "from-blue-600 to-blue-400",
  },
  2: {
    gradient: "from-purple-500/10 to-purple-300/20",
    glow1: "bg-purple-300/30",
    glow2: "bg-purple-500/20",
    badge: "from-purple-600 to-purple-400",
    button: "from-purple-600 to-purple-400",
  },
  3: {
    gradient: "from-emerald-500/10 to-emerald-300/20",
    glow1: "bg-emerald-300/30",
    glow2: "bg-emerald-500/20",
    badge: "from-emerald-600 to-emerald-400",
    button: "from-emerald-600 to-emerald-400",
  },
  4: {
    gradient: "from-cyan-500/10 to-cyan-300/20",
    glow1: "bg-cyan-300/30",
    glow2: "bg-cyan-500/20",
    badge: "from-cyan-600 to-cyan-400",
    button: "from-cyan-600 to-cyan-400",
  },
  5: {
      gradient: "from-blue-500/10 to-blue-300/20",
      glow1: "bg-blue-300/30",
      glow2: "bg-blue-500/20",
      badge: "from-blue-400 to-blue-200",
      button: "from-blue-400 to-blue-200",
  },
  7: {
    gradient: "from-teal-500/10 to-teal-300/20",
    glow1: "bg-teal-300/30",
    glow2: "bg-teal-500/20",
    badge: "from-teal-600 to-teal-400",
    button: "from-teal-600 to-teal-400",
  },
  // 8: {
  //   gradient: "from-yellow-500/10 to-yellow-300/20",
  //   glow1: "bg-yellow-300/30",
  //   glow2: "bg-yellow-500/20",
  //   badge: "from-yellow-600 to-yellow-400",
  //   button: "from-yellow-600 to-yellow-400",
  // },
};


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 ${className}`}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  id,
  title,
  description,
  techStack,
  img,
  link
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  techStack?: string[];
  img?: string;
  link:string
}) => {
  const [copied, setCopied] = useState(false);
  const color = colorStyles[id as keyof typeof colorStyles] || colorStyles[1];

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@yourcompany.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Link href={link} target="_blank" className="relative group">
      <div
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden 
        border border-white/10 backdrop-blur-sm transition-transform duration-500 
        hover:scale-105 hover:shadow-2xl  h-full flex flex-col`}
      >
        {/* Background Color Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color.gradient}`}
        />

        {/* Image */}
        {img && (
          <div className="h-48 w-full overflow-hidden relative z-10">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col gap-3">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          )}

          {/* Tech Stack */}
          {techStack && (
            <div className="flex flex-wrap gap-2 mt-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${color.badge} text-white text-xs font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Glows */}
        <div
          className={`absolute -top-6 -left-6 w-40 h-40 rounded-full ${color.glow1} blur-2xl`}
        />
        <div
          className={`absolute -bottom-6 -right-6 w-36 h-36 rounded-full ${color.glow2} blur-2xl`}
        />
      </div>
    </Link>
  );
};
