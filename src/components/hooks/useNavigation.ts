import { useEffect, useCallback } from "react";

interface UseNavigationProps {
  onNextPage: () => void;
  onPreviousPage: () => void;
}

function useNavigation({
  onNextPage,
  onPreviousPage,
}: UseNavigationProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPreviousPage();
      } else if (event.key === "ArrowRight") {
        onNextPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNextPage, onPreviousPage]);

  // Touch/Swipe handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touchStartX = e.touches[0].clientX;
      const handleTouchEnd = (e: TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
          // Minimum swipe distance
          if (diff > 0) {
            onNextPage(); // Swipe left - next page
          } else {
            onPreviousPage(); // Swipe right - previous page
          }
        }

        window.removeEventListener("touchend", handleTouchEnd);
      };

      window.addEventListener("touchend", handleTouchEnd);
    },
    [onNextPage, onPreviousPage]
  );

  return { handleTouchStart };
}

export { useNavigation };