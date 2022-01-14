import { useEffect, useState } from "react";

function useOnScreen(ref) {
  const [Interscting, setInterceting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //Update state with new values
        setInterceting(entry.isIntersecting ?? false);
      },
      {
        threshold: 0.9,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return Interscting;
}

export default useOnScreen;
