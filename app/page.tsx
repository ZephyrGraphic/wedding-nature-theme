import Image from "next/image"
import { Calendar, Clock, MapPin, Heart, Gift, Music, BookOpen } from "lucide-react"
import RSVPForm from "@/components/rsvp-form"
import Gallery from "@/components/gallery"
import CountdownTimer from "@/components/countdown-timer"
import LocationMap from "@/components/location-map"
import Timeline from "@/components/timeline"
import MusicPlayer from "@/components/music-player"
import GuestBook from "@/components/guest-book"
import FloatingLeaves from "@/components/floating-leaves"
import GiftRegistry from "@/components/gift-registry"
import LeafBorder from "@/components/leaf-border"

export default function Home() {
  // Wedding details - you can replace these with your actual data
  const weddingDetails = {
    brideAndGroom: "Sarah & John",
    date: "June 15, 2025",
    time: "3:00 PM",
    venue: "Forest Garden Resort",
    address: "123 Nature Path, Woodland Hills",
    story:
      "We met 5 years ago during a hiking trip and bonded over our love for nature. We're excited to celebrate our special day with you in the beautiful outdoors!",
    eventDate: new Date("2025-06-15T15:00:00"),
    mapCoordinates: { lat: -6.2088, lng: 106.8456 }, // Example coordinates (Jakarta)
    backgroundMusic: "/placeholder-music.mp3",
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 overflow-hidden">
      <FloatingLeaves />

      {/* Fixed Music Player */}
      <div className="fixed bottom-4 right-4 z-50">
        <MusicPlayer audioSrc={weddingDetails.backgroundMusic} />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-800/20 to-amber-700/20 mix-blend-overlay z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Wedding background"
            fill
            className="object-cover transition-transform duration-10000 transform scale-105 hover:scale-100"
            priority
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-30 transform rotate-180"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <LeafBorder>
            <div className="animate-fadeIn p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-bounce hover:scale-110 hover:-rotate-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Bride"
                    width={200}
                    height={200}
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg -ml-6 transition-bounce hover:scale-110 hover:rotate-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Groom"
                    width={200}
                    height={200}
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif text-green-900 mb-4 text-shadow-lg animate-float">
                {weddingDetails.brideAndGroom}
              </h1>
              <p className="text-xl md:text-2xl text-green-800 mb-8 font-light italic text-shadow-md animate-fadeIn delay-300">
                We're getting married
              </p>

              <div className="inline-block bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-8 animate-fadeIn delay-500 transition-smooth hover:shadow-2xl hover:bg-white/90">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <Calendar className="h-5 w-5 animate-breathe" />
                    <span>{weddingDetails.date}</span>
                  </div>
                  <div className="hidden md:block h-4 w-px bg-green-300"></div>
                  <div className="flex items-center gap-2 text-green-700">
                    <Clock className="h-5 w-5 animate-breathe" />
                    <span>{weddingDetails.time}</span>
                  </div>
                  <div className="hidden md:block h-4 w-px bg-green-300"></div>
                  <div className="flex items-center gap-2 text-green-700">
                    <MapPin className="h-5 w-5 animate-breathe" />
                    <span>{weddingDetails.venue}</span>
                  </div>
                </div>
                <CountdownTimer targetDate={weddingDetails.eventDate} />
              </div>
            </div>
          </LeafBorder>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white text-shadow-md">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6 flex items-center justify-center gap-2 animate-fadeIn">
            <Heart className="h-6 w-6 text-green-600 animate-pulse" />
            Our Story
            <Heart className="h-6 w-6 text-green-600 animate-pulse" />
          </h2>
          <LeafBorder variant="small" animationDelay={200}>
            <p className="text-lg text-green-700 leading-relaxed mb-10 p-6 animate-fadeIn">{weddingDetails.story}</p>
          </LeafBorder>

          <Timeline />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group aspect-square bg-white p-3 shadow-md rounded-lg overflow-hidden transform transition-bounce hover:scale-105 hover:rotate-2 border border-green-200 animate-slideInLeft">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Couple photo 1"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="group aspect-square bg-white p-3 shadow-md rounded-lg overflow-hidden transform transition-bounce hover:scale-105 hover:-rotate-2 border border-green-200 animate-fadeIn delay-200">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Couple photo 2"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="group aspect-square bg-white p-3 shadow-md rounded-lg overflow-hidden transform transition-bounce hover:scale-105 hover:rotate-2 border border-green-200 animate-slideInRight">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Couple photo 3"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-12 animate-fadeIn">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <LeafBorder variant="card" animationDelay={100}>
              <div className="p-6 bg-green-50 shadow-md transform transition-bounce hover:scale-105 hover:-rotate-1">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-breathe">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-green-700 mb-4">Ceremony</h3>
                <div className="flex flex-col gap-3 text-green-600">
                  <p className="flex items-center justify-center gap-2 transition-smooth hover:text-green-700">
                    <Calendar className="h-5 w-5" />
                    <span>{weddingDetails.date}</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 transition-smooth hover:text-green-700">
                    <Clock className="h-5 w-5" />
                    <span>3:00 PM - 4:00 PM</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 transition-smooth hover:text-green-700">
                    <MapPin className="h-5 w-5" />
                    <span>Garden Pavilion, {weddingDetails.venue}</span>
                  </p>
                </div>
              </div>
            </LeafBorder>

            <LeafBorder variant="card" animationDelay={300}>
              <div className="p-6 bg-green-50 shadow-md transform transition-bounce hover:scale-105 hover:rotate-1">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-breathe">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-green-700 mb-4">Reception</h3>
                <div className="flex flex-col gap-3 text-green-600">
                  <p className="flex items-center justify-center gap-2 transition-smooth hover:text-green-700">
                    <Calendar className="h-5 w-5" />
                    <span>{weddingDetails.date}</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 transition-smooth hover:text-green-700">
                    <Clock className="h-5 w-5" />
                    <span>4:30 PM - 10:00 PM</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 transition-smooth hover:text-green-700">
                    <MapPin className="h-5 w-5" />
                    <span>Grand Terrace, {weddingDetails.venue}</span>
                  </p>
                </div>
              </div>
            </LeafBorder>
          </div>

          <div className="mt-16">
            <LeafBorder variant="medium" animationDelay={500}>
              <div className="p-8 bg-green-50 shadow-md">
                <h3 className="text-2xl font-serif text-green-700 mb-4">Dress Code</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-green-200 text-green-800 px-4 py-2 rounded-full transition-bounce hover:scale-110 hover:bg-green-300">
                    Garden Formal
                  </div>
                  <div className="bg-amber-200 text-amber-800 px-4 py-2 rounded-full transition-bounce hover:scale-110 hover:bg-amber-300">
                    Earth Tones
                  </div>
                  <div className="bg-green-300 text-green-800 px-4 py-2 rounded-full transition-bounce hover:scale-110 hover:bg-green-400">
                    Natural Fabrics
                  </div>
                </div>
              </div>
            </LeafBorder>
          </div>
        </div>
      </section>

      {/* Gallery Section with Parallax */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=1000')] bg-fixed opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-12 animate-fadeIn">Gallery</h2>
          <LeafBorder variant="large" animationDelay={200}>
            <div className="p-6">
              <Gallery />
            </div>
          </LeafBorder>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6 animate-fadeIn">Location</h2>
          <p className="text-lg text-green-700 mb-8 animate-fadeIn delay-200">{weddingDetails.address}</p>
          <LeafBorder variant="medium" animationDelay={300}>
            <div className="h-80 rounded-lg overflow-hidden shadow-lg transform transition-bounce hover:scale-105">
              <LocationMap coordinates={weddingDetails.mapCoordinates} />
            </div>
          </LeafBorder>

          <div className="mt-8">
            <LeafBorder variant="small" animationDelay={500}>
              <div className="p-6 bg-green-50 shadow-md">
                <h3 className="text-xl font-serif text-green-700 mb-4">Getting There</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center transition-smooth hover:transform hover:scale-105">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-2 animate-breathe">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-green-700 mb-1">Parking Available</h4>
                    <p className="text-sm text-green-600">Free valet parking for all guests</p>
                  </div>
                  <div className="flex flex-col items-center transition-smooth hover:transform hover:scale-105">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-2 animate-breathe">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-green-700 mb-1">Shuttle Service</h4>
                    <p className="text-sm text-green-600">From major hotels in the area</p>
                  </div>
                </div>
              </div>
            </LeafBorder>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-amber-100 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-30 transform rotate-180"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6 flex items-center justify-center gap-2 animate-fadeIn">
            <Gift className="h-6 w-6 text-green-600 animate-breathe" />
            Gift Registry
          </h2>
          <p className="text-lg text-green-700 mb-8 animate-fadeIn delay-200">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
            we've created a registry for your convenience.
          </p>
          <LeafBorder variant="medium" animationDelay={300}>
            <div className="p-6">
              <GiftRegistry />
            </div>
          </LeafBorder>
        </div>
      </section>

      {/* Guest Book Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-100 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6 flex items-center justify-center gap-2 animate-fadeIn">
            <BookOpen className="h-6 w-6 text-green-600 animate-breathe" />
            Guest Book
          </h2>
          <p className="text-lg text-green-700 mb-8 animate-fadeIn delay-200">
            Leave us a message or share your well wishes for our journey together
          </p>
          <LeafBorder variant="medium" animationDelay={300}>
            <div className="p-6">
              <GuestBook />
            </div>
          </LeafBorder>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-amber-100 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6 animate-fadeIn">RSVP</h2>
          <p className="text-lg text-green-700 mb-8 animate-fadeIn delay-200">
            Please let us know if you can make it to our special day by May 15, 2025
          </p>
          <LeafBorder variant="medium" animationDelay={300}>
            <div className="p-6">
              <RSVPForm />
            </div>
          </LeafBorder>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-green-800 text-white text-center relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-20 transform rotate-180"></div>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg transition-bounce hover:scale-110">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Bride and Groom"
                width={200}
                height={200}
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          <p className="mb-2 font-serif text-xl animate-fadeIn">Thank you for being part of our special day</p>
          <p className="text-sm opacity-75 animate-fadeIn delay-200">© 2025 {weddingDetails.brideAndGroom}</p>

          <div className="mt-6 flex justify-center space-x-4 animate-fadeIn delay-300">
            <a href="#" className="text-white hover:text-amber-300 transition-colors transition-bounce hover:scale-110">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-amber-300 transition-colors transition-bounce hover:scale-110">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

