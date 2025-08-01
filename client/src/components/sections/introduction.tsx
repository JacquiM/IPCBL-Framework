import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, GraduationCap } from "lucide-react";

export default function Introduction() {
  return (
    <section id="introduction" className="academic-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            Background & Objective
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Addressing the need for innovative teaching methodologies in ICT education
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="academic-card p-8">
            <CardContent className="p-0">
              <div className="bg-academic-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-inter font-semibold mb-3">Industry-Relevant Skills</h3>
              <p className="text-gray-600">
                A need for innovative teaching and learning methodologies that better equip students with practical, industry-relevant skills.
              </p>
            </CardContent>
          </Card>
          
          <Card className="academic-card p-8">
            <CardContent className="p-0">
              <div className="bg-academic-secondary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-inter font-semibold mb-3">Real-World Applications</h3>
              <p className="text-gray-600">
                Traditional assessment methods lack the integration of real-world applications, creating a disconnect between theory and practice.
              </p>
            </CardContent>
          </Card>
          
          <Card className="academic-card p-8">
            <CardContent className="p-0">
              <div className="text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[#42c2a6]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-inter font-semibold mb-3">Competency-Based Learning</h3>
              <p className="text-gray-600">
                A framework that promotes competency-based learning through project-driven and context-aware education.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objective */}
        <div className="bg-academic-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-inter font-bold mb-4">Research Objective</h3>
          <p className="text-lg md:text-xl font-light">
            To develop and evaluate a framework that fosters deep learning, problem-solving, and skill acquisition within an ICT education context.
          </p>
        </div>
      </div>
    </section>
  );
}
