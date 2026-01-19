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

function SocialMediaFollow() {
    return (
        <div className="ibm-plex-mono-bold text-center mt-4 flex flex-col items-center justify-center text-sm font-bold">
            Follow Us
            <div className="inline-flex items-center space-x-4">
                <a
                    href="https://www.facebook.com/share/1D4yS2JEHM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={FacebookNeutral}
                        alt="Facebook"
                        className="w-8 h-8"
                    />
                </a>
                <a
                    href="https://www.instagram.com/manchahocatrers?igsh=MTJubXd3bnh4MWh6cQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* ? Unequal weight and width because original dimensions are different and to balance space */}
                    <img
                        src={InstagramNeutral}
                        alt="Instagram"
                        className="w-7 h-7"
                    />
                </a>
            </div>
        </div>
    );
}

export default SocialMediaFollow;
