// import React, { useRef, useEffect } from "react";

// /**
//  * Hook that alerts clicks outside of the passed ref
//  */
// export default function useOutsideAlerter(ref: React.ComponentRef<any>, action: ()=> void) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event: MouseEvent) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         action();
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }

// // Using component instead
