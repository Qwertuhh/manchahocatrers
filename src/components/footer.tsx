/**
 * Copyright (c) 2026 Arihant Jain, Qwertuhh
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

import { FacebookNeutral, InstagramNeutral } from '@/assets';

function Footer() {
    return (
        <footer className="bg-neutral-800 text-stone-300 py-12 px-6 lg:px-10 border-t border-neutral-400/40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-700 pb-8 mb-8">
                {/* Company Info / Brand */}
                <div className="text-center md:text-left">
                    <h3 className="wix-madefor-display-semibold text-2xl font-bold text-stone-100 mb-4 tracking-wide">
                        Manchaho Catrers
                    </h3>
                    <p className="noto-serif-regular text-stone-400 text-sm leading-relaxed">
                        Make your special day more special and beautiful with
                        our exquisite wedding and engagement services.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h4 className="wix-madefor-display-semibold text-lg font-semibold text-stone-100 mb-4">
                        Quick Links
                    </h4>
                    <nav>
                        <ul className="space-y-2 ibm-plex-mono-regular">
                            <li>
                                <a
                                    href="/#hero"
                                    className="hover:text-stone-100 transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#subhero"
                                    className="hover:text-stone-100 transition-colors duration-200"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/menu"
                                    className="hover:text-stone-100 transition-colors duration-200"
                                >
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#gallery"
                                    className="hover:text-stone-100 transition-colors duration-200"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#contact"
                                    className="hover:text-stone-100 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Social Media / Contact Short */}
                <div className="text-center md:text-left">
                    <h4 className="wix-madefor-display-semibold text-lg font-semibold text-stone-100 mb-4">
                        Connect With Us
                    </h4>
                    <div className="flex justify-center md:justify-start space-x-6 mb-4">
                        {/* Replace with actual SVG icons or icon library */}
                        <a
                            href="https://www.facebook.com/share/1D4yS2JEHM"
                            aria-label="Facebook"
                            className="text-stone-400 hover:text-stone-100 transition-colors duration-200"
                        >
                            <img
                                src={FacebookNeutral}
                                alt="Facebook"
                                className="h-8 w-8 bg-neutral-50 p-1 rounded"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/manchahocatrers?igsh=MTJubXd3bnh4MWh6cQ=="
                            aria-label="Instagram"
                            className="text-stone-400 hover:text-stone-100 transition-colors duration-200"
                        >
                            <img
                                src={InstagramNeutral}
                                alt="Instagram"
                                className="h-8 w-8 bg-neutral-50 p-1 rounded"
                            />
                        </a>
                    </div>
                    <p className="ibm-plex-mono-regular text-stone-400 text-sm">
                        Jaipur, Rajasthan, India
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="ibm-plex-mono-regular text-center text-neutral-300 mt-8 mx-0 w-full flex justify-center">
                <div className="text-justify cursor-pointer text-sm lg:text-base ">
                    <p>
                        Copyright &copy; 2025 Manchaho Caterers, Mukesh Kumar
                        Jain. All rights reserved.
                    </p>
                    <p>
                        Distributed under the{' '}
                        <a
                            href="https://opensource.org/licenses/MIT"
                            className="underline underline-offset-2 hover:underline-offset-4"
                        >
                            MIT License
                        </a>
                        . THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
                        ANY KIND.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
