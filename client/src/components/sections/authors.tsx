import { Card, CardContent } from "@/components/ui/card";
import { University, GraduationCap, Users, Globe, Briefcase, Settings, ExternalLink } from "lucide-react";
import jacquiProfileSvg from "@/assets/jacqui-profile.svg";
import japieProfileSvg from "@/assets/japie-profile.svg";

import Japie_Greeff from "@assets/Japie Greeff.jpg";

import profile from "@assets/profile.jpg";

export default function Authors() {
  const jacquiRoles = [
    { icon: University, text: "Industry Coordinator @ Belgium Campus" },
    { icon: GraduationCap, text: "PhD Student @ NWU" },
    { icon: Users, text: "Y20 Working Group Member" },
    { icon: Globe, text: "BRICS Skills Expert" },
    { icon: Briefcase, text: "Director @ JPanda Solutions" },
    { icon: Settings, text: "Automation Consultant @ i1 Solutions" }
  ];

  const japieRoles = [
    { icon: University, text: "Research Coordinator @ Belgium Campus" },
    { icon: GraduationCap, text: "Extraordinary Professor @ NWU & Optentia" },
    { icon: Users, text: "SAPHE Chair" },
    { icon: Globe, text: "BRICS SDTI WG Lead Expert" },
    { icon: Settings, text: "NiTheCS Associate" }
  ];

  return (
    <section id="authors" className="academic-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
            Research Authors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading researchers in ICT education and pedagogical innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Jacqui Muller */}
          <Card className="bg-gray-50 rounded-2xl p-8 text-center">
            <CardContent className="p-0">
              <div className="w-32 h-32 mx-auto mb-6">
                <img 
                  src={profile} 
                  alt="Ms. Jacqui Muller" 
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-inter font-bold mb-2">Ms. Jacqui Muller</h3>
              <p className="text-academic-primary font-semibold mb-4">Chief Fidgeter</p>
              
              <div className="space-y-2 text-gray-600 mb-6">
                {jacquiRoles.map((role, index) => {
                  const Icon = role.icon;
                  return (
                    <p key={index} className="flex items-center justify-center text-sm">
                      <Icon className="mr-2 text-academic-primary" size={16} />
                      {role.text}
                    </p>
                  );
                })}
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">UiPath Most Valued Professional (MVP) and automation expert working at the intersection of business, technology, and education. Specialises in intelligent automation, AI-driven solutions, and bridging industry-academia gaps through skills development initiatives. Contributes to global frameworks as Data Analysis Expert for BRICS Standardisation & Y20 Working Groups whilst pursuing PhD research in automation governance and strategy.</p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://www.linkedin.com/in/jacqui-muller-957316131/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-academic-primary hover:text-academic-secondary transition-colors text-sm font-medium"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Connect on LinkedIn
                </a>
                <a 
                  href="https://orcid.org/0000-0003-2709-5444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-academic-primary hover:text-academic-secondary transition-colors text-sm font-medium"
                >
                  <ExternalLink className="mr-2" size={16} />
                  View ORCID Profile
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Prof Japie Greeff */}
          <Card className="bg-gray-50 rounded-2xl p-8 text-center">
            <CardContent className="p-0">
              <div className="w-32 h-32 mx-auto mb-6">
                <img 
                  src={Japie_Greeff} 
                  alt="Prof. Japie Greeff" 
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-inter font-bold mb-2">Prof. Japie Greeff</h3>
              <p className="text-academic-secondary font-semibold mb-4">Chief Researcher</p>
              
              <div className="space-y-2 text-gray-600 mb-6">
                {japieRoles.map((role, index) => {
                  const Icon = role.icon;
                  return (
                    <p key={index} className="flex items-center justify-center text-sm">
                      <Icon className="mr-2 text-academic-secondary" size={16} />
                      {role.text}
                    </p>
                  );
                })}
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">An Extraordinary Professor in the OPTENTIA research entity at North-West University and appointed at the School of Computer Science and Information Systems, where he previously served as Associate Professor and Deputy Director. He is also the Research Coordinator at Belgium Campus iTversity. In addition to his academic roles, Prof Greeff has extensive industry experience and has participated in start-ups, enterprise software giants and research institutes. He is an Associate of NITheCS and a member of the BRICS South African Skills Development, Applied Technology, and Innovation Working Group national committee.</p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://www.linkedin.com/in/japie-greeff-88390224/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-academic-secondary hover:text-academic-primary transition-colors text-sm font-medium"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Connect on LinkedIn
                </a>
                <a 
                  href="https://orcid.org/0000-0002-5743-8922" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-academic-secondary hover:text-academic-primary transition-colors text-sm font-medium"
                >
                  <ExternalLink className="mr-2" size={16} />
                  View ORCID Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
