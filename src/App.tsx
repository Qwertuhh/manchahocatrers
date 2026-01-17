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

import { lazy, Suspense } from 'react';

import NavigationMenu from '@/components/navbar';
const ReviewList = lazy(() => import('@/components/review'));
const Gallery = lazy(() => import('@/components/gallery'));
import ContactArea from '@/components/contact';
import Footer from '@/components/footer';
import HeroSection from '@/components/heroSection';
import SubHeroSection from '@/components/subHero';
import clsx from 'clsx';
import Loader from '@/components/ui/loader';

function App() {
    return (
        <>
            <NavigationMenu />
            <div
                className={clsx(
                    // ? Background pattern
                    'w-full bg-[radial-gradient(circle_at_1px_1px,#D4D4D8_1px,transparent_0px)] bg-[length:25px_25px]',
                    'flex flex-col items-center justify-center py-12'
                )}
            >
                <Suspense fallback={<Loader />}>
                    <HeroSection />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <SubHeroSection />
                </Suspense>
            </div>
            <div id="highlights">
                <ReviewList />
                <Gallery />
            </div>
            <div id="contact">
                <ContactArea
                    email="manchahocaterers@gmail.com"
                    phoneNumber="+91 9024319241"
                />
            </div>
            <Footer />
        </>
    );
}

export default App;
