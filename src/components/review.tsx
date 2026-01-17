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

import clsx from 'clsx';
import { useEffect, useRef } from 'react';

interface Review {
    name: string;
    content: string;
}

const reviews: Review[] = [
    {
        name: 'Dawal Jain',
        content:
            'Food is the language everyone understands, and Manchaho Caterers know it from the heart. We had them for our baby shower function, and every dish felt like comfort on a plate – full of flavour, beautifully cooked, and served with genuine care. The counters were neatly arranged, the presentation was elegant, and our guests kept appreciating the taste and variety. A big thank you to Mukesh Jain ji and his team for treating our occasion like their own family function.',
    },
    {
        name: 'Urwashi Jain',
        content:
            'I recently used Manchaho Caterers for my baby shower and they were absolutely fantastic. The food was delicious and the presentation was beautiful. The staff was also very friendly and helpful. I would highly recommend them.',
    },
    {
        name: 'Anil Jain',
        content:
            'I was blown away by the quality of the food and service provided by Manchaho Caterers. They truly went above and beyond to make my event special. I would definitely use them again in the future.',
    },
    {
        name: 'Anupam Jain',
        content:
            'I recently used Manchaho Caterers for my birthday party and they were amazing. The food was delicious and the staff was so friendly and attentive. The presentation of the food was also beautiful. I would highly recommend them.',
    },
];

function ReviewList() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        let animationFrameId: number;

        const animateScroll = () => {
            if (container) {
                container.scrollLeft += 0.75;

                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section
            id="reviews"
            className="py-16 px-4 md:px-8 bg-neutral-900 overflow-hidden relative isolate"
        >
            <div className="absolute inset-0 opacity-5 pointer-events-none"></div>

            <h2 className="wix-madefor-display-bold relative z-10 text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-md">
                What Our{' '}
                <span className="text-(--accent-color)">Customers</span> Say
            </h2>

            <div
                ref={scrollRef}
                className={clsx(
                    'relative z-10 flex w-full  overflow-x-scroll no-scrollbar space-x-6 md:space-x-8 py-6 cursor-grab active:cursor-grabbing',
                    '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'
                )}
            >
                {[...reviews, ...reviews].map(
                    (review: Review, index: number) => (
                        <div
                            key={index}
                            className="bg-neutral-200 p-4 m-2 rounded-lg"
                        >
                            <div className="flex flex-col gap-2 content-left items-end">
                                <p className="break-words w-[20rem] h-[20rem] noto-serif-regular text-neutral-900">
                                    {review.content}
                                </p>
                                <p className="ibm-plex-mono-bold text-neutral-900">
                                    — {review.name || 'Anonymous'}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default ReviewList;
