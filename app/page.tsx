"use client"

import { motion } from "framer-motion"
import { ChevronRight, Smartphone, Shield, Mic, Zap, MessageCircle, Bell, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const MOBIKUDI_APP_URL = "https://mobikudi.vercel.app"

const APP_SCREENS = [
  {
    id: 1,
    title: "Splash",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-v0-mobi-kudi-mvp-vercel-app-splash-2025-11-04-09_17_45-Pa30bH5gEDn0ktRLYr2K1zYLF6G7EN.png",
    description: "Welcome to MobiKudi",
  },
  {
    id: 2,
    title: "Budget Smartly",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-v0-mobi-kudi-mvp-vercel-app-onboarding-2025-11-04-09_18_08-69MjGKCMEaxFyw2l5d1bgjsGJLg1q4.png",
    description: "Set spending limits and get alerts",
  },
  {
    id: 3,
    title: "Get AI Help",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-v0-mobi-kudi-mvp-vercel-app-onboarding-2025-11-04-09_18_21-USBsaIA1d1yU0xP2vV6RM9gfRZFvyM.png",
    description: "Chat with your AI assistant",
  },
  {
    id: 4,
    title: "Avoid Scams",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-v0-mobi-kudi-mvp-vercel-app-onboarding-2025-11-04-09_18_31-8fUgUPQml6mQo9AGxarwp2C8SnNDhJ.png",
    description: "Protection from fraud",
  },
  {
    id: 5,
    title: "Dashboard",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-v0-mobi-kudi-mvp-vercel-app-dashboard-2025-11-04-09_19_05-sE7zDes2caistlSg4zljaNTYgvs6OI.png",
    description: "Your financial overview",
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(new Set())

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const nextScreen = () => {
    setCurrentScreenIndex((prev) => (prev + 1) % APP_SCREENS.length)
  }

  const prevScreen = () => {
    setCurrentScreenIndex((prev) => (prev - 1 + APP_SCREENS.length) % APP_SCREENS.length)
  }

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           
            <Link href="/" className="flex items-center gap-2 group">
              {/* Mobile logo - icon only */}
              <div className="md:hidden">
                <img src="/logo-icon.png" alt="MobiKudi" className="w-10 h-10" />
              </div>
              {/* Desktop logo - full horizontal */}
              <div className="hidden md:block">
                <img src="/logo-full.png" alt="MobiKudi" className="h-8" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#why" className="text-gray-700 hover:text-[#00B14F] transition-colors text-sm font-medium">
                Why MobiKudi
              </a>
              <a href="#features" className="text-gray-700 hover:text-[#00B14F] transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#who" className="text-gray-700 hover:text-[#00B14F] transition-colors text-sm font-medium">
                Who It's For
              </a>
              <Link
                href={MOBIKUDI_APP_URL}
                target="_blank"
                className="bg-[#00B14F] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                Try MobiKudi
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span className={`h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span
                  className={`h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 border-t border-gray-100"
            >
              <a href="#why" className="block py-2 text-gray-700 text-sm font-medium">
                Why MobiKudi
              </a>
              <a href="#features" className="block py-2 text-gray-700 text-sm font-medium">
                Features
              </a>
              <a href="#who" className="block py-2 text-gray-700 text-sm font-medium">
                Who It's For
              </a>
              <Link
                href={MOBIKUDI_APP_URL}
                target="_blank"
                className="block w-full bg-[#00B14F] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium text-center mt-4"
              >
                Try MobiKudi
              </Link>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B14F]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B14F]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-6">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-pretty"
            >
              Take Control of Your Money — The Simple, Smart Nigerian Way.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed text-pretty">
              MobiKudi helps you manage your money with ease. Get AI-powered guidance, track expenses, and save smarter
              — all in one simple, relatable platform.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href={MOBIKUDI_APP_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-[#00B14F] text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                Launch Full Experience <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-[#00B14F] hover:text-[#00B14F] transition-colors font-semibold"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Dashboard Image */}
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4 mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="text-[#00B14F] font-semibold text-sm uppercase tracking-wider">
              Experience MobiKudi
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-pretty"
            >
              Swipe through your financial journey
            </motion.h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="flex flex-col items-center">
            {/* Card with 3D Flip Animation */}
            <div className="w-full max-w-md perspective" style={{ perspective: "1200px" }}>
              <motion.div
                key={currentScreenIndex}
                custom={1}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  rotateY: { type: "spring", stiffness: 300, damping: 30 },
                }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
              >
                <div className="relative aspect-[9/16] bg-gray-100">
                  <img
                    src={APP_SCREENS[currentScreenIndex].image || "/placeholder.svg"}
                    alt={APP_SCREENS[currentScreenIndex].title}
                    className="w-full h-full object-cover"
                    loading={currentScreenIndex === 0 ? "eager" : "lazy"}
                    fetchPriority={currentScreenIndex === 0 ? "high" : "low"}
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-12 flex flex-col items-center gap-8">
              {/* Screen Indicator */}
              <div className="text-center">
                <motion.p
                  key={`title-${currentScreenIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold text-gray-900"
                >
                  {APP_SCREENS[currentScreenIndex].title}
                </motion.p>
                <motion.p
                  key={`desc-${currentScreenIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-gray-600 mt-2"
                >
                  {APP_SCREENS[currentScreenIndex].description}
                </motion.p>
              </div>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {APP_SCREENS.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentScreenIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentScreenIndex ? "bg-[#00B14F] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex gap-4">
                <motion.button
                  onClick={prevScreen}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 hover:bg-[#00B14F] text-gray-700 hover:text-white rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextScreen}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[#00B14F] hover:bg-green-600 text-white rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href={MOBIKUDI_APP_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-[#00B14F] text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Start Your Journey <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MobiKudi Section */}
      <section
        id="why"
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4 mb-16"
          >
            <motion.p variants={fadeInUp} className="text-[#00B14F] font-semibold text-sm uppercase tracking-wider">
              Why MobiKudi
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-pretty"
            >
              Money management tools shouldn't be confusing.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl text-pretty">
              MobiKudi speaks your language — financially and culturally.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#00B14F] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-[#00B14F]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00B14F]/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#00B14F]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart AI Assistant</h3>
              <p className="text-gray-600">
                Your personal money coach that explains savings and expenses in plain Nigerian English or voice.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#00B14F] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-[#00B14F]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00B14F]/20 transition-colors">
                <Zap className="w-6 h-6 text-[#00B14F]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget & Save Easily</h3>
              <p className="text-gray-600">
                Visualize your money flow, track daily spending, and achieve your goals effortlessly.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#00B14F] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-[#00B14F]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00B14F]/20 transition-colors">
                <Shield className="w-6 h-6 text-[#00B14F]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Scam-Free</h3>
              <p className="text-gray-600">
                Get early alerts for suspicious messages or scam transactions before they hurt your wallet.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4 mb-16"
          >
            <motion.p variants={fadeInUp} className="text-[#00B14F] font-semibold text-sm uppercase tracking-wider">
              Core Features
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-pretty"
            >
              Built with simplicity, accessibility, and confidence in mind.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6 p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#00B14F]/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-7 h-7 text-[#00B14F]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Insight Dashboard</h3>
                <p className="text-gray-600">
                  Understand your income and expenses through easy charts and visualizations.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6 p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#00B14F]/10 rounded-lg flex items-center justify-center">
                  <Mic className="w-7 h-7 text-[#00B14F]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Voice Interaction</h3>
                <p className="text-gray-600">Ask MobiKudi questions and get spoken or text feedback instantly.</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6 p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#00B14F]/10 rounded-lg flex items-center justify-center">
                  <Bell className="w-7 h-7 text-[#00B14F]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Adaptive Reminders</h3>
                <p className="text-gray-600">Receive personalized reminders for bills, savings, and spending goals.</p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6 p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#00B14F]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-[#00B14F]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bank-Level Security</h3>
                <p className="text-gray-600">Your financial data is protected with enterprise-grade encryption.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6 mb-16"
          >
            <motion.p variants={fadeInUp} className="text-[#00B14F] font-semibold text-sm uppercase tracking-wider">
              Who It's For
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-pretty"
            >
              Whether you're a student, small business owner, or trader — MobiKudi is designed for you.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl text-pretty">
              No complex terms. No stress. Just smart guidance that fits your lifestyle.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {["Students", "Small Business Owners", "Traders"].map((role, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-white rounded-xl border border-gray-200 text-center hover:border-[#00B14F] hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-[#00B14F] mb-3">{["🎓", "🏪", "💼"][idx]}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{role}</h3>
                <p className="text-gray-600 text-sm">
                  {
                    [
                      "Manage allowances, budgets, and build savings habits for your future.",
                      "Track daily expenses, manage cash flow, and make informed financial decisions.",
                      "Monitor multiple income streams and keep transactions organized.",
                    ][idx]
                  }
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#00B14F]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <Smartphone className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-pretty"
            >
              Good news! The MobiKudi mobile app is coming soon to the Play Store
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-green-100 mb-8 text-pretty">
              Get ready to manage your money on the go, anytime, anywhere.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={MOBIKUDI_APP_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00B14F] px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                Try Web Version Now <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="MobiKudi" className="w-10 h-10" />
              <span className="font-bold">MobiKudi</span>
            </div>

            <p className="text-gray-400 text-center sm:text-right">
              © 2025 MobiKudi. Built with <span className="text-[#00B14F]">❤️</span> in Nigeria.
            </p>

            <div className="flex gap-6">
              <a
                href={MOBIKUDI_APP_URL}
                target="_blank"
                className="text-gray-400 hover:text-[#00B14F] transition-colors text-sm"
                rel="noreferrer"
              >
                Web App
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00B14F] transition-colors text-sm">
                Privacy
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
