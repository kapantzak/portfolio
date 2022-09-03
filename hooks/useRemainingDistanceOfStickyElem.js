import { useState, useEffect } from "react";

const useRemainingDistanceOfStickyElem = (
  parentRef,
  stickyRef,
  initialRemainingDistance
) => {
  const [remainingDistance, setRemainingDistance] = useState(
    initialRemainingDistance
  );

  useEffect(() => {
    const handleScrollEvent = () => {
      if (stickyRef?.current && parentRef?.current) {
        const stickyElem = stickyRef.current;
        const parentElem = parentRef.current;
        const { bottom: stickyBottom } = stickyElem.getBoundingClientRect();
        const { bottom: parentBottom } = parentElem.getBoundingClientRect();

        setRemainingDistance(parentBottom - stickyBottom);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const progress =
    (initialRemainingDistance - remainingDistance) / initialRemainingDistance;

  return { remainingDistance, progress };
};

export default useRemainingDistanceOfStickyElem;
