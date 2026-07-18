import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Ensure gsap works with browser environments cleanly
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export { gsap, useGSAP };
