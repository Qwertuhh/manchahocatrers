import { useState, useMemo } from "react";
import {
  menuItemsWithId,
  menuCategories,
  menuSubCategories,
  MenuHeader,
  SearchAndFilter,
  MenuItemCard,
  ScrollPagination,
  EmptyState,
} from "@/components/menu";
import {
  useMenuFilter,
  useNavigation,
  usePagination,
} from "@/components/hooks";

const ITEMS_PER_PAGE = 18;

function MenuPreview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create stable dependencies array to prevent pagination resets
  const paginationDependencies = useMemo(
    () => [searchTerm, selectedCategory],
    [searchTerm, selectedCategory]
  );

  // Use custom hooks
  const { filteredItems } = useMenuFilter({
    items: menuItemsWithId,
    searchTerm,
    selectedCategory,
    menuSubCategories,
  });

  const {
    currentPage,
    totalPages,
    currentItems,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  } = usePagination({
    items: filteredItems,
    itemsPerPage: ITEMS_PER_PAGE,
    dependencies: paginationDependencies,
  });

  const { handleTouchStart } = useNavigation({
    onNextPage: goToNextPage,
    onPreviousPage: goToPreviousPage,
  });

  return (
    <div className="min-h-screen bg-neutral-100/60 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <MenuHeader
          title="Our Menu"
          subtitle="Discover our authentic flavors and culinary delights"
        />
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={menuCategories}
        />
        {filteredItems.length === 0 ? (
          <EmptyState />
        ) : (
          <ScrollPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousPage={goToPreviousPage}
            onNextPage={goToNextPage}
            onGoToPage={goToPage}
          >
            {/* Menu Items Grid */}
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 rounded-lg border border-neutral-300 p-4 transition-all duration-300 ${
                filteredItems.length === 0 ? "hidden" : ""
              }`}
              onTouchStart={handleTouchStart}
            >
              {currentItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  menuSubCategories={menuSubCategories}
                />
              ))}
            </div>
          </ScrollPagination>
        )}

        {/* Contact Info */}
        <div className="mt-16 text-center bg-neutral-800 text-white rounded-md p-12 flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-8">
          <div className="text-left">
            <h2 className="wix-madefor-display-bold text-2xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="noto-serif-regular mb-6 w-1/2">
              Email or call us to place your order or inquire about our catering
              services.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a
              href="tel:+919024319241"
              className="inline-flex items-center font-mono justify-left gap-2 bg-neutral-50 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              <span className="ibm-plex-mono-bold">Call</span> +91 9024319241
            </a>
            <a
              href="mailto:manchahocatrers@gmail.com"
              className="inline-flex items-center font-mono justify-left gap-2 bg-neutral-50 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              <span className="ibm-plex-mono-bold">Email</span>{" "}
              manchahocatrers@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MenuPreview };
