import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "MEA(R)N Stack Developer",
          "Mobile App Developer",
          "PHP/LARAVEL Developer",
          "React.js Developer",
          "ReactNative.js Developer",
          "Next.js Developer",
          "Nest.js Developer",
          "JavaScript Framework Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
