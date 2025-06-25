"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Smartphone,
  Shield,
  Truck,
  Headphones,
  Star,
  Menu,
  Search,
  ShoppingCart,
  User,
  Zap,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

function PromotionalCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const offers = [
    {
      id: 1,
      title: "MEGA SALE",
      subtitle: "Up to 70% OFF on Latest Smartphones",
      description: "iPhone, Samsung, OnePlus & More",
      buttonText: "Shop Now",
      bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "EXCHANGE OFFER",
      subtitle: "Get ₹15,000 OFF on Exchange",
      description: "Trade your old phone for the latest model",
      buttonText: "Exchange Now",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "BANK OFFER",
      subtitle: "Extra 10% OFF with HDFC Cards",
      description: "No Cost EMI Available",
      buttonText: "Get Offer",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "ACCESSORIES SALE",
      subtitle: "Cases, Chargers & More",
      description: "Starting from ₹99 only",
      buttonText: "Browse All",
      bgColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [offers.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length)
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {offers.map((offer) => (
          <div key={offer.id} className="w-full flex-shrink-0">
            <div className={`${offer.bgColor} text-white p-8 rounded-lg`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold">{offer.title}</h2>
                    <h3 className="text-xl md:text-2xl font-semibold">{offer.subtitle}</h3>
                    <p className="text-lg opacity-90">{offer.description}</p>
                  </div>
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    {offer.buttonText}
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {offers.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">MobileHub</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Phones
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Accessories
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Deals
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Promotional Carousel */}
      <section className="bg-white border-b">
        <div className="container px-4 py-4">
          <PromotionalCarousel />
        </div>
      </section>

      {/* Shop Description and Location */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <Badge variant="outline" className="w-fit border-blue-500 text-blue-600 text-xs">
                    📍 Visit Our Store
                  </Badge>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                    Your Trusted
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {" "}
                      Mobile Partner
                    </span>
                  </h1>
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                    Since 2015, MobileHub has been serving customers with the latest smartphones, accessories, and
                    expert repair services.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                      <Shield className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Authorized Dealer</h3>
                      <p className="text-xs md:text-sm text-gray-600">Official retailer for all major brands</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <Award className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Expert Service</h3>
                      <p className="text-xs md:text-sm text-gray-600">Professional repair & support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">Store Information</h2>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                      <svg className="h-4 w-4 md:h-5 md:w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Address</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        123 Tech Street, Electronics Plaza
                        <br />
                        Downtown District, Mumbai - 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                      <svg
                        className="h-4 w-4 md:h-5 md:w-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Contact</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        +91 98765 43210
                        <br />
                        info@mobilehub.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Store Hours</h3>
                      <div className="text-xs md:text-sm text-gray-600 space-y-1">
                        <p>Mon-Sat: 10 AM - 9 PM</p>
                        <p>Sunday: 11 AM - 8 PM</p>
                        <p className="text-xs text-green-600 font-medium">Open Today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-sm">
                  Get Directions
                </Button>
                <Button size="sm" variant="outline" className="text-sm">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Store Image - Hidden on small mobile, smaller on tablet */}
              <div className="relative hidden sm:block">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="MobileHub Store Front"
                  width={500}
                  height={300}
                  className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="text-center p-2 md:p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-lg md:text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-xs md:text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center p-2 md:p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-lg md:text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Customers</div>
                </div>
                <div className="text-center p-2 md:p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-lg md:text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600">Support</div>
                </div>
              </div>

              {/* Compact Map Placeholder - Smaller on mobile */}
              <div className="relative bg-gray-100 rounded-lg md:rounded-xl overflow-hidden">
                <div className="aspect-video md:aspect-video flex items-center justify-center">
                  <div className="text-center space-y-1 md:space-y-2">
                    <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                      <svg className="h-4 w-4 md:h-6 md:w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">View Location</p>
                  </div>
                </div>
                <Button variant="ghost" className="absolute inset-0 w-full h-full rounded-none hover:bg-blue-50/50">
                  <span className="sr-only">Open map</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $99. Fast and secure shipping worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">2-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage for all devices with expert support.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your mobile needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the latest and most popular smartphones
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "iPhone 15 Pro",
                price: "$999",
                originalPrice: "$1099",
                image: "/placeholder.svg?height=300&width=200",
                badge: "Best Seller",
              },
              {
                name: "Samsung Galaxy S24",
                price: "$849",
                originalPrice: "$949",
                image: "/placeholder.svg?height=300&width=200",
                badge: "New",
              },
              {
                name: "Google Pixel 8",
                price: "$699",
                originalPrice: "$799",
                image: "/placeholder.svg?height=300&width=200",
                badge: "Sale",
              },
              {
                name: "OnePlus 12",
                price: "$799",
                originalPrice: "$899",
                image: "/placeholder.svg?height=300&width=200",
                badge: "Popular",
              },
            ].map((product, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(4.8)</span>
                    </div>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose MobileHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best mobile shopping experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Lightning Fast Delivery</h3>
                <p className="text-gray-600">Get your new phone delivered within 24 hours in major cities.</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Certified Quality</h3>
                <p className="text-gray-600">All devices are 100% authentic with manufacturer warranty.</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">30-Day Returns</h3>
                <p className="text-gray-600">Not satisfied? Return your device within 30 days for a full refund.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Get the latest deals, new arrivals, and tech news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">MobileHub</span>
              </div>
              <p className="text-gray-400">Your trusted partner for the latest mobile technology and accessories.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cases & Covers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Chargers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MobileHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
