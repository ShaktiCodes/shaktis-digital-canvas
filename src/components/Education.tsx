import { GraduationCap, Award, Trophy, Star } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Information Technology",
    university: "AKTU University",
    period: "2020 - 2024",
    grade: "First Class",
    description: "Comprehensive study of computer science fundamentals, software engineering principles, and modern web technologies."
  };

  const certifications = [
    {
      title: "IBM Professional Certificate",
      issuer: "IBM",
      year: "2024",
      type: "Professional",
      description: "Advanced certification in cloud computing and software development practices.",
      icon: <Award className="w-5 h-5" />,
      color: "primary"
    },
    {
      title: "Python Programming Certificate",
      issuer: "IIT Kanpur",
      year: "2023",
      type: "Technical",
      description: "Comprehensive Python programming course covering advanced concepts and applications.",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "secondary"
    },
    {
      title: "C++ Programming Mastery",
      issuer: "Udemy",
      year: "2023",
      type: "Online Course",
      description: "In-depth C++ programming course with focus on object-oriented programming and data structures.",
      icon: <Star className="w-5 h-5" />,
      color: "accent"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Participation",
      description: "Active participant in multiple hackathons, showcasing innovative problem-solving skills and rapid prototyping abilities.",
      icon: <Trophy className="w-5 h-5" />,
      color: "primary"
    },
    {
      title: "HackerRank 3-Star Coder",
      description: "Achieved 3-star rating on HackerRank, demonstrating strong algorithmic problem-solving capabilities.",
      icon: <Star className="w-5 h-5" />,
      color: "secondary"
    },
    {
      title: "Technical Leadership",
      description: "Led multiple technical projects during university, mentoring junior students and organizing coding workshops.",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "accent"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground-muted mt-6 max-w-2xl mx-auto">
            Continuous learning and professional development through formal education,
            certifications, and competitive programming.
          </p>
        </div>

        {/* Education */}
        <div className="glass-card glass-card-hover p-8 rounded-3xl mb-12">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-xl bg-primary/20 text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-2">{education.degree}</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-lg font-semibold text-foreground">{education.university}</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                  {education.period}
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  {education.grade}
                </span>
              </div>
              <p className="text-foreground-muted leading-relaxed">{education.description}</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-accent-text">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-${cert.color}/20 text-${cert.color}`}>
                    {cert.icon}
                  </div>
                  <div>
                    <span className={`px-2 py-1 bg-${cert.color}/10 text-${cert.color} rounded-full text-xs`}>
                      {cert.type}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-foreground-muted font-semibold">{cert.issuer}</span>
                  <span className="text-foreground-subtle">• {cert.year}</span>
                </div>
                <p className="text-foreground-subtle text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 gradient-accent-text">
            Notable Achievements
          </h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${achievement.color}/20 text-${achievement.color} flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-foreground-muted leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;