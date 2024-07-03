import Typed from "typed.js";
import { useRef, useEffect } from "react";

const useAutoTypedText = () => {
  // Create reference to store the DOM element containing the animation
  const ref = useRef<any>("");
  // Create reference to store the Typed instance itself
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: ["Senior Frontend Developer"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(ref?.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return { ref }
}

export default useAutoTypedText;
