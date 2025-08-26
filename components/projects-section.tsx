import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "PHP App",
      subtitle: "Web Temporary Files",
      description:
        "A simple PHP-based web application for uploading temporary files. Each uploaded file is automatically deleted after a specified time period (10 minutes) and is protected so that only the file owner can access it.",
      image: "/images/dash.png",
      link: "https://temporaryfile.wuaze.com/",
    },
    {
      title: "Next JS",
      subtitle: "Portfolio Website (This website)",
      description:
        "A portfolio website is a website that showcases a collection of a person's or company's best work, skills, and experience online, serving as a professional demonstration to attract clients, employers, or collaborators.",
      image: "/images/porto.png",
      link: "#home", // bisa juga '/#home' kalau mau pasti ke root
    },
  ];

  return (
    <section id="projects" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isExternal = /^https?:\/\//.test(project.link);
            const key = `${project.title}-${project.subtitle}`;

            const cardEl = (
              <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gray-600 transition-all duration-300">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={project.link === "#home"}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    {project.subtitle}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">
                      {project.title}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            );

            return isExternal ? (
              <a
                key={key}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {cardEl}
              </a>
            ) : (
              <Link key={key} href={project.link} className="block" scroll>
                {cardEl}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
