import Image from "next/image"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">Contact</h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          If you'd like to contact me, please use the form below. I'd love to connect with you and discuss IT issues.
        </p>

        <div className="mb-8">
          <a
            href="mailto:contact@gaf.my.id"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            📧 contact@gaf.my.id
          </a>
        </div>
      </div>
    </section>
  )
}
