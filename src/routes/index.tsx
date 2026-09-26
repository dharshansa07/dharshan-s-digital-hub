import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharshan S A — CSE Student & Python Developer" },
      { name: "description", content: "Portfolio of Dharshan S A, a Computer Science Engineering student focused on Python, data science, and AI/ML." },
      { property: "og:title", content: "Dharshan S A — CSE Student & Python Developer" },
      { property: "og:description", content: "Explore Dharshan's skills, projects, education, and experience in software, data science, and AI/ML." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["about", "skills", "projects", "education", "experience", "contact"];

const skillGroups = [
  { name: "Programming", icon: Code2, skills: ["Python", "Java", "C"] },
  { name: "Web", icon: TerminalSquare, skills: ["HTML", "CSS", "JavaScript"] },
  { name: "Data Science", icon: Database, skills: ["NumPy", "Pandas", "Matplotlib", "Data Analysis"] },
  { name: "AI / ML", icon: BrainCircuit, skills: ["Machine Learning", "Scikit-learn", "NLP", "AI Fundamentals"] },
  { name: "Database", icon: Database, skills: ["MySQL", "DBMS", "SQL"] },
  { name: "Tools", icon: Sparkles, skills: ["Git", "GitHub", "VS Code"] },
];

const projects = [
  { title: "Warehouse Management System", description: "An organized system concept for managing inventory, stock movement, and warehouse records.", tags: ["Python", "MySQL", "DBMS"] },
  { title: "Data Analysis Dashboard", description: "An exploratory dashboard concept that turns structured datasets into clear, actionable visual insights.", tags: ["Python", "Pandas", "Matplotlib"] },
  { title: "AI/ML Prediction Project", description: "A machine-learning project concept covering preprocessing, model training, evaluation, and prediction.", tags: ["Python", "Scikit-learn", "ML"] },
  { title: "Student Management System", description: "A structured application concept for maintaining student profiles, academic records, and queries.", tags: ["Java", "SQL", "DBMS"] },
  { title: "Python Data Structures", description: "A collection of practical implementations exploring core data structures and problem-solving patterns.", tags: ["Python", "Algorithms", "DSA"] },
];

const certifications = ["Python", "Data Science", "AI / ML", "Software Development"];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", ...navItems].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.3] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8">
          <a href="#home" className="min-w-0 font-display text-lg font-bold tracking-normal text-foreground"><span className="text-primary">D</span>HARSHAN.</a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item}`} className={`rounded-md px-3 py-2 text-xs font-semibold capitalize transition-colors ${active === item ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground"}`}>{item}</a>)}
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-4 lg:hidden">{navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block border-b border-border/50 py-3 text-sm font-medium capitalize text-muted-foreground">{item}</a>)}</div>}
      </header>

      <main>
        <section id="home" className="section-glow relative flex min-h-[94vh] items-center border-b border-border/50 px-5 pb-16 pt-28 sm:px-8">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <div className="reveal max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-accent-blue"><span className="size-1.5 rounded-full bg-primary" />Open to internships & opportunities</div>
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">Hello, I’m</p>
              <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-normal sm:text-7xl lg:text-8xl">DHARSHAN <span className="text-primary">S A</span></h1>
              <h2 className="mt-5 font-display text-xl font-semibold text-muted-foreground sm:text-3xl">Computer Science Engineering Student</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Passionate about programming, data science, artificial intelligence, and building practical technology solutions.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><a href="#projects">View My Projects <ArrowDown className="size-4" /></a></Button>
                <Button asChild variant="secondary"><a href="/resume.pdf" download>Download Resume <Download className="size-4" /></a></Button>
                <Button asChild variant="ghost"><a href="#contact">Contact Me</a></Button>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <SocialLink href="#" label="GitHub"><Github /></SocialLink><SocialLink href="#" label="LinkedIn"><Linkedin /></SocialLink><SocialLink href="mailto:your.email@example.com" label="Email"><Mail /></SocialLink>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-lg p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--glow-primary),transparent_48%)]" />
                <div className="relative flex h-full flex-col items-center justify-center border border-dashed border-primary/40 bg-background/25 text-center">
                  <div className="grid size-28 place-items-center rounded-full border border-primary/50 bg-primary/10"><span className="font-display text-4xl font-bold text-primary">DS</span></div>
                  <p className="mt-5 text-sm font-semibold">Professional profile photo</p><p className="mt-1 text-xs text-muted-foreground">Replace this placeholder with your image</p>
                </div>
              </div>
              <div className="glass-panel absolute -bottom-5 -left-5 rounded-md px-4 py-3"><p className="text-xs text-muted-foreground">Based in</p><p className="mt-1 flex items-center gap-2 text-sm font-semibold"><MapPin className="size-4 text-primary" />Tamil Nadu, India</p></div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="01 / About" title="Curious by nature. Driven by impact.">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div><p className="text-lg leading-9 text-muted-foreground">I’m a Computer Science Engineering student building a strong foundation in software development, Python, databases, and problem solving. I’m especially interested in turning data into insights and exploring how AI and machine learning can solve meaningful, real-world problems.</p><p className="mt-5 text-lg leading-9 text-muted-foreground">I value clear thinking, continuous learning, and creating technology that is both practical and dependable.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[{ icon: GraduationCap, title: "Education", text: "Computer Science Engineering" }, { icon: Code2, title: "Programming", text: "Python, Java & C" }, { icon: Database, title: "Data Science", text: "Analysis & visualization" }, { icon: BrainCircuit, title: "AI / ML", text: "Models & intelligent systems" }].map(({ icon: Icon, title, text }) => <article key={title} className="glass-panel rounded-md p-5 transition-transform duration-300 hover:-translate-y-1"><Icon className="size-6 text-primary" /><h3 className="mt-5 font-display font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 / Skills" title="Tools I’m growing with" shaded>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(({ name, icon: Icon, skills }) => <article key={name} className="glass-panel rounded-md p-6 transition-all duration-300 hover:border-primary/60"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="size-5" /></span><h3 className="font-display text-lg font-semibold">{name}</h3></div><div className="mt-6 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">{skill}</span>)}</div></article>)}</div>
        </Section>

        <Section id="projects" eyebrow="03 / Selected work" title="Projects & practical builds">
          <div className="grid gap-5 md:grid-cols-2">{projects.map((project, index) => <article key={project.title} className={`glass-panel group rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 ${index === 0 ? "md:col-span-2 md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-10" : ""}`}><div><span className="font-display text-xs font-semibold text-primary">PROJECT {String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 font-display text-xl font-semibold sm:text-2xl">{project.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="text-xs font-semibold text-accent-blue">#{tag.replace(" ", "")}</span>)}</div></div><div className="mt-6 flex gap-2 md:mt-0"><Button asChild variant="secondary" size="sm"><a href="#" aria-label={`${project.title} GitHub`}><Github className="size-4" /> GitHub</a></Button><Button asChild variant="ghost" size="sm"><a href="#" aria-label={`${project.title} live demo`}>Demo <ArrowUpRight className="size-4" /></a></Button></div></article>)}</div>
        </Section>

        <Section id="education" eyebrow="04 / Journey" title="Education & credentials" shaded>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div><h3 className="mb-5 flex items-center gap-3 font-display text-xl font-semibold"><GraduationCap className="text-primary" />Education</h3><div className="glass-panel border-l-2 border-l-primary p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Year placeholder</p><h4 className="mt-3 font-display text-xl font-semibold">Computer Science Engineering</h4><p className="mt-2 text-sm text-muted-foreground">College name placeholder</p><div className="mt-6 flex flex-wrap gap-2">{["Data Structures", "DBMS", "Operating Systems", "AI/ML", "Data Warehousing", "Big Data", "Software Engineering", "Theory of Computation"].map((subject) => <span key={subject} className="rounded-md bg-accent px-2.5 py-1.5 text-xs text-muted-foreground">{subject}</span>)}</div></div></div>
            <div><h3 className="mb-5 flex items-center gap-3 font-display text-xl font-semibold"><Award className="text-primary" />Certifications</h3><div className="grid gap-3 sm:grid-cols-2">{certifications.map((item) => <article key={item} className="glass-panel rounded-md p-5"><Award className="size-5 text-accent-purple" /><h4 className="mt-4 font-display font-semibold">{item} Certification</h4><p className="mt-1 text-xs text-muted-foreground">Organization • Date</p><Button asChild variant="ghost" size="sm" className="mt-4 px-0"><a href="#">View Certificate <ArrowUpRight className="size-4" /></a></Button></article>)}</div></div>
          </div>
        </Section>

        <Section id="experience" eyebrow="05 / Experience" title="Learning beyond the classroom">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
            <article className="glass-panel rounded-md p-6 sm:p-8"><div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><BriefcaseBusiness /></span><div className="min-w-0"><p className="text-xs font-semibold text-primary">DURATION PLACEHOLDER</p><h3 className="mt-2 font-display text-xl font-semibold">AI Driven Software Development Internship</h3><p className="mt-1 text-sm text-muted-foreground">Organization placeholder</p></div></div><div className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-2"><div><p className="text-xs font-semibold uppercase text-muted-foreground">Technologies learned</p><p className="mt-2 text-sm">AI tools • Software development • Python</p></div><div><p className="text-xs font-semibold uppercase text-muted-foreground">Key experience</p><p className="mt-2 text-sm">Add a concise summary of your responsibilities and learning outcomes.</p></div></div></article>
            <article className="glass-panel rounded-md p-6"><h3 className="flex items-center gap-3 font-display text-lg font-semibold"><Sparkles className="text-primary" />Achievements</h3><ul className="mt-5 space-y-4">{["Technical events", "Coding challenges", "Workshops", "Hackathons", "Certifications", "Academic achievements"].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><CheckCircle2 className="size-4 shrink-0 text-primary" />{item}</li>)}</ul><p className="mt-6 text-xs leading-5 text-muted-foreground">Add only verified achievements and participation details here.</p></article>
          </div>
        </Section>

        <section className="border-y border-border bg-primary/5 px-5 py-16 text-center sm:px-8"><Download className="mx-auto size-8 text-primary" /><h2 className="mt-5 font-display text-3xl font-bold">Want the complete overview?</h2><p className="mx-auto mt-3 max-w-xl text-muted-foreground">Download my resume for a concise view of my education, skills, projects, and experience.</p><Button asChild className="mt-7"><a href="/resume.pdf" download>Download My Resume <Download className="size-4" /></a></Button></section>

        <Section id="contact" eyebrow="06 / Contact" title="Let’s build something meaningful" shaded>
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="max-w-md leading-7 text-muted-foreground">I’m open to internships, entry-level opportunities, and conversations about software, data, and AI.</p><div className="mt-8 space-y-4"><ContactLine icon={Mail} label="Email" value="your.email@example.com" /><ContactLine icon={Linkedin} label="LinkedIn" value="Profile link placeholder" /><ContactLine icon={Github} label="GitHub" value="Profile link placeholder" /><ContactLine icon={MapPin} label="Location" value="Tamil Nadu, India" /></div></div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-border px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row"><p className="text-xs text-muted-foreground">© 2026 DHARSHAN S A. All Rights Reserved.</p><div className="flex gap-2"><SocialLink href="#" label="GitHub"><Github /></SocialLink><SocialLink href="#" label="LinkedIn"><Linkedin /></SocialLink><SocialLink href="mailto:your.email@example.com" label="Email"><Mail /></SocialLink></div></div></footer>
    </div>
  );
}

function Section({ id, eyebrow, title, children, shaded = false }: { id: string; eyebrow: string; title: string; children: React.ReactNode; shaded?: boolean }) {
  return <section id={id} className={`scroll-mt-16 px-5 py-24 sm:px-8 sm:py-28 ${shaded ? "section-glow bg-surface/40" : ""}`}><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2></div>{children}</div></section>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) { return <a href={href} aria-label={label} title={label} className="grid size-10 place-items-center rounded-md border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary [&_svg]:size-4">{children}</a>; }

function ContactLine({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) { return <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4"><span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="size-4" /></span><div className="min-w-0"><p className="text-xs text-muted-foreground">{label}</p><p className="truncate text-sm font-semibold">{value}</p></div></div>; }

function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.checkValidity()) { setSent(true); event.currentTarget.reset(); } };
  return <form onSubmit={submit} className="glass-panel rounded-md p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input required name="name" minLength={2} className="mt-2 h-11 w-full rounded-md border border-input bg-background/50 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your name" /></label><label className="text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 h-11 w-full rounded-md border border-input bg-background/50 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" /></label></div><label className="mt-5 block text-sm font-semibold">Message<textarea required name="message" minLength={10} rows={5} className="mt-2 w-full resize-none rounded-md border border-input bg-background/50 p-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell me about the opportunity or project..." /></label><div className="mt-5 flex flex-wrap items-center gap-4"><Button type="submit">Send Message <Send className="size-4" /></Button>{sent && <p role="status" className="text-sm text-primary">Message validated. Add your form service to receive submissions.</p>}</div></form>;
}