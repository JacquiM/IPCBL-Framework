import { Card, CardContent } from "@/components/ui/card";
import { Link2, FolderKanban, Network, Check, ArrowRight } from "lucide-react";
import ipcblFrameworkSvg from "@/assets/ipcbl-framework.svg";

import WhatsApp_Image_2025_07_29_at_12_54_56_9704f3bb from "@assets/WhatsApp Image 2025-07-29 at 12.54.56_9704f3bb.jpg";

export default function Framework() {
  const approaches = [
    {
      icon: Link2,
      title: "Integrated Learning",
      description: "Connects different academic disciplines, skills, and experiences to promote deeper understanding and transferable skills.",
      features: ["Interdisciplinary approach", "Holistic perspective", "Transferable skills"],
      color: "academic-primary"
    },
    {
      icon: FolderKanban,
      title: "Project-Based Learning",
      description: "Introduces students to real-world projects that enable their development of essential knowledge and skills.",
      features: ["Real-world projects", "Collaborative work", "Critical thinking"],
      color: "academic-secondary"
    },
    {
      icon: Network,
      title: "Context-Based Learning",
      description: "Incorporates real-world problems and challenges, allowing students to learn through practical application.",
      features: ["Real-world problems", "Practical application", "Industry relevance"],
      color: "academic-accent"
    }
  ];

  const principles = [
    "All projects within a module share a unified context",
    "Each capstone project develops specific subject expertise",
    "Project composition contributes to integrated learning",
    "External certifications validate industry skills"
  ];

  return (
    <section id="framework" className="academic-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            IPCBL Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combining three learning approaches for enhanced educational outcomes
          </p>
        </div>

        {/* Three Learning Approaches */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <Card key={index} className={`academic-card p-8 border-t-4 border-${approach.color}`}>
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className={`bg-${approach.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-inter font-bold">{approach.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {approach.description}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {approach.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className={`text-${approach.color} mr-2`} size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Framework Integration */}
        <Card className="rounded-2xl p-8 md:p-12 shadow-lg">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-inter font-bold mb-4">IPCBL Integration</h3>
              <p className="text-lg text-gray-600">
                Combines the individual approaches to realise the benefits of each when brought together
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <img 
                    src={WhatsApp_Image_2025_07_29_at_12_54_56_9704f3bb} 
                    alt="IPCBL Framework Diagram showing integration of three learning approaches" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h4 className="font-inter font-semibold text-lg mb-3">Framework Principles</h4>
                  <ul className="space-y-3 text-gray-600">
                    {principles.map((principle, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="text-academic-primary mr-3 mt-1 flex-shrink-0" size={16} />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
