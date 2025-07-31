"use client";

// import { useRouter } from "next/navigation";
// import { startTransition } from "react";
// export default function ErrorBoundary({
//   error,
//   reset,
// }: {
//   error: Error;
//   reset: () => void;
// }) {
//   const router = useRouter();
//   const reload = () => {
//     startTransition(() => {
//       router.refresh();
//       reset();
//     });
//   };
//   return (
//     <div>
//       {error.message}{" "}
//       <button onClick={() => startTransition(reload)}>Try again</button>
//     </div>
//   );
// }


export default function ErrorBoundary({
  error, reset }:
   {error:Error,
    reset: () => void
   })
  {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message} </p>
      <button onClick={() => reset()}>Try again</button>
    </div>  
  );
  }