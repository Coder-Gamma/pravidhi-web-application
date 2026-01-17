import { Heading } from "@/components/UI/Heading";
import { Section } from "@/components/UI/Section";
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Riden Poudel",
    role: "Founder & CEO",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image:
      "https://unsplash.com/photos/a-man-in-glasses-smiles-for-the-camera-dtTtVicOXqE",
  },
  {
    id: 2,
    name: "Bishal Adhikari",
    role: "HR Manager",
    description: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Caitlyn King",
    role: "Product Designer",
    description:
      "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Owen Garcia",
    role: "Frontend Developer",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Lulu Meyers",
    role: "Product Manager",
    description: "",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Orlando Diggs",
    role: "Backend Developer",
    description: "",
    image: "/path/to/image6.jpg",
  },
 
];

const About: React.FC = () => {
  return (
    <Section padding="hero" className=" ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Heading level={2} className="text-text mb-4">
            We are the people who make up Pravidhi Digital Innovation Pvt Ltd
          </Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our philosophy is simple — hire great people and give them the
            resources and support to do their best work.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              {/* Image Container */}
              <div className="aspect-square bg-slate-500 rounded-lg mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                {member.description && (
                  <p className="text-sm text-gray-600">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
