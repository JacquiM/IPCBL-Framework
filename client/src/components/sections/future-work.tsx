import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, FolderOpen, Medal, Calendar } from "lucide-react";

export default function FutureWork() {
  const workItems = [
    {
      icon: ClipboardList,
      title: "Module Outcome Curriculum Development",
      description: "Encapsulate the approach to develop a curriculum shaped specifically to incorporate pre-defined skills aligned to module-outcome-level binary rubric.",
      status: "Planned for next iteration",
      color: "academic-primary"
    },
    {
      icon: FolderOpen,
      title: "Portfolio of Evidence Template",
      description: "Enhance the template content required in the portfolio of evidence that illustrates progression of student skills and application of knowledge.",
      status: "Development in progress",
      color: "academic-secondary"
    },
    {
      icon: Medal,
      title: "Training & Certification Milestones",
      description: "Introduce external training milestones to ensure certificates are obtained timeously within integrated capstone project context.",
      status: "Pilot phase planning",
      color: "academic-accent"
    }
  ];

  return (
    <section className="academic-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            Future Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Planned enhancements and development directions for the IPCBL framework
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="academic-card p-8">
                <CardContent className="p-0">
                  <div className={`bg-${item.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-inter font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-2" size={14} />
                    {item.status}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
