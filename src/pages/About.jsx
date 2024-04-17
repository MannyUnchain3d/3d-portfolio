import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences} from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
      <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=42&pause=500&color=4C60FF&vCenter=true&random=false&width=435&lines=Hi!;Iaorana+!;Salut+!" alt="Hi!" />
      I'm <span className="blue-gradient_text font-semibold drop-shadow">Manny</span> 😎🤙
      </h1>

      <div className="mt-5 flex-col gap-3 text-slate-500">
        <p>Software and Game Developer based in Thailand, specializing in Unreal Engine 5.
          Originally from Tahiti, I'm on a lifelong journey of self-improvement, both in programming and personal growth.</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Toolkit</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer">
              <div key={skill.name} className="block-container w-20 h-20">
                <div className="btn-back rounded-xl"></div>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">The Journey so far...</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            In <b>2022</b>, I made a daring decision to quit my job and pursue my lifelong dream of becoming a game developer.
            Enrolling in <span className="blue-gradient_text font-semibold drop-shadow">42</span>, a free coding school renowned for its rigorous 1-month bootcamp-style admission process.
            I embarked on a 2-year learning adventure by building hands-on projects and collaborating with peers.
            This approach aligned with my aspirations and ensured I could carve my path in the industry, sharpening my skills along the way.</p> 
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={experience.date}
                  icon={<div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>}
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderColor: experience.iconBg,
                    boxShadow: 'none',
                   }}
                >
                  <div>
                    < h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                      {experience.company_name}
                    </p>
                    {/* <p style={{margin:0}}>
                      {experience.city}
                    </p> */}
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="mt-10 text-black-500 font-semibold flex justify-center">And more...</div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
)};

export default About;