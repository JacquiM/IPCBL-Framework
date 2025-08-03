import { Card, CardContent } from "@/components/ui/card";

export default function Results() {
  const metrics = [
    { 
      value: "256", 
      label: "First Iteration Students", 
      sublabel: "3,496 Achievements | 13.7 Average",
      color: "text-blue-600" 
    },
    { 
      value: "262", 
      label: "Second Iteration Students", 
      sublabel: "2,392 Achievements | 9.1 Average",
      color: "text-green-600" 
    },
    { 
      value: "105", 
      label: "Third Iteration Students", 
      sublabel: "1,422 Achievements | 13.5 Average",
      color: "text-purple-600" 
    },
    { 
      value: "3", 
      label: "Years of Research", 
      sublabel: "623 Total Students | 11.7 Overall Average",
      color: "text-gray-600" 
    }
  ];

  const iterations = [
    {
      title: "First Iteration (2022)",
      subtitle: "IoT Integration - Connected Office",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      keyLearning: "Real-world IoT implementation",
      outcome: "Strong technical foundation established",
      focus: "Hardware-software integration skills"
    },
    {
      title: "Second Iteration (2023)",
      subtitle: "Alternative Energy - EcoPower Logistics",
      color: "text-green-600", 
      bgColor: "bg-green-50",
      keyLearning: "Sustainability integration", 
      outcome: "Interdisciplinary collaboration enhanced",
      focus: "Environmental awareness and green technology"
    },
    {
      title: "Third Iteration (2024)",
      subtitle: "Full-Stack Development - Tech Trends",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      keyLearning: "Complete development lifecycle",
      outcome: "Industry-ready skill development", 
      focus: "End-to-end project management"
    }
  ];

  const academicValidation = [
    "Module outcome achievement verification",
    "Portfolio of Evidence (POE) assessment",
    "Peer review and collaboration metrics"
  ];

  const industryValidation = [
    "Industry certification alignment",
    "Professional skill development",
    "Industry partner feedback"
  ];

  return (
    <section id="results" className="academic-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            Implementation Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analysis of three iterations across different contexts and student cohorts
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="academic-card p-6 text-center">
              <CardContent className="p-0">
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-800 font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Iterations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {iterations.map((iteration, index) => (
            <Card key={index} className={`academic-card p-6 ${iteration.bgColor}`}>
              <CardContent className="p-0">
                <h3 className={`text-xl font-inter font-bold mb-2 ${iteration.color}`}>
                  {iteration.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {iteration.subtitle}
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-current pl-3">
                    <div className="text-sm font-medium text-gray-700">Key Learning</div>
                    <div className="text-sm text-gray-600">{iteration.keyLearning}</div>
                  </div>
                  <div className="border-l-4 border-current pl-3">
                    <div className="text-sm font-medium text-gray-700">Outcome</div>
                    <div className="text-sm text-gray-600">{iteration.outcome}</div>
                  </div>
                  <div className="border-l-4 border-current pl-3">
                    <div className="text-sm font-medium text-gray-700">Focus</div>
                    <div className="text-sm text-gray-600">{iteration.focus}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Validation Approach */}
        <Card className="rounded-2xl p-8 md:p-12 shadow-lg">
          <CardContent className="p-0">
            <h3 className="text-2xl font-inter font-bold mb-6 text-center">
              Validation Considerations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-academic-primary">
                  Academic Validation
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {academicValidation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-academic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-academic-secondary">
                  Industry Validation
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {industryValidation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-academic-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
