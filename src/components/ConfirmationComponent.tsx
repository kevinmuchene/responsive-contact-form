import React from "react";

function ConfirmationComponent({ isSubmitted }: { isSubmitted: boolean }) {
  return (
    <div className="flex  justify-center m-2" aria-live="polite">
      <div
        className={`mt-4 p-4 text-white bg-[#135D2D] rounded-md shadow-md transition-transform transform ${
          isSubmitted
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        Form submitted successfully!
      </div>
    </div>
  );
}

export default ConfirmationComponent;
