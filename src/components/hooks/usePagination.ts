import { useState, useMemo, useEffect, useCallback } from "react";
import type { MenuItemWithId } from "@/types";

interface UsePaginationProps {
  items: MenuItemWithId[];
  itemsPerPage: number;
  dependencies?: unknown[];
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  currentItems: MenuItemWithId[];
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (page: number) => void;
}

function usePagination({
  items,
  itemsPerPage,
  dependencies = [],
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate pagination values
  const paginationValues = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      totalPages,
      currentItems,
      startIndex,
      endIndex,
    };
  }, [items, currentPage, itemsPerPage]);

  // Reset to first page when items change
  useEffect(() => {
    setCurrentPage(0);
  }, [items, dependencies]);

  // Navigation functions
  const goToNextPage = useCallback(() => {
    if (currentPage < paginationValues.totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, paginationValues.totalPages]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 0 && page < paginationValues.totalPages) {
        setCurrentPage(page);
      }
    },
    [paginationValues.totalPages]
  );

  return {
    currentPage,
    totalPages: paginationValues.totalPages,
    currentItems: paginationValues.currentItems,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
}

export { usePagination };
