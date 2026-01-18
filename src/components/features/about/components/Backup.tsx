import React from "react";

const Backup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section  */}
        <div className="space-y-6">
          <p className="text-accent text-sm font-medium tracking-wide uppercase">
            // ABOUT PRAVIDHI
          </p>
          <Heading level={2} className=" leading-tight max-w-md">
            Innovative full-service AI & Marketing Agency for Business Growth
          </Heading>
        </div>

        {/* Right Section - Mission */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-muted text-lg leading-relaxed">
            At Pravidhi Digital, we blend creativity, strategy, and AI
            innovation to fuel your brand's growth. From powerful marketing
            campaigns to intelligent digital solutions, we help you stand out,
            scale faster, and win in today's competitive world. Your success
            isn't just our goal—it's our obsession.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Backup;
