import Image from "next/image"

export default function TechStack() {
  const technologies = [
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "Node.js", icon: "/images/nodejs.png" },
    { name: "HTML", icon: "/images/html.png" },
    { name: "CSS", icon: "/images/css.png" },
  ]

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-gray-400 text-sm sm:text-base font-medium mb-8 tracking-wider uppercase">
          Experience With
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {technologies.map((tech) => (
            <div key={tech.name} className="group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
