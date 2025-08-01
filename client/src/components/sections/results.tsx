import { Card, CardContent } from "@/components/ui/card";

export default function Results() {
  const metrics = [
    { value: "623", label: "Students Involved", color: "text-academic-primary" },
    { value: "7,310", label: "Certifications & Badges", color: "text-academic-secondary" },
    { value: "3", label: "Iterations Completed", color: "text-academic-accent" },
    { value: "3", label: "Years of Research", color: "text-gray-600" }
  ];

  const iterations = [
    {
      title: "First Iteration",
      color: "text-academic-primary",
      details: [
        { label: "Students:", value: "256" },
        { label: "Total Achievements:", value: "3,496" },
        { label: "Per Student Avg:", value: "13.7" },
        { label: "Focus:", value: "IoT Integration" },
        { label: "Context:", value: "Connected Office (2022)" }
      ]
    },
    {
      title: "Second Iteration",
      color: "text-academic-secondary",
      details: [
        { label: "Students:", value: "262" },
        { label: "Total Achievements:", value: "2,392" },
        { label: "Per Student Avg:", value: "9.1" },
        { label: "Focus:", value: "Alternative Energy" },
        { label: "Context:", value: "EcoPower Logistics (2023)" }
      ]
    },
    {
      title: "Third Iteration",
      color: "text-academic-accent",
      details: [
        { label: "Students:", value: "105" },
        { label: "Total Achievements:", value: "1,422" },
        { label: "Per Student Avg:", value: "13.5" },
        { label: "Focus:", value: "Full-Stack Development" },
        { label: "Context:", value: "Tech Trends (2024)" }
      ]
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
                <div className="text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Iteration Results */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {iterations.map((iteration, index) => (
            <Card key={index} className="academic-card p-6">
              <CardContent className="p-0">
                <h3 className={`text-lg font-inter font-semibold mb-4 ${iteration.color}`}>
                  {iteration.title}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  {iteration.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{detail.label}</span>
                      <span className="font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Three-Year Research Overview */}
        <Card className="rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <CardContent className="p-0">
            <h3 className="text-2xl font-inter font-bold mb-6 text-center">
              Three-Year Research Overview (2022-2024)
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-academic-primary mb-2">623</div>
                <div className="text-gray-600">Total Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-academic-secondary mb-2">7,310</div>
                <div className="text-gray-600">Total Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-academic-accent mb-2">11.7</div>
                <div className="text-gray-600">Overall Average</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-academic-primary">First Iteration</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Students</span>
                    <span className="font-semibold">256</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Achievements</span>
                    <span className="font-semibold">3,496</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average</span>
                    <span className="font-semibold">13.7</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-academic-secondary">Second Iteration</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Students</span>
                    <span className="font-semibold">262</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Achievements</span>
                    <span className="font-semibold">2,392</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average</span>
                    <span className="font-semibold">9.1</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-academic-accent">Third Iteration</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Students</span>
                    <span className="font-semibold">105</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Achievements</span>
                    <span className="font-semibold">1,422</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average</span>
                    <span className="font-semibold">13.5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
