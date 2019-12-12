import { useRef, useEffect, useState } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseenter", handleMouseLeave);
    };
  }, [ref.current]);

  return [ref, isHovered];
}

export default useHover;
