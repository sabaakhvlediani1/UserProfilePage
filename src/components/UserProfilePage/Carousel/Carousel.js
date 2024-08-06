import React, { useEffect, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import Card from '../Card/Card'; 
import './Carousel.css'; 
import house6 from "../../../assets/house6.png";

const Carousel = () => {
  const images = [
    house6,
    house6,
    house6,
    house6,
    house6,
    house6,
    house6,
    house6,
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <main className="carousel-container">
      <motion.div
        className="carousel"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <Card image={`${item}`} key={idx} />
        ))}
      </motion.div>
    </main>
  );
};

export default Carousel;










































// import { motion, useMotionValue, animate } from "framer-motion";
// import { useEffect, useState } from "react";
// import useMeasure from "react-use-measure";
// import './Carousel.css';
// import house6 from "../../../assets/house6.png";

// const properties = [
//   { id: 1, title: "Property - Demo 1", image: house6, bgColor: "#FF6F61" },
//   { id: 2, title: "Property - Demo 2", image: house6, bgColor: "#FFB84D" },
//   { id: 3, title: "Property - Demo 3", image: house6, bgColor: "#8BC34A" },
//   { id: 4, title: "Property - Demo 4", image: house6, bgColor: "#0000FF" },
//   { id: 5, title: "Property - Demo 5", image: house6, bgColor: "#A020F0" },
// ];

// export default function Home() {
//   const FAST_DURATION = 15;
//   const [duration, setDuration] = useState(FAST_DURATION);
//   const [ref, { width }] = useMeasure();
//   const xTranslation = useMotionValue(0);

//   useEffect(() => {
//     // Log width to ensure it's correctly measured
//     console.log('Carousel width:', width);

//     // Ensure enough width to scroll
//     const controls = animate(xTranslation, [0, -width], {
//       ease: "linear",
//       duration: duration,
//       repeat: Infinity,
//       repeatType: "loop",
//     });

//     return controls.stop;
//   }, [xTranslation, duration, width]);

//   return (
//     <div className="carousel-container">
//       <motion.div
//         className="carousel"
//         style={{ x: xTranslation }}
//         ref={ref}
//         onHoverStart={() => setDuration(5)}  // Faster scroll on hover
//         onHoverEnd={() => setDuration(FAST_DURATION)}  // Reset to default speed
//       >
//         {[...properties, ...properties].map((property, index) => (
//           <motion.div
//             className="card"
//             key={property.id} // Use a unique key
//             style={{ backgroundColor: property.bgColor }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={property.image} alt={property.title} />
//             <p>{property.title}</p>
//             <button className="view-more-btn">View More</button>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
