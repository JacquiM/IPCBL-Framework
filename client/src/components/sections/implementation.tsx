import { Card, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Cloud, CheckCircle, Wifi } from "lucide-react";
import connectedOfficeSvg from "@/assets/connected-office.svg";
import technologyStackSvg from "@/assets/technology-stack.svg";

import WhatsApp_Image_2025_07_29_at_12_54_55_0330dbcc from "@assets/WhatsApp Image 2025-07-29 at 12.54.55_0330dbcc.jpg";

import Tech_Stack from "@assets/Tech Stack.png";

export default function Implementation() {
  const technologies = [
    {
      title: "Automation Tools",
      description: "Power Automate, UiPath, Automation Anywhere",
      icon: Zap,
      color: "academic-primary"
    },
    {
      title: "Data Visualization",
      description: "Power BI, Qlik, Tableau",
      icon: BarChart3,
      color: "academic-secondary"
    },
    {
      title: "Cloud Services",
      description: "Microsoft Azure, AWS Lambda, Google Cloud Functions",
      icon: Cloud,
      color: "academic-accent"
    }
  ];

  const criteria = [
    "Balance between module outcomes and industry requirements",
    "Integration with existing university infrastructure",
    "Microsoft-based LMS and Active Directory compatibility",
    "Ease of deployment and maintenance",
    "Student accessibility and learning curve"
  ];

  const features = [
    { icon: Wifi, text: "IoT device integration and management" },
    { icon: Cloud, text: "Cloud-based data processing and storage" },
    { icon: BarChart3, text: "Real-time monitoring and visualization" },
    { icon: Zap, text: "Mobile application development" }
  ];

  return (
    <section id="implementation" className="academic-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technology considerations and practical deployment of the IPCBL framework
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="bg-white p-8 shadow-sm">
            <CardContent className="p-0">
              <h3 className="text-xl font-inter font-semibold mb-6 text-center">Technology Stack Architecture</h3>
              <div className="flex justify-center">
                <img 
                  src={Tech_Stack} 
                  alt="Technology Stack Architecture showing layered system design" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-inter font-semibold mb-6">Selection Criteria</h3>
              <ul className="space-y-3 text-gray-600">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-academic-primary mr-3 mt-1 flex-shrink-0" size={16} />
                    {criterion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Connected Office Use Case */}
        <div className="academic-gradient text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-inter font-bold mb-6 text-center">
            Connected Office Use Case
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6 opacity-90">
                Six-month experiment within an IT development module focusing on Internet of Things (IoT) concepts and integration skills.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="mr-3" size={20} />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                <img 
                  src={WhatsApp_Image_2025_07_29_at_12_54_55_0330dbcc} 
                  alt="Connected Office Architecture and Implementation Flow" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
