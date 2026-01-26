/**
 * Copyright (c) 2026 Manchao Catrers, Kumar Jain
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Star } from "lucide-react";

interface PrintItem {
  id: string;
  name: string;
  hindiName?: string;
  popular?: boolean;
}

export interface PrintSubcategory {
  subcategoryName: string;
  subcategoryHindiName?: string;
  items: PrintItem[];
}

interface PrintSubcategoryTableProps {
  subcategory: PrintSubcategory;
}

function PrintSubcategoryTable({ subcategory }: PrintSubcategoryTableProps) {
  return (
    <div className="space-y-3 my-8 border-2 rounded-md border-neutral-800 print-avoid-break">
      <div className="flex flex-col gap-1 w-fit justify-center items-center mx-auto rounded-bl-md rounded-br-md border-r-2 border-l-2 border-b-2 border-neutral-800">
        <h3 className="wix-madefor-display-semibold text-lg mx-4 font-semibold tracking-tight w-fit text-neutral-800">
          {subcategory.subcategoryName}
        </h3>
        {subcategory.subcategoryHindiName && (
          <p className="hind-semibold text-sm text-neutral-700 w-fit">
            {subcategory.subcategoryHindiName}
          </p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-neutral-100 text-neutral-800">
              <th className="px-2 py-2 text-left font-semibold font-mono">
                Item
              </th>
              <th className="px-2 py-2 text-left font-semibold font-mono">
                Hindi Name
              </th>
            </tr>
          </thead>
          <tbody>
            {subcategory.items.map((item) => (
              <tr
                key={item.id}
                className="border-b border-neutral-300 align-top print-avoid-break"
              >
                <td className="px-2 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="wix-madefor-display-semibold text-xl sm:text-sm font-semibold tracking-tight">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2 text-neutral-700">
                  {item.hindiName && (
                    <div className="flex items-center justify-between gap-2">
                      <span className="hind-semibold text-xl sm:text-xs">
                        {item.hindiName}
                      </span>
                      {item.popular && (
                        <span className="rounded-[2px] bg-amber-100 font-semibold uppercase tracking-wide text-amber-800">
                          <Star className="m-1 inline h-4 w-4 sm:h-4 sm:w-4" />
                        </span>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrintSubcategoryTable;
