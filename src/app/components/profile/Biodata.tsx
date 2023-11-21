import React from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import "highlight.js/styles/androidstudio.css";
import CardResult from "./CardResult";

const Biodata = ({
  setRun,
  run,
}: {
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
  run: boolean;
}) => {
  const code = `const introduceMySelf = () => {
  const me = {
    firstName: "Usaid",
    middleName: "Alkamil",
    lastName: "Anshorulloh",
    nickName: "Aka",
    birthDay: "2 January 1999",
    techSkills: {
      language: [
        "JavaScript", 
        "TypeScript"
    ],
      frontEnd: [
        "HTML", 
        "CSS", 
        "ReactJS", 
        "NextJS", 
        "TailwindCSS"
    ],
      backEnd: [
        "NodeJS", 
        "ExpressJS", 
        "SequelizeJS", 
        "MySQL"
    ],
    },
  };

  let result = "Hello, I am ";

  for (const key in me) {
    if (key === "techSkills") {
      result += \`I have experience with the following tech skills: \`;
      for (const category in me.techSkills) {
        result += \`\${category}: \${me.techSkills[category].join(", ")}.\`;
      }
    } else if(key === "birthDay") {
    result += \`. I was born in \${me[key]}, \` 
    } 
    else if (key === "nickName"){
        result +=\`and people address me \${me[key]}\`
    }
    else {
        result += \`\${me[key]} \`;
    }
  }

 return result;
};
`;
  const highlightedCode = hljs.highlight(code, {
    language: "javascript",
  }).value;

  const handleRun = () => {
    setRun(!run);
  };

  return (
    <>
      <div className="bg-slate-200 p-6 relative rounded-md w-fit flex flex-wrap">
        <button
          onClick={handleRun}
          className="hidden lg:block lg:absolute right-6 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-semibold"
        >
          Run introduceMySelf()
        </button>
        <pre className="lg:w-fit w-52 overflow-scroll whitespace-pre-wrap">
          <code
            dangerouslySetInnerHTML={{
              __html: highlightedCode,
            }}
          />
        </pre>
      </div>
      <button
        onClick={handleRun}
        className="lg:hidden right-6 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-semibold"
      >
        Run introduceMySelf()
      </button>
      {run && (
        <div className="lg:hidden block bg-slate-200 p-4 rounded-md">
          <CardResult />
        </div>
      )}
    </>
  );
};

export default Biodata;
