import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
            <Image
              src="/images/avatar.jpeg"
              alt="Developer Avatar"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Hi <span className="italic">visitors</span>,
          <br />
          I'm{" "}
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Gian!
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          I'm an Informatics undergraduate at UPN, currently studying Web Development. I've been trying out HTML5, CSS, JavaScript, and recently, I've also been learning NextJS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-medium rounded-full w-full sm:w-auto"
          >
            <Link href="https://github.com/gianabif14/" target="_blank" rel="noopener noreferrer">
              My Github
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium rounded-full w-full sm:w-auto bg-transparent"
          >
            <Link href="#contact" rel="noopener noreferrer">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
