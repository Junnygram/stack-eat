import React from "react";

function LoadingBox() {
  return (
    <div class="bg-orange-500 items-center justify-center px-4 py-3" disabled>
      <svg
        class="motion-reduce:hidden animate-spin ..."
        viewBox="0 0 24 24"
      ></svg>
      Processing...
    </div>
  );
}

export default LoadingBox;
