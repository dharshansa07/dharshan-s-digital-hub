import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown, ArrowUp, ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness, Code2, Database, Download,
  Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Moon, Presentation, Send, Sparkles, Sun,
  TerminalSquare, Trophy, Users, Wrench, X, Zap, FolderGit2, Medal,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharshan S A — CSE Student & Python Developer" },
      { name: "description", content: "Portfolio of Dharshan S A, a Computer Science Engineering student focused on software, data science, and AI/ML." },
      { property: "og:title", content: "Dharshan S A — CSE Student & Python Developer" },
      { property: "og:description", content: "Explore Dharshan's skills, projects, education, certifications, and achievements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ================= EDITABLE CONTENT ================= */
const profile = {
  name: "DHARSHAN S A",
  role: "Computer Science Engineering Student",
  intro: "Passionate CSE student interested in software development, data science, artificial intelligence, and modern web technologies. I enjoy building practical projects and continuously improving my technical skills.",
  location: "Tamil Nadu, India",
  email: "your.email@example.com",
  github: "#",
  linkedin: "#",
  resume: "/resume.pdf",
};

const navItems = ["home", "about", "skills", "education", "projects", "certifications", "achievements", "contact"];

const interests = ["Software Development", "Web Development", "Python Programming", "Data Science", "AI & Machine Learning", "Database Management"];

// Replace "0+" with your real numbers
const stats = [
  { label: "Projects Completed", value: "0+" },
  { label: "Certifications", value: "0+" },
  { label: "Technical Skills", value: "0+" },
  { label: "Internships / Experience", value: "0" },
];

// level: 0–100, your self-rated comfort
const skillGroups = [
  { name: "Programming Languages", icon: Code2, skills: [["Python", 80], ["Java", 65], ["C", 60], ["JavaScript", 60]] },
  { name: "Web Technologies", icon: TerminalSquare, skills: [["HTML", 80], ["CSS", 75], ["JavaScript", 60], ["React.js", 50]] },
  { name: "Database", icon: Database, skills: [["MySQL", 70], ["MongoDB", 45], ["PostgreSQL", 50]] },
  { name: "Data Science & AI", icon: BrainCircuit, skills: [["NumPy", 70], ["Pandas", 70], ["Machine Learning", 55], ["Data Analysis", 65]] },
  { name: "Tools & Technologies", icon: Wrench, skills: [["Git", 70], ["GitHub", 75], ["VS Code", 85], ["Figma", 45]] },
] as const;

const education = [
  { degree: "B.E. / B.Tech in Computer Science Engineering", college: "College name placeholder", university: "University placeholder", year: "Year – Year", score: "CGPA: placeholder" },
  { degree: "Higher Secondary (Class XII)", college: "School name placeholder", university: "Board placeholder", year: "Year", score: "Percentage: placeholder" },
];

const projects = [
  { title: "Personal Portfolio Website", description: "A responsive portfolio website showcasing skills, projects, and credentials.", tags: ["HTML", "CSS", "JavaScript"], github: "#", demo: "#" },
  { title: "Warehouse Management System", description: "A system for managing warehouse inventory, stock movement, and operations.", tags: ["Java", "Python", "MySQL"], github: "#", demo: "#" },
  { title: "Data Analysis Project", description: "Analyze and visualize datasets to generate clear, useful insights.", tags: ["Python", "Pandas", "NumPy"], github: "#", demo: "#" },
];

const certifications = [
  { name: "Python Certification", org: "Organization placeholder", date: "Date", link: "#" },
  { name: "Data Science Certification", org: "Organization placeholder", date: "Date", link: "#" },
  { name: "AI / ML Certification", org: "Organization placeholder", date: "Date", link: "#" },
  { name: "Internship Certificate", org: "Organization placeholder", date: "Date", link: "#" },
];

const achievements = [
  { icon: Zap, title: "Hackathons", text: "Add hackathons you participated in." },
  { icon: Presentation, title: "Technical Events", text: "Add symposiums and tech events." },
  { icon: Users, title: "Workshops", text: "Add workshops you attended." },
  { icon: BriefcaseBusiness, title: "Internships", text: "Add internship milestones." },
  { icon: Medal, title: "Academic Achievements", text: "Add verified academic honours." },
  { icon: Trophy, title: "Coding Competitions", text: "Add contests and rankings." },
];

const experience = [
  { org: "Organization placeholder", program: "AI Driven Software Development Internship", duration: "Duration placeholder", tech: "AI tools • Python • Software development", description: "Add a concise summary of your responsibilities and learning outcomes.", certificate: "#" },
];
/* ==================================================== */

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => { setLight(localStorage.getItem("theme") === "light"); }, []);
  useEffect(() => { document.documentElement.classList.toggle("light", light); localStorage.setItem("theme", light ? "light" : "dark"); }, [light]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = navItems.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (v) setActive(v.target.id);
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.3] });
    sections.forEach((s) => observer.observe(s));
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#home" className="font-display text-lg font-bold"><span className="text-primary">D</span>HARSHAN.</a>
          <div className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => <a key={item} href={`#${item}`} className={`rounded-md px-2.5 py-2 text-xs font-semibold capitalize transition-colors ${active === item ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground"}`}>{item}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex"><a href={profile.resume} download>Resume <Download className="size-4" /></a></Button>
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setLight(!light)}>{light ? <Moon /> : <Sun />}</Button>
            <Button variant="ghost" size="icon" className="xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </nav>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-4 xl:hidden">{navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block border-b border-border/50 py-3 text-sm font-medium capitalize text-muted-foreground">{item}</a>)}<a href={profile.resume} download className="block py-3 text-sm font-semibold text-primary">Download Resume</a></div>}
      </header>

      <main>
        <section id="home" className="section-glow relative flex min-h-[94vh] items-center border-b border-border/50 px-5 pb-16 pt-28 sm:px-8">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <div className="reveal max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-accent-blue"><span className="size-1.5 animate-pulse rounded-full bg-primary" />Open to internships & opportunities</div>
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">Hello, I’m</p>
              <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-8xl">DHARSHAN <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">S A</span></h1>
              <h2 className="mt-5 font-display text-xl font-semibold text-muted-foreground sm:text-3xl">{profile.role}</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><a href="#projects">View My Projects <ArrowDown className="size-4" /></a></Button>
                <Button asChild variant="secondary"><a href="#contact">Contact Me</a></Button>
                <Button asChild variant="ghost"><a href={profile.resume} download>Download Resume <Download className="size-4" /></a></Button>
              </div>
              <div className="mt-8 flex items-center gap-2"><Socials /></div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="glass-panel relative overflow-hidden rounded-lg p-5 font-mono text-sm">
                <div className="mb-4 flex gap-1.5"><span className="size-3 rounded-full bg-destructive/70" /><span className="size-3 rounded-full bg-secondary/70" /><span className="size-3 rounded-full bg-primary/70" /></div>
                <pre className="whitespace-pre-wrap leading-7 text-muted-foreground"><span className="text-accent-purple">class</span> <span className="text-primary">Developer</span>:{"\n"}  name = <span className="text-accent-blue">"Dharshan S A"</span>{"\n"}  focus = [<span className="text-accent-blue">"Python"</span>, <span className="text-accent-blue">"Data"</span>, <span className="text-accent-blue">"AI/ML"</span>]{"\n"}  location = <span className="text-accent-blue">"Tamil Nadu"</span>{"\n\n"}  <span className="text-accent-purple">def</span> <span className="text-primary">build</span>(self):{"\n"}    <span className="text-accent-purple">return</span> <span className="text-accent-blue">"practical solutions"</span></pre>
              </div>
              <div className="glass-panel absolute -bottom-5 -left-5 rounded-md px-4 py-3"><p className="text-xs text-muted-foreground">Based in</p><p className="mt-1 flex items-center gap-2 text-sm font-semibold"><MapPin className="size-4 text-primary" />{profile.location}</p></div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="01 / About" title="Curious by nature. Driven by impact.">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-lg leading-9 text-muted-foreground">I’m a Computer Science Engineering student building a strong foundation in software, data, and problem solving. I enjoy learning by building, and I’m especially interested in:</p>
              <div className="mt-6 flex flex-wrap gap-2">{interests.map((i) => <span key={i} className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">{i}</span>)}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">{stats.map((s) => <article key={s.label} className="glass-panel rounded-md p-6 transition-transform duration-300 hover:-translate-y-1"><p className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-4xl font-bold text-transparent">{s.value}</p><p className="mt-2 text-sm text-muted-foreground">{s.label}</p></article>)}</div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 / Skills" title="Tools I’m growing with" shaded>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(({ name, icon: Icon, skills }) => <article key={name} className="glass-panel rounded-md p-6 transition-all duration-300 hover:border-primary/60"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="size-5" /></span><h3 className="font-display text-lg font-semibold">{name}</h3></div><div className="mt-6 space-y-4">{skills.map(([skill, level]) => <div key={skill}><div className="flex justify-between text-xs font-medium"><span>{skill}</span><span className="text-muted-foreground">{level}%</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${level}%` }} /></div></div>)}</div></article>)}</div>
        </Section>

        <Section id="education" eyebrow="03 / Education" title="Academic journey">
          <ol className="relative ml-3 space-y-8 border-l border-primary/40">{education.map((e) => <li key={e.degree} className="relative pl-8"><span className="absolute -left-[9px] top-6 size-4 rounded-full border-2 border-primary bg-background" /><article className="glass-panel rounded-md p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{e.year}</p><h3 className="mt-2 font-display text-xl font-semibold">{e.degree}</h3><p className="mt-1 text-sm text-muted-foreground">{e.college} • {e.university}</p><p className="mt-3 text-sm font-semibold">{e.score}</p></article></li>)}</ol>
        </Section>

        <Section id="projects" eyebrow="04 / Projects" title="Selected work" shaded>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((p, i) => <article key={p.title} className="glass-panel group flex flex-col overflow-hidden rounded-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"><div className="relative grid aspect-video place-items-center bg-gradient-to-br from-primary/25 via-accent to-secondary/25"><FolderGit2 className="size-12 text-primary transition-transform duration-300 group-hover:scale-110" /><span className="absolute left-4 top-4 font-display text-xs font-semibold text-primary">PROJECT {String(i + 1).padStart(2, "0")}</span></div><div className="flex flex-1 flex-col p-6"><h3 className="font-display text-xl font-semibold">{p.title}</h3><p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{p.description}</p><div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-blue">{t}</span>)}</div><div className="mt-5 flex gap-2"><Button asChild variant="secondary" size="sm"><a href={p.github}><Github className="size-4" /> GitHub</a></Button><Button asChild variant="ghost" size="sm"><a href={p.demo}>Live Demo <ArrowUpRight className="size-4" /></a></Button></div></div></article>)}</div>
        </Section>

        <Section id="certifications" eyebrow="05 / Certifications" title="Credentials & learning">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{certifications.map((c) => <article key={c.name} className="glass-panel overflow-hidden rounded-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"><div className="grid aspect-[4/3] place-items-center border-b border-border bg-gradient-to-br from-secondary/20 to-primary/20"><Award className="size-10 text-accent-purple" /></div><div className="p-5"><h3 className="font-display font-semibold">{c.name}</h3><p className="mt-1 text-xs text-muted-foreground">{c.org} • {c.date}</p><Button asChild variant="ghost" size="sm" className="mt-3 px-0"><a href={c.link}>View Certificate <ArrowUpRight className="size-4" /></a></Button></div></article>)}</div>
        </Section>

        <Section id="achievements" eyebrow="06 / Achievements" title="Beyond the classroom" shaded>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{achievements.map(({ icon: Icon, title, text }) => <article key={title} className="glass-panel rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"><span className="grid size-11 place-items-center rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"><Icon className="size-5" /></span><h3 className="mt-5 font-display text-lg font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></article>)}</div>
          <h3 className="mb-6 mt-16 flex items-center gap-3 font-display text-2xl font-semibold"><BriefcaseBusiness className="text-primary" />Experience & Internships</h3>
          <ol className="relative ml-3 space-y-8 border-l border-primary/40">{experience.map((x) => <li key={x.program} className="relative pl-8"><span className="absolute -left-[9px] top-6 size-4 rounded-full border-2 border-primary bg-background" /><article className="glass-panel rounded-md p-6 sm:p-8"><p className="text-xs font-semibold text-primary">{x.duration}</p><h4 className="mt-2 font-display text-xl font-semibold">{x.program}</h4><p className="mt-1 text-sm text-muted-foreground">{x.org}</p><div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2"><div><p className="text-xs font-semibold uppercase text-muted-foreground">Technologies learned</p><p className="mt-2 text-sm">{x.tech}</p></div><div><p className="text-xs font-semibold uppercase text-muted-foreground">Description</p><p className="mt-2 text-sm">{x.description}</p></div></div>{x.certificate && <Button asChild variant="secondary" size="sm" className="mt-5"><a href={x.certificate}>View Certificate <ArrowUpRight className="size-4" /></a></Button>}</article></li>)}</ol>
        </Section>

        <Section id="contact" eyebrow="07 / Contact" title="Let’s Connect">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="max-w-md leading-7 text-muted-foreground">I’m open to internships, entry-level opportunities, and conversations about software, data, and AI.</p><div className="mt-8 space-y-4"><ContactLine icon={Mail} label="Email" value={profile.email} /><ContactLine icon={Github} label="GitHub" value="Profile link placeholder" /><ContactLine icon={Linkedin} label="LinkedIn" value="Profile link placeholder" /><ContactLine icon={MapPin} label="Location" value={profile.location} /></div></div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-border px-5 py-10"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap justify-center gap-x-5 gap-y-2">{navItems.map((n) => <a key={n} href={`#${n}`} className="text-xs font-medium capitalize text-muted-foreground hover:text-primary">{n}</a>)}</div><div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"><p className="text-xs text-muted-foreground">© 2026 DHARSHAN S A. All Rights Reserved.</p><div className="flex gap-2"><Socials /></div></div></div></footer>

      {showTop && <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-1"><ArrowUp className="size-5" /></button>}
    </div>
  );
}

function Section({ id, eyebrow, title, children, shaded = false }: { id: string; eyebrow: string; title: string; children: React.ReactNode; shaded?: boolean }) {
  return <section id={id} className={`scroll-mt-16 px-5 py-24 sm:px-8 sm:py-28 ${shaded ? "section-glow bg-surface/40" : ""}`}><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2></div>{children}</div></section>;
}

function Socials() {
  return <><SocialLink href={profile.github} label="GitHub"><Github /></SocialLink><SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin /></SocialLink><SocialLink href={`mailto:${profile.email}`} label="Email"><Mail /></SocialLink></>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) { return <a href={href} aria-label={label} title={label} className="grid size-10 place-items-center rounded-md border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary [&_svg]:size-4">{children}</a>; }

function ContactLine({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) { return <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4"><span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="size-4" /></span><div className="min-w-0"><p className="text-xs text-muted-foreground">{label}</p><p className="truncate text-sm font-semibold">{value}</p></div></div>; }

const inputCls = "mt-2 h-11 w-full rounded-md border border-input bg-background/50 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.checkValidity()) { setSent(true); event.currentTarget.reset(); } };
  return <form onSubmit={submit} className="glass-panel rounded-md p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input required name="name" minLength={2} className={inputCls} placeholder="Your name" /></label><label className="text-sm font-semibold">Email<input required type="email" name="email" className={inputCls} placeholder="you@example.com" /></label></div><label className="mt-5 block text-sm font-semibold">Subject<input required name="subject" minLength={3} className={inputCls} placeholder="What's this about?" /></label><label className="mt-5 block text-sm font-semibold">Message<textarea required name="message" minLength={10} rows={5} className="mt-2 w-full resize-none rounded-md border border-input bg-background/50 p-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell me about the opportunity or project..." /></label><div className="mt-5 flex flex-wrap items-center gap-4"><Button type="submit">Send Message <Send className="size-4" /></Button>{sent && <p role="status" className="flex items-center gap-2 text-sm text-primary"><Sparkles className="size-4" />Thanks! Your message has been received.</p>}</div></form>;
}
