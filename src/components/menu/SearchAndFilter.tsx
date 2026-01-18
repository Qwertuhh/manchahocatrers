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

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import SectionMarker from '../ui/sectionMarker';

interface SearchAndFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

function SearchAndFilter({ searchTerm, onSearchChange }: SearchAndFilterProps) {
    const [canPrint, setCanPrint] = useState(false);

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            typeof window.print === 'function'
        ) {
            setCanPrint(true);
        }
    }, []);

    const handleDownloadPdf = () => {
        if (typeof window === 'undefined') return;

        const printUrl = '/menu/print';
        const printWindow = window.open(printUrl, '_blank');

        if (!printWindow) return;

        // Try to trigger print once the print page has loaded
        const onLoad = () => {
            printWindow.focus();
            printWindow.print();
            printWindow.removeEventListener('load', onLoad);
        };

        // In some browsers, the load event may already have fired
        try {
            if (printWindow.document.readyState === 'complete') {
                printWindow.focus();
                printWindow.print();
            } else {
                printWindow.addEventListener('load', onLoad);
            }
        } catch {
            // If cross-origin or timing issues occur, the user can still print manually
        }
    };

    return (
        <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search menu items..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center mt-3 md:mt-0">
                    <a
                        href="/menu/print"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleDownloadPdf}
                        className="text-md ibm-plex-mono-bold text-neutral-800 not-md:underline"
                    >
                        Print Menu
                    </a>
                    {canPrint && (
                        <a
                            href="./manchaho_catrers_menu.pdf"
                            download="./manchaho_catrers_menu.pdf"
                            className="ibm-plex-mono-bold text-xs md:text-sm px-3 py-2 rounded-md border border-neutral-800 text-neutral-50 bg-neutral-800 hover:bg-neutral-900 transition-colors"
                        >
                            Download PDF
                        </a>
                    )}
                </div>
            </div>

            {/* Category Selector (dropdown) */}
            <SectionMarker name="Items" />
        </div>
    );
}

export { SearchAndFilter };
