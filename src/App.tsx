/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { Compass, Map, BookOpen, Info, ArrowRight, Menu, X, ChevronRight, MapPin } from 'lucide-react';

import HeroSection from './components/HeroSection';
import ExperiencesSection from './components/ExperiencesSection';
import InteractiveMapSection from './components/InteractiveMapSection';
import StoriesSection from './components/StoriesSection';
import PracticalInfoSection from './components/PracticalInfoSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-paper text-ink overflow-hidden font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <StoriesSection />
        <PracticalInfoSection />
      </main>
      <Footer />
    </div>
  );
}
