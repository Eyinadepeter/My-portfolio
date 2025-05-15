"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const experiences = [
    {
      period: "July 2025 - Present",
      role: "Web Developer",
      company: "Iravel Studio",
      color: "indigo",
      projects: [
        {
          title: "🌐 Website Development & Maintenance",
          description:
            "the creation of the foundation's website, including design, functionality, and content updates. Continuously ensuring the website aligns with the foundation's goals and provides an accessible, user-friendly experience.",
        },
        {
          title: "🧩 UI/UX Design & Prototyping",
          description:
            "Collaborated with designers and stakeholders to create wireframes and high-fidelity prototypes using tools like Figma. Focused on usability and accessibility to deliver intuitive interfaces aligned with user needs.",
        },
        {
          title: "🛠 CMS Integration & Customization",
          description:
            "Integrated and customized content management systems (WordPress, Sanity) to allow non-technical staff to manage and update site content. Developed custom themes and components to maintain brand consistency.",
        },
        {
          title: "📊 Performance Optimization & Analytics",
          description:
            "Optimized site speed and performance using best practices (lazy loading, image compression, code splitting). Set up Google Analytics and other tracking tools to monitor user behavior and inform decision-making.",
        },
      ],
    },
    {
      period: "October 2023 - July 2025",
      role: "Data Entry/Data Analysis On Ship PMS",
      company: "SDSD Prestige",
      color: "blue",
      projects: [
        {
          title: "🛠 Vessel Part Entry & E-Form Creation",
          description:
            "Created electronic forms (E-Forms) from scratch using Microsoft Excel to streamline data entry and validation for vessel components. Entered and updated detailed vessel part codes and inventory records with high accuracy.",
        },
        {
          title: "🌐 MAMS Website Maintenance Input",
          description:
            "Managed Planned Maintenance and vessel spare parts entry on the MAMS platform. Ensured accurate logging of equipment details, schedules, and spare part usage in line with maritime compliance protocols.",
        },
        {
          title: "📈 Report Generation & Backup",
          description:
            "Generated detailed reports and data summaries for internal use and audits. Performed regular data backups to secure information and minimize the risk of loss or corruption.",
        },
        {
          title: "✅ Data Validation & Quality Control",
          description:
            "Cross-checked entries and performed rigorous validation to identify and correct errors or inconsistencies. Maintained high standards of data quality and compliance with operational standards.",
        },
      ],
    },
    {
      period: "June 2022 - July 2023",
      role: "Web Developer",
      company: "Digitech Info Technologies (Tech Institute)",
      color: "violet",
      projects: [
        {
          title: "💻 Web Development Training",
          description:
            "Taught students foundational to advanced concepts in web development, including HTML, CSS, JavaScript, and modern frameworks. Guided learners through hands-on projects and real-world scenarios.",
        },
        {
          title: "🗄 Website Database Management",
          description:
            "Maintained and updated the Digitech website’s database, ensuring content accuracy, data security, and smooth integration with front-end systems.",
        },
        {
          title: "📚 Curriculum Design & Training Materials",
          description:
            "Designed custom training content, manuals, and e-learning modules tailored to different skill levels. Ensured alignment with industry standards and evolving tech trends.",
        },
        {
          title: "🎓 Interactive Training Delivery",
          description:
            "Delivered engaging sessions using a blend of teaching techniques, including live lectures, role-plays, coding simulations, and multimedia tools to enhance learning outcomes.",
        },
        {
          title: "📝 Reporting & Record Keeping",
          description:
            "Tracked student progress, maintained detailed training records, and prepared regular reports on performance, participation, and curriculum effectiveness.",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-slate-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experience" />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500">
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, 100, 200, 300, 400],
                      opacity: [1, 0.8, 0.6, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center z-10 relative border border-indigo-500/30">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                      <Zap className={`w-5 h-5 text-${exp.color}-400`} />
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-indigo-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-slate-300">{exp.company}</span>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {project.title}
                        </h4>
                        <p className="text-slate-300">{project.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
