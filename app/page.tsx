'use client';

import { useEffect, useState } from 'react';

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  icon: string;
  delay: number;
}

const SkillIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent p-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-xs text-muted-foreground text-center group-hover:text-accent transition-colors">{name}</p>
  </div>
);

export default function CV() {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const icons = [
      { icon: '🔐', label: 'Security' },
      { icon: '⚙️', label: 'DevOps' },
      { icon: '💾', label: 'Systems' },
      { icon: '🔗', label: 'Network' },
      { icon: '📦', label: 'Containers' },
      { icon: '🛡️', label: 'Defense' },
    ];

    setFloatingIcons(
      icons.map((item, idx) => ({
        id: idx,
        x: Math.random() * 80,
        y: Math.random() * 60,
        icon: item.icon,
        delay: idx * 0.1,
      }))
    );
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item) => (
          <div
            key={item.id}
            className="absolute text-4xl opacity-5 animate-pulse"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animation: `float ${6 + item.id * 0.5}s infinite ease-in-out`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-black text-primary mb-3 leading-tight">
                Njau Wangari
              </h1>
              <p className="text-xl text-accent font-semibold tracking-wider">CYBERSECURITY & DEVOPS APPRENTICE</p>
              <p className="text-sm text-muted-foreground mt-2">Building secure infrastructure, one line of code at a time</p>
            </div>

            {/* Contact Info - Floating Cards */}
            <div className="space-y-3">
              <a
                href="mailto:njauwangari7@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent transition-all group cursor-pointer"
              >
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-mono text-accent group-hover:text-primary transition">njauwangari7@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+254743736358"
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent transition-all group cursor-pointer"
              >
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-mono text-accent group-hover:text-primary transition">+254 743 736 358</p>
                </div>
              </a>

              <a
                href="https://github.com/NOVASWAY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent transition-all group cursor-pointer"
              >
                <span className="text-2xl">🔗</span>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-mono text-accent group-hover:text-primary transition">github.com/NOVASWAY</p>
                </div>
              </a>
            </div>
          </div>

          {/* Icon Grid */}
          <div className="grid grid-cols-3 gap-8 justify-center">
            <SkillIcon name="Security" icon="🔐" />
            <SkillIcon name="Linux" icon="🐧" />
            <SkillIcon name="Docker" icon="🐳" />
            <SkillIcon name="Git" icon="📦" />
            <SkillIcon name="Networks" icon="🌐" />
            <SkillIcon name="Bash" icon="⚙️" />
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold text-primary mb-6">About Me</h2>
          <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              Cybersecurity trainee with a solid IT foundation and hands-on exposure to DevOps practices through a mentorship-based apprenticeship. Experienced with Linux systems, networking fundamentals, containerization basics, and version control. Currently completing a cybersecurity bootcamp with a focus on defensive security, system hardening, and threat awareness.
            </p>
            <p className="text-accent font-semibold">
              Seeking a DevOps/Security Operations apprenticeship to contribute, learn fast, and grow within real-world infrastructure and security environments.
            </p>
          </div>
        </section>

        {/* Technical Skills with Icons */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold text-primary mb-8">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                <span className="text-2xl">🖥️</span> Systems & Networking
              </h3>
              <ul className="text-sm text-muted-foreground space-y-3 ml-8">
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Linux administration</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> TCP/IP & networking</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Virtualization labs</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                <span className="text-2xl">🚀</span> DevOps Fundamentals
              </h3>
              <ul className="text-sm text-muted-foreground space-y-3 ml-8">
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Git & GitHub</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Docker containers</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> CI/CD pipelines</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                <span className="text-2xl">🔒</span> Cybersecurity
              </h3>
              <ul className="text-sm text-muted-foreground space-y-3 ml-8">
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Security principles</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Vulnerability assessment</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> System hardening</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience & Projects */}
        <section className="py-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                <span className="text-3xl">💼</span> Experience
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-foreground text-lg">DevOps Apprentice (Mentorship-Based)</h3>
                <p className="text-sm text-accent">Tesuji Systems</p>
                <p className="text-xs text-muted-foreground font-mono">January 2025 – September 2025</p>
                <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> <span>Set up & managed Linux-based development environments</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> <span>Practiced Git version control in collaborative workflows</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> <span>Containerized applications using Docker</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> <span>Learned CI/CD pipeline concepts & deployment</span></li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                <span className="text-3xl">🎯</span> Projects
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span>🐧</span> Linux Lab Environment
                  </h3>
                  <p className="text-sm text-muted-foreground">Built & configured VMs, practiced hardening and security configurations.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span>🐳</span> Docker Containerization
                  </h3>
                  <p className="text-sm text-muted-foreground">Deployed containerized apps, explored image management & orchestration.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span>🔎</span> Vulnerability Assessment
                  </h3>
                  <p className="text-sm text-muted-foreground">Conducted scans, documented findings, practiced remediation strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <span className="text-3xl">🎓</span> Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-foreground text-lg mb-2">Cybersecurity Bootcamp</h3>
              <p className="text-sm text-accent mb-2">Moringa School</p>
              <p className="text-xs text-muted-foreground mb-3">2025 – Present</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Hands-on fundamentals</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Defensive security</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Lab-based learning</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-foreground text-lg mb-2">Diploma in Information Technology</h3>
              <p className="text-sm text-accent mb-2">PAC University</p>
              <p className="text-xs text-muted-foreground mb-3">2025 Completed</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Networking</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Operating systems</li>
                <li className="flex items-center gap-2"><span className="text-accent">→</span> Infrastructure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-mono mb-4">
            Building secure, scalable infrastructure for tomorrow's challenges
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/NOVASWAY" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition">
              🔗
            </a>
            <a href="mailto:njauwangari7@gmail.com" className="text-2xl hover:text-accent transition">
              📧
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
