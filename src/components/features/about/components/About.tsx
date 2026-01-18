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
      "https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
  },
  {
    id: 2,
    name: "Bishal Adhikari",
    role: "HR Manager",
    description: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
    image:
      "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
  },
  {
    id: 3,
    name: "Caitlyn King",
    role: "Product Designer",
    description:
      "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image:
      "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    name: "Owen Garcia",
    role: "Frontend Developer",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",
  },
  {
    id: 5,
    name: "Lulu Meyers",
    role: "Product Manager",
    description: "",
    image:
      "https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
  },
  {
    id: 6,
    name: "Orlando Diggs",
    role: "Backend Developer",
    description: "",
    image:
      "https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
  },
];

const About: React.FC = () => {
  return (
    <>
      <Section padding="hero">
        {/* Team Image Section */}
        <div className="relative">
          <div className=" relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team collaboration at Pravidhi Digital Innovation"
              className="w-full h-125 object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> */}
          <div className="absolute top-0 left-0 p-12 space-y-6">
            <p className="text-primary-200 text-sm font-medium tracking-wide uppercase">
              // ABOUT PRAVIDHI
            </p>
            <Heading level={1} className="text-white leading-tight max-w-2xl">
              Innovative full-service AI & Marketing Agency for Business Growth
            </Heading>
          </div>
        </div>
      </Section>
      <Section padding="hero">
        <div>
          {/* Header Section */}
          <div className="text-center mb-12">
            <Heading level={2} className="text-text mb-4">
              We are the people who make up Pravidhi
            </Heading>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Our philosophy is simple — hire great people and give them the
              resources and support to do their best work.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col">
                {/* Image Container */}
                <div className="aspect-square bg-slate-500 rounded-full mb-4 overflow-hidden">
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
                    <p className="text-sm text-muted">{member.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
