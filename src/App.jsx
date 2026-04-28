import { useEffect, useState } from "react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "cover-letter", label: "Cover Letter" },
  { id: "resume", label: "Resume" },
  { id: "competencies", label: "Competencies" },
  { id: "contact", label: "Contact" },
];

const galleryImages = [
  {
    src: "/profile-clinic-1.jpg",
    alt: "Parmila Khapangi Magar in clinical dental training",
    className: "gallery-card",
  },
  {
    src: "/profile-group-1.jpg",
    alt: "Parmila Khapangi Magar with her dental hygiene team",
    className: "gallery-card",
  },
  {
    src: "/profile-clinic-2.jpg",
    alt: "Parmila Khapangi Magar providing patient care during training",
    className: "gallery-card",
  },
  {
    src: "/profile-group-2.jpg",
    alt: "Parmila Khapangi Magar with classmates outdoors",
    className: "gallery-card",
  },
];

const interviewImages = [
  {
    src: "/interview-1.jpg",
    alt: "Parmila providing dental care during clinical training",
  },
  {
    src: "/interview-2.jpg",
    alt: "Parmila working chairside during a dental hygiene procedure",
  },
];

const competencyPreview = [
  "I interviewed and reflected on key moments from clinic that deepened my understanding of empathy, communication, and professionalism in dental hygiene. One especially meaningful experience involved a screening patient who arrived for care shortly after putting his dog down. Although I followed clinic protocol correctly, I realized in that moment that providing quality care also means recognizing emotional distress and responding with compassion.",
  "Another important lesson came from managing communication with a long-term geriatric patient who was very attached to her four-month re-care schedule. Forgetting to return her call quickly led to unnecessary stress and taught me how essential timely, clear communication is in maintaining trust, professionalism, and patient confidence.",
];

const competencySections = [
  {
    title: "Provide Care for All Individuals and Communities",
    paragraphs: [
      "Last semester, I had an open chair during clinic and ended up winning a screening patient. He was very kind, and from the beginning I could tell he just wanted to get his teeth cleaned. Before we started, I explained that since this is a learning facility, everything must be checked and graded by an instructor, and that treatment usually takes multiple four-hour appointments. He understood and said that was fine.",
      "During that first visit, I completed his assessment and created his treatment plan, but I could not get it graded before the appointment ended. I told him that at his next visit, everything would need to be reviewed again before I could complete his cleaning. When he returned, I went to the waiting room to get him and could immediately tell something was wrong. As we walked back, I asked how his day was going, and he shared that he had just put his dog down that morning. He was clearly having a hard day.",
      "When I began reviewing his health history again, he became frustrated and said, \"Didn’t we already go over this?\" I explained that we must review it every visit to make sure nothing has changed. He then asked, \"I am getting my teeth cleaned today, right?\" I told him yes, but that my instructor needed to approve the treatment plan first. At that point, he said he was sorry but just wanted to leave. I walked him out and told him it was completely okay and that he could reschedule anytime.",
      "This experience really made me think about what it means to provide humane and empathetic care. From a clinical standpoint, I was doing everything correctly. I followed protocol, reviewed his health history, and made sure everything would be approved before treatment. But in that moment, I realized that he was not just a patient sitting in my chair; he was someone going through grief. His frustration was not about me or the process. He was emotionally overwhelmed.",
      "I stayed calm and did not take it personally. I also did not pressure him to stay just so I could complete my requirements. Instead, I respected how he was feeling. Even though I did not finish his cleaning, I believe I handled the situation with kindness and professionalism. Looking back, I truly do not think I could have forced the appointment to go differently without ignoring his emotional state.",
      "In the future, this experience will stay with me. It reminded me that dental hygiene is not just about completing procedures; it is about caring for people. Patients bring their personal lives, stress, and emotions into the clinic with them. I plan to continue leading with empathy and being aware of what someone might be going through, even if it is not obvious at first. Sometimes the most professional thing you can do is allow someone space. This experience strengthened my belief that providing good care means treating the whole person, not just their teeth.",
    ],
  },
  {
    title: "Communicate Effectively with Diverse Populations",
    paragraphs: [
      "Another important learning experience involved a geriatric patient who has been coming to our clinic for over ten years. She is extremely kind and sweet, and I began seeing her during my first semester. From the beginning, we never had any issues. She is currently on a four-month re-care schedule, although based on her oral health and hygiene, she could clinically qualify for a six-month re-care. However, she is very firm about being seen every four months.",
      "If she is not scheduled within that timeframe, she will call, leave voicemails, and send emails until she gets a response. At the time, I was unaware of how persistent she could be. During the summer semester, I informed her that she would not be due again until February, and she remembered that exactly. When February approached, I was focused on completing my clinical requirements and planned to schedule re-care patients afterward.",
      "She called and left me a voicemail while I was in class. I told myself I would return her call, but I forgot. By the following Monday, she had left additional voicemails at the clinic and sent emails to the program director and even the school. I then received an email from the program director instructing me to contact her as soon as possible. I called her that same day and scheduled her for the earliest available appointment.",
      "This situation taught me a lot about communication and responsibility. While I did not intentionally ignore her, forgetting to return her call created unnecessary stress for both the patient and the program. I realized that even small lapses in communication can escalate quickly, especially with long-term patients who are used to a certain level of consistency.",
      "Looking back, I could have handled the situation differently. I should have returned her call promptly, even if it was just to explain that my schedule was limited due to clinical requirements. Clear communication early on might have prevented the situation from escalating. At the same time, I also recognized that her behavior likely stems from comfort and familiarity with the clinic. After ten years of coming here, she feels secure and expects consistency. Understanding her personality and expectations helped me see the situation with more empathy rather than frustration.",
      "Moving forward, this experience has made me more aware of the importance of timely communication and professional responsibility. As a future dental hygienist, patients will rely on me not only for clinical care but also for clear and consistent communication. I plan to respond to voicemails and emails as soon as possible, even if it is just to acknowledge the message and set expectations. I also learned the value of being proactive. If I know my schedule is limited, I should communicate that early rather than assuming the patient will understand. This experience helped me grow professionally and reminded me that strong communication is just as important as strong clinical skills.",
    ],
  },
  {
    title: "Preparing for Clinic",
    paragraphs: [
      "One important lesson I learned in clinic was how to work with different instructors and adapt to their individual teaching styles. At first, I struggled with the fact that each instructor has their own preferred way of doing things. It was confusing because something one instructor approved, another might want done slightly differently.",
      "I quickly realized that bringing up what another instructor had taught me was not helpful. Saying, \"Well, the other instructor told me to do it this way,\" does not create a positive learning environment. Over time, I understood that none of them are wrong. They all have years of experience and simply approach procedures from slightly different perspectives. As students, we can learn from all of them and figure out what works best for us as future clinicians.",
      "There were times when I had to check myself and adjust my mindset. Instead of feeling frustrated or defensive, I learned to stay open and flexible. For example, if I wanted to complete a clinical competency and knew I did not feel fully comfortable doing it with a certain instructor, I would plan. I might reschedule the patient or look at the schedule in advance to see which instructor would be supervising that week. This was not about avoiding anyone but about setting myself up for success and reducing unnecessary stress.",
      "I also learned that mistakes are part of learning. Sometimes students can feel like instructors are being too harsh, but I began to see that most corrections come from a place of wanting us to be safe and competent providers. Even instructors are human and may express things differently, but their goal is always to help us grow.",
      "This experience helped me develop stronger self-awareness and professionalism. In the future, I know I will work with dentists, assistants, and other healthcare providers who all have different preferences and styles. Being adaptable and respectful will be essential. Instead of focusing on who is \"right,\" I will focus on learning from each experience and continuing to grow. Dental hygiene requires lifelong learning, and this lesson taught me that growth sometimes means adjusting your mindset. I now feel more confident navigating different personalities and teaching styles, which will help me tremendously as I enter professional practice.",
    ],
  },
];

const resumeSections = {
  profile: [
    "Motivated dental hygiene graduate with strong clinical training and a patient-centered approach to care.",
    "Known for attention to detail, calm chairside communication, and a commitment to building trust with every patient.",
  ],
  experience: [
    {
      title: "R&D Specialist",
      subtitle: "Bayer US, St. Louis, MO",
      period: "September 2022 - May 2024",
      bullets: [
        "Analyzed product formulations through systematic experimentation",
        "Engaged with cross-functional teams to advance research initiatives",
        "Established laboratory safety protocols and procedures",
        "Adapted to new technologies and methodologies",
        "Supported project management timelines and deliverables",
      ],
    },
    {
      title: "Phlebotomist",
      subtitle: "Biolife Plasma Center, St. Louis, MO",
      period: "June 2020 - June 2022",
      bullets: [
        "Performed venipuncture and patient screening",
        "Ensured donor safety and infection control compliance",
        "Maintained accurate medical documentation",
      ],
    },
    {
      title: "Cashier",
      subtitle: "Panera Bread, St. Louis, MO",
      period: "May 2017 - June 2019",
      bullets: [
        "Operated point-of-sale (POS) systems accurately and efficiently",
        "Delivered excellent customer service",
        "Trained new employees and supported team operations",
      ],
    },
  ],
  coreSkills: [
    "Local Anesthesia Certified",
    "CPR/BLS Certified",
    "Proficient in Itero Scanning",
    "Trained in Nitrous Oxide",
    "Cross-Functional Collaboration",
  ],
  languages: ["English", "Nepali", "Hindi"],
  references: [
    {
      name: "Megan Hassebrock",
      title: "Bayer R&D Manager",
      phone: "(314) 596-6995",
    },
    {
      name: "Jazmin Pintor",
      title: "Professional Peer",
      phone: "(314) 489-7658",
    },
  ],
};

const contactLinks = [
  { icon: "fas fa-envelope", label: "RDHParmila@gmail.com", href: "mailto:RDHParmila@gmail.com" },
  { icon: "fas fa-phone-alt", label: "(314) 226-0537", href: "tel:+13142260537" },
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/parmila-khapangi-021bb8198/",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell">
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg portfolio-navbar">
          <div className="container">
            <a className="navbar-brand brand-mark" href="#hero">
              <span className="brand-mark__monogram">PM</span>
              <span className="brand-mark__icon" aria-hidden="true">
                <i className="fas fa-tooth" />
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#portfolioNav"
              aria-controls="portfolioNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="portfolioNav">
              <ul className="navbar-nav align-items-lg-center gap-lg-2">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a
                      className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                      href={`#${link.id}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="hero-copy">
                  <p className="eyebrow">Portfolio</p>
                  <h1>Parmila Khapangi Magar</h1>
                  <p className="hero-subtitle">REGISTERED DENTAL HYGIENIST</p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="portrait-frame">
                  <img
                    src="/parmila-khapangi-magar.jpg"
                    alt="Portrait of Parmila Khapangi Magar"
                    className="img-fluid portrait-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="content-section profile-section">
          <div className="container">
            <div className="section-heading-wrap text-center">
              <p className="section-kicker">About</p>
              <h2 className="section-heading">PROFILE</h2>
            </div>
            <div className="row g-4 align-items-start">
              <div className="col-md-6">
                <div className="masonry-grid">
                  {galleryImages.map((image) => (
                    <figure className={image.className} key={image.src}>
                      <img src={image.src} alt={image.alt} className="img-fluid" />
                    </figure>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="bio-panel">
                  <p>
                    As a dental hygienist, I bring compassion, cultural understanding,
                    strong clinical skills, and a genuine desire to help others feel
                    confident in their oral health.
                  </p>
                  <p>
                    What sets me apart is my ability to connect with patients, make them
                    feel comfortable, and educate them in a way that is clear, respectful,
                    and easy to understand.
                  </p>
                  <p>
                    I believe oral health is more than just a healthy smile. It plays an
                    important role in overall health, confidence, and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cover-letter" className="content-section">
          <div className="container">
            <div className="section-heading-wrap">
              <p className="section-kicker">Intent</p>
              <h2 className="section-heading">Cover Letter</h2>
            </div>
            <div className="cover-letter-card">
              <div className="cover-letter-header">
                <div>
                  <h3>Parmila Khapangi</h3>
                  <p>Saint Louis, MO 63116</p>
                </div>
                <div className="cover-letter-contact">
                  <span>
                    <i className="fas fa-phone-alt" aria-hidden="true" />
                    (314) 226-0537
                  </span>
                  <span>
                    <i className="fas fa-envelope" aria-hidden="true" />
                    RDHParmila@gmail.com
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt" aria-hidden="true" />
                    January 26, 2026
                  </span>
                </div>
              </div>

              <div className="cover-letter-body">
                <div className="cover-letter-address">
                  <p>Hiring Manager</p>
                  <p>Dental Practice</p>
                  <p>Sioux Falls, SD</p>
                </div>

                <p className="cover-letter-salutation">Dear Hiring Manager,</p>

                <p>
                  I am writing to express my strong interest in the Registered Dental
                  Hygienist position at your practice. I am a motivated and compassionate
                  Dental Hygiene graduate with diverse clinical, healthcare, and
                  patient-centered experience, and I am eager to contribute my skills to a
                  team that values high-quality, preventative dental care.
                </p>

                <p>
                  My previous professional experience as a phlebotomist, research and
                  development technician, and cashier has strengthened my attention to
                  detail, manual dexterity, communication skills, and ability to remain
                  calm and efficient in fast-paced environments. These roles have allowed
                  me to work closely with diverse populations while maintaining safety,
                  professionalism, and patient comfort. I work well both independently and
                  as part of a collaborative team, and I value open communication and
                  continuous learning.
                </p>

                <p>
                  I would welcome the opportunity to bring my strong work ethic, positive
                  attitude, and dedication to patient care to your dental practice. Thank
                  you for taking the time to review my application. I look forward to the
                  opportunity to discuss further how my skills and enthusiasm would be an
                  asset to your team. Please feel free to reach out at (314) 226-0537 or
                  RDHParmila@gmail.com.
                </p>

                <div className="cover-letter-signoff">
                  <p>Sincerely,</p>
                  <h4>Parmila Khapangi</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="content-section">
          <div className="container">
            <div className="section-heading-wrap">
              <p className="section-kicker">Experience</p>
              <h2 className="section-heading">Resume</h2>
            </div>
            <div className="resume-panel">
              <div className="row g-4 align-items-start">
                <div className="col-lg-4">
                  <div className="resume-sidebar">
                    <span className="resume-label">Professional Overview</span>
                    <h3>Parmila Khapangi</h3>
                    <p>
                      Enthusiastic and detail-oriented Dental Hygiene student with diverse
                      healthcare and customer service experience, set to graduate in May
                      2026. Brings a strong background in patient interaction, clinical
                      procedures, and fast-paced work environments through experience in
                      phlebotomy, research and development, and frontline service roles.
                      Dedicated to promoting oral health, ensuring patient comfort, and
                      contributing positively to a collaborative dental team through
                      compassionate care, strong teamwork, and consistent communication.
                    </p>
                    <div className="resume-meta-list">
                      <div className="resume-meta-item">
                        <span className="resume-meta-title">Contact</span>
                        <div className="resume-contact-list">
                          <a className="resume-contact-link" href="tel:+13142260537">
                            <i className="fas fa-phone-alt" aria-hidden="true" />
                            <span>Phone: (314) 226 - 0537</span>
                          </a>
                          <a
                            className="resume-contact-link"
                            href="mailto:RDHParmila@gmail.com"
                          >
                            <i className="fas fa-envelope" aria-hidden="true" />
                            <span>Email: RDHParmila@gmail.com</span>
                          </a>
                          <a
                            className="resume-contact-link"
                            href="https://www.linkedin.com/in/parmila-khapangi-021bb8198/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in" aria-hidden="true" />
                            <span>LinkedIn Profile</span>
                          </a>
                        </div>
                      </div>
                      <div className="resume-meta-item">
                        <span className="resume-meta-title">Education</span>
                        <div className="resume-education-item">
                          <div className="resume-education-head">
                            <i className="fas fa-tooth" aria-hidden="true" />
                            <div>
                              <strong>Associate of Science Dental Hygiene</strong>
                              <span>Saint Louis Community College, St. Louis, MO</span>
                              <span>May 2026</span>
                            </div>
                          </div>
                        </div>
                        <div className="resume-education-item">
                          <div className="resume-education-head">
                            <i className="fas fa-graduation-cap" aria-hidden="true" />
                            <div>
                              <strong>Bachelor of Science</strong>
                              <span>Biology</span>
                              <span>UMSL, St. Louis, MO</span>
                              <span>May 2022</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="resume-document-shell">
                    <div className="resume-document-bar">
                      <span className="resume-dot" />
                      <span className="resume-dot" />
                      <span className="resume-dot" />
                      <p className="mb-0">Resume Snapshot</p>
                    </div>
                    <div className="resume-content">
                      <div className="resume-block">
                        <span className="resume-section-label">Work History</span>
                        {resumeSections.experience.map((item) => (
                          <div className="resume-entry" key={item.title}>
                            <div className="resume-entry-header">
                              <h4>{item.title}</h4>
                              <span>{item.subtitle}</span>
                            </div>
                            <p className="resume-entry-period">{item.period}</p>
                            <ul className="resume-list">
                              {item.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="resume-block">
                        <span className="resume-section-label">Key Skills</span>
                        <div className="resume-skill-grid">
                          {resumeSections.coreSkills.map((item) => (
                            <span className="resume-skill-chip" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="resume-block">
                        <span className="resume-section-label">Languages</span>
                        <div className="resume-skill-grid">
                          {resumeSections.languages.map((item) => (
                            <span className="resume-skill-chip" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="resume-block">
                        <span className="resume-section-label">Reference</span>
                        <div className="row g-3">
                          {resumeSections.references.map((item) => (
                            <div className="col-md-6" key={item.name}>
                              <div className="resume-reference-card">
                                <h4>{item.name}</h4>
                                <p className="resume-reference-title">{item.title}</p>
                                <p>{item.phone}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="interview" className="content-section interview-section">
          <div className="container">
            <div className="section-heading-wrap text-center">
              <p className="section-kicker">Reflection</p>
              <h2 className="section-heading">Dental Hygiene Professional Interview</h2>
            </div>
            <div className="bio-panel interview-panel">
              <div className="interview-float-gallery" aria-hidden="true">
                {interviewImages.map((image) => (
                  <figure className="interview-card" key={image.src}>
                    <img src={image.src} alt={image.alt} className="img-fluid" />
                  </figure>
                ))}
              </div>
              <p>
                I interviewed Anna Nguyen, RDH, a dental hygienist with nine years of
                experience who currently works in a public health clinic in Arnold,
                Missouri. She chose dental hygiene to pursue a healthcare career outside
                of a hospital setting, highlighting the flexibility within the profession.
              </p>
              <p>
                In her clinic, strict protocols are followed to ensure patient safety,
                including adherence to OSHA standards, consistent use of PPE, and
                infection control procedures based on CDC guidelines. Instrument
                sterilization is a top priority, reinforced through regular staff
                competency evaluations. For procedures like scaling and root planing
                (SRP), thorough documentation is required, including periodontal
                charting, radiographs, and a formal periodontal assessment.
              </p>
              <p>
                Anna explained that hygienists play an important role in patient care by
                collecting clinical data and collaborating with the dentist on treatment
                planning, while also administering local anesthesia when needed. She
                described improving patients&apos; quality of life as the most rewarding part
                of her career, but emphasized that dental hygiene can be both physically
                and mentally demanding. She stressed the importance of proper ergonomics
                and maintaining work-life balance to prevent burnout.
              </p>
              <p>
                She advised new graduates to develop strong teamwork, adaptability, and
                communication skills, while remaining open to feedback and committed to
                continuing education. Additionally, she emphasized the importance of
                advocating for oneself, maintaining ethical standards, and ensuring job
                expectations are clearly defined in writing. Overall, this interview
                highlighted the importance of balancing clinical excellence with personal
                well-being to build a sustainable and fulfilling career in dental hygiene.
              </p>
            </div>
          </div>
        </section>

        <section id="competencies" className="content-section competencies-section">
          <div className="container">
            <div className="section-heading-wrap text-center">
              <p className="section-kicker">Writing</p>
              <h2 className="section-heading">Competencies Assignment</h2>
            </div>
            <div className="feature-card competencies-card">
              <div className="row g-4">
                {competencyPreview.map((paragraph) => (
                  <div className="col-md-6" key={paragraph}>
                    <p className="competency-preview-copy mb-0">{paragraph}</p>
                  </div>
                ))}
              </div>
              <details className="competency-details">
                <summary>Learn more</summary>
                <div className="competency-details-body">
                  {competencySections.map((section) => (
                    <div className="competency-section-block" key={section.title}>
                      <h3>{section.title}</h3>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="section-heading-wrap">
                  <p className="section-kicker">Connect</p>
                  <h2 className="section-heading">Contact</h2>
                </div>
                <p className="contact-copy mb-0">
                  I would love to connect about dental hygiene opportunities,
                  mentorship, and patient-focused care.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="contact-card">
                  {contactLinks.map((item) => (
                    <a className="contact-link" href={item.href} key={item.label}>
                      <span className="contact-icon">
                        <i className={item.icon} aria-hidden="true" />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-links">
              <a href="#hero">Terms &amp; Support</a>
              <a href="#hero">Privacy Policy</a>
            </div>
            <p className="mb-0">Designed with care by magarweb.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
