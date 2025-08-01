import { FileText, Presentation, Code } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "Research Paper",
      description: "Complete academic publication",
      href: "#"
    },
    {
      icon: Presentation,
      title: "Presentation Slides",
      description: "Conference presentation materials",
      href: "https://www.canva.com/design/DAGuocGB234/zHEuGhKfBqLY0zcqecZ5TQ/view?utm_content=DAGuocGB234&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd30108184c"
    },
    {
      icon: Code,
      title: "Implementation Guide",
      description: "Technical implementation resources",
      href: "#"
    }
  ];

  return (
    <section className="academic-section bg-academic-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6">
          Resources & Downloads
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Access research materials and implementation guides
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.href}
                target={resource.title === "Presentation Slides" ? "_blank" : undefined}
                rel={resource.title === "Presentation Slides" ? "noopener noreferrer" : undefined}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors p-6 rounded-xl block backdrop-blur-sm"
              >
                <Icon className="mx-auto text-3xl mb-3" size={48} />
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm opacity-75">{resource.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
