import { useEffect } from "react";

export function useLoadingScreen(durationMs = 2000) {
  useEffect(() => {
    const loader = document.getElementById("fake-loading-screen");
    if (!loader) return;
    const loadingText = loader.querySelector(".loading-text");

    const dots = ["", ".", "..", "..."];
    let dotIndex = 0;
    const dotInterval = window.setInterval(() => {
      if (loadingText) {
        loadingText.textContent = "Popcorning" + dots[dotIndex];
        dotIndex = (dotIndex + 1) % dots.length;
      }
    }, 500);

    const hideTimer = window.setTimeout(() => {
      window.clearInterval(dotInterval);
      loader.style.opacity = 0;
      window.setTimeout(() => {
        loader.style.display = "none";
        const mainContent = document.getElementById("main-content");
        if (mainContent) mainContent.style.display = "flex";
      }, 1000);
    }, durationMs);

    return () => {
      window.clearInterval(dotInterval);
      window.clearTimeout(hideTimer);
    };
  }, [durationMs]);
}


