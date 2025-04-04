"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/p1.jpg",
  },
  {
    id: 2,
    src: "/p2.jpg",
  },
  {
    id: 3,
    src: "/p3.jpg",
  },
  {
    id: 4,
    src: "/p4.jpg",
  },
  {
    id: 5,
    src: "/p5.jpg",
  },
  {
    id: 6,
    src: "/p6.jpg",
  },
  {
    id: 7,
    src: "/p7.jpg",
  },
  {
    id: 8,
    src: "/p8.jpg",
  },
  {
    id: 9,
    src: "/p9.jpg",
  },
  {
    id: 10,
    src: "/p10.jpg",
  },
  {
    id: 11,
    src: "/p11.jpg",
  },
  {
    id: 12,
    src: "/p12.jpg",
  },
  {
    id: 13,
    src: "/p13.jpg",
  },
  {
    id: 14,
    src: "/p14.jpg",
  },
  {
    id: 15,
    src: "/p15.jpg",
  },
  {
    id: 16,
    src: "/p16.jpg",
  }
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const HeroSide = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroSide;