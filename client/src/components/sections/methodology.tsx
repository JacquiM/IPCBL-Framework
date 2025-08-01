import { Card, CardContent } from "@/components/ui/card";
import dsrMethodologySvg from "@/assets/dsr-methodology.svg";

import WhatsApp_Image_2025_07_29_at_12_54_54_e473bf17 from "@assets/WhatsApp Image 2025-07-29 at 12.54.54_e473bf17.jpg";

import DSR from "@assets/DSR.jpg";

export default function Methodology() {
  const steps = [
    {
      number: 1,
      title: "Problem Awareness",
      description: "Identify gaps in current ICT education methodologies"
    },
    {
      number: 2,
      title: "Suggestion",
      description: "Propose IPCBL framework combining multiple learning approaches"
    },
    {
      number: 3,
      title: "Development",
      description: "Create iterative framework implementation"
    },
    {
      number: 4,
      title: "Evaluation",
      description: "Test framework across multiple iterations with student cohorts"
    },
    {
      number: 5,
      title: "Conclusion",
      description: "Contribute validated framework to knowledge base"
    }
  ];

  return (
    <section id="methodology" className="academic-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            Research Design
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Design Science Research (DSR) methodology for systematic development and evaluation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-gray-50 p-8">
            <CardContent className="p-0">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <img 
                  src={DSR} 
                  alt="Design Science Research Methodology Flow" 
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-inter font-semibold mb-6">Design Science Research Approach</h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-3">
                  <div className="bg-academic-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mt-1 flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
