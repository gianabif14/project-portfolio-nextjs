export default function ExperienceSection() {
  const experiences = [
    {
      company: "Google",
      role: "Lead Software Engineer at Google",
      period: "Nov 2019 - Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborated with a diverse team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      icon: "🔍",
    },
    {
      company: "Apple",
      role: "Junior Software Engineer at Apple",
      period: "Jan 2018 - Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      icon: "🍎",
    },
    {
      company: "Meta",
      role: "Software Engineer at Meta",
      period: "Jan 2017 - Oct 2018",
      description:
        "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      icon: "👥",
    },
  ]

  return (
    <section id="experience" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">EXPERIENCE</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-700 transition-colors duration-300">
                  {exp.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-0">{exp.role}</h3>
                  <span className="text-gray-400 text-sm font-medium">{exp.period}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
