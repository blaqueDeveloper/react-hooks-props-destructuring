import React from "react";

function SocialApp() {
    const socialLinks = {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    };
  
    return (
      <div>
        <SocialMedia links={socialLinks} />
      </div>
    );
  }

  export default SocialApp