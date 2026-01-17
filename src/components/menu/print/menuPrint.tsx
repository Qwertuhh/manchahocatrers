import { useMemo } from "react";
import { menuItemsWithId, menuSubCategories } from "../menuItems";
import PrintSubcategoryTable from "./PrintSubcategoryTable";

function MenuPrintPage() {
  const groupedMenu = useMemo(() => {
    const subCategoryByName = new Map(
      menuSubCategories.map((subCategory) => [subCategory.name, subCategory])
    );

    const categories: Record<
      string,
      {
        categoryName: string;
        categoryHindiName?: string;
        subcategories: Record<
          string,
          {
            subcategoryName: string;
            subcategoryHindiName?: string;
            items: typeof menuItemsWithId;
          }
        >;
      }
    > = {};

    menuItemsWithId.forEach((item) => {
      const subCategory = subCategoryByName.get(item.category);
      const parentCategory = subCategory?.parentCategory;

      const categoryName = parentCategory?.name ?? "Other";
      const categoryHindiName = parentCategory?.hindiName;

      if (!categories[categoryName]) {
        categories[categoryName] = {
          categoryName,
          categoryHindiName,
          subcategories: {},
        };
      }

      const subKey = subCategory?.name ?? item.category;
      const subHindi = subCategory?.hindiName ?? item.hindiCategory;

      if (!categories[categoryName].subcategories[subKey]) {
        categories[categoryName].subcategories[subKey] = {
          subcategoryName: subKey,
          subcategoryHindiName: subHindi,
          items: [],
        };
      }

      categories[categoryName].subcategories[subKey].items.push(item);
    });

    return Object.values(categories).map((category) => ({
      ...category,
      subcategories: Object.values(category.subcategories),
    }));
  }, []);

  return (
    <section className="w-full px-4 py-4 sm:px-4 lg:px-6 print:px-0 print:py-4">
      <div className="mx-auto max-w-6xl space-y-0 flex flex-col gap-0 justify-center items-center">
        <img
          src="/menu/manchaho_catrers_menu_first_page.png"
          alt="Manchaoh Caterers"
          className="h-full"
        />
        <div className="h-screen  flex flex-col gap-1 justify-center items-center">
          <h1 className="wix-madefor-display-semibold my-4 text-4xl mx-auto font-semibold tracking-tight text-neutral-900">
            Our Menu
          </h1>

          <p className="font-mono text-xl tracking-wide">
            Fine Catering & Event Services
          </p>

          <div className="text-center text-xs sm:text-sm flex flex-col justify-center items-center text-neutral-700 space-y-1 print-avoid-break">
            <p className="noto-serif-regular mx-auto w-sm my-12 text-md tracking-wide">
              Make your special day more special and beautiful with our
              exquisite wedding and engagement services.
            </p>
            <ul className="noto-serif-regular mx-auto w-xl space-y-4 my-12 tracking-wide">
              <li>
                <span className="font-bold">Phone:</span> +91-9024319241
              </li>
              <li>
                <span className="font-bold">Email:</span>{" "}
                manchahocatrers@gmail.com
              </li>
              <li>
                <span className="font-bold">Website:</span>{" "}
                www.manchaocatrers.netlify.app
              </li>
            </ul>
            <p className="noto-serif-regular max-w-2xl text-[11px] sm:text-xs text-neutral-500">
              Thank you for choosing us to be part of your celebration.
            </p>
            <div className="border-2 border-neutral-800 my-4 py-2 pb-4">
              <img
                src="/qwertuhh-full-name-dark.svg"
                alt="qwertuhh"
                className="mx-auto"
              />
              <p className="noto-serif-regular w-sm">
                This manchaho caterers menu and websit designed, developed and
                maintained by{" "}
                <a
                  href="https://qwertuhh.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Qwertuhh
                </a>
              </p>
            </div>
          </div>
        </div>
        {groupedMenu.map((category) => (
          <div key={category.categoryName} className="space-y-4 w-2xl">
            <div className="p-3 bg-neutral-800 rounded-md flex flex-row gap-1 justify-between px-4 items-center">
              <h2 className="wix-madefor-display-semibold text-xl font-semibold tracking-tight text-neutral-50">
                {category.categoryName}
              </h2>
              {category.categoryHindiName && (
                <p className="hind-regular text-xl text-neutral-50">
                  {category.categoryHindiName}
                </p>
              )}
            </div>

            {category.subcategories.map((subCategory) => (
              <PrintSubcategoryTable
                key={subCategory.subcategoryName}
                subcategory={subCategory}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPrintPage;
