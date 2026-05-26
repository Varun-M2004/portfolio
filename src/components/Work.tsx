import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Real-Time Hand Sign Translator",
    category: "AI & ML / Deep Learning",
    tools: "Python, MediaPipe, BiLSTM, Tkinter, pyttsx3",
    description: "Built a system recognizing ASL gestures in real time. Extracted skeletal landmarks using MediaPipe, trained a BiLSTM model to capture temporal patterns, and built a GUI with speech output.",
    image: "/images/placeholder.webp",
  },
  {
    title: "Prepwise – Voice Interview Platform",
    category: "Full Stack / Generative AI",
    tools: "React.js, Gemini API, Web Speech API, UI Components",
    description: "Developed a real-time voice-based interview practice simulator with a responsive React.js interface. Integrated Gemini API for tailored, dynamic question generation and performance feedback.",
    image: "/images/placeholder.webp",
  },
  {
    title: "Medical Text Analysis & Records",
    category: "Natural Language Processing",
    tools: "Python, Flask, spaCy, REST APIs, HTML/CSS",
    description: "Built an end-to-end NLP system to extract and classify entities from unstructured clinical notes. Standardized patient records via a spaCy pipeline with a Flask REST backend.",
    image: "/images/placeholder.webp",
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (box.length === 0) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#b3b3b3', lineHeight: '1.5' }}>
                  {project.description}
                </p>
                <h4 style={{ marginTop: '16px' }}>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
