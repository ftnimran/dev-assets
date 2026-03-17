
import resume from "../assets/resume/resume.pdf";

const ResumeSection = () => {
  return (
    <div className="text-center mt-15">
      <h2 className="p-5">My Resume</h2>
      <a className="py-3 px-6.25 bg-[#38bdf8] text-black rounded-md font-bold no-underline" href={resume} download>
        Download Resume
      </a>
    </div>
  );
};

export default ResumeSection;
