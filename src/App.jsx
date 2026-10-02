
import { useState } from "react";

const techStack = [
  { name: "React", icon: "⚛️", description: "Frontend development" },
  { name: "Node.js", icon: "🟢", description: "Backend development" },
  { name: "Docker", icon: "🐳", description: "Containerization" },
  { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
  { name: "MongoDB", icon: "🍃", description: "Database systems" },
  { name: "Linux", icon: "🐧", description: "Server & systems" },
];

const projects = [
  {
    number: "01",
    title: "Cloud Deployment Platform",
    description:
      "Containerized applications deployed using Docker, Amazon ECR and ECS Fargate with production-style networking.",
    tags: ["Docker", "AWS ECS", "ECR", "Linux"],
  },
  {
    number: "02",
    title: "Real-Time Collaboration",
    description:
      "A real-time group communication platform using React, Node.js, Express, MongoDB and Socket.IO.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    number: "03",
    title: "Market Prediction System",
    description:
      "A machine-learning powered stock prediction system with a React dashboard and Python prediction service.",
    tags: ["React", "Python", "ML", "API"],
  },
];

const architecture = [
  {
    label: "React",
    icon: "⚛",
    type: "Application",
  },
  {
    label: "Docker",
    icon: "🐳",
    type: "Container",
  },
  {
    label: "ECR",
    icon: "📦",
    type: "Registry",
  },
  {
    label: "ECS Fargate",
    icon: "☁",
    type: "Compute",
  },
  {
    label: "CloudWatch",
    icon: "◉",
    type: "Monitoring",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f4] text-[#171717]">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none fixed inset-0 -z-10
          opacity-50
          
          [bg-size:60px_60px]
        "
      />

      <div
        className="
          pointer-events-none fixed
          left-1/4 top-20
          -z-10
          h-96 w-96
          rounded-full
          bg-red-900/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none fixed
          right-0 top-1/3
          -z-10
          h-96 w-96
          rounded-full
          bg-red-700/5
          blur-3xl
        "
      />

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header
        className="
          sticky top-0 z-50
          border-b border-black/10
          bg-[#f7f7f4]/90
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto flex max-w-7xl
            items-center justify-between
            px-6 py-4
            lg:px-8
          "
        >

          {/* Logo */}

          <button
            onClick={() => scrollTo("home")}
            className="
              group flex items-center gap-3
              font-mono text-lg font-bold
              tracking-tight
            "
          >
            <span
              className="
                flex h-9 w-9 items-center justify-center
                border border-red-900
                bg-red-900
                text-sm
                text-white
                transition
                group-hover:bg-red-800
              "
            >
              &lt;/&gt;
            </span>

            <span>
              dev
              <span className="text-red-900">.cloud</span>
            </span>
          </button>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["About", "about"],
              ["Stack", "stack"],
              ["Projects", "projects"],
              ["Deploy", "deploy"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="
                  font-mono text-xs font-medium
                  uppercase tracking-widest
                  text-neutral-600
                  transition
                  hover:text-red-900
                "
              >
                {label}
              </button>
            ))}
          </nav>

          {/* GitHub */}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              hidden items-center gap-2
              border border-neutral-300
              bg-white
              px-4 py-2
              font-mono text-xs font-semibold
              uppercase tracking-wider
              transition
              hover:border-red-900
              hover:bg-red-900
              hover:text-white
              sm:flex
            "
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <main id="home">

        <section
          className="
            mx-auto grid max-w-7xl
            items-center gap-16
            px-6 py-24
            lg:grid-cols-2
            lg:px-8 lg:py-32
          "
        >

          {/* Hero Content */}

          <div>

            {/* Status */}

            <div
              className="
                mb-8 inline-flex items-center gap-2
                border border-neutral-300
                bg-white
                px-3 py-2
                font-mono text-[10px]
                font-bold uppercase
                tracking-[0.18em]
                text-neutral-600
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-green-500
                  shadow-[0_0_10px_rgba(34,197,94,0.6)]
                "
              />

              Available for development
            </div>

            <p
              className="
                mb-5 font-mono text-xs
                font-bold uppercase
                tracking-[0.2em]
                text-red-900
              "
            >
              SOFTWARE ENGINEER
              <span className="mx-2 text-neutral-400">•</span>
              CLOUD & DEVOPS
            </p>

            <h1
              className="
                max-w-3xl
                text-6xl font-black
                leading-[0.9]
                tracking-[-0.06em]
                sm:text-7xl
                lg:text-8xl
              "
            >
              Build.
              <br />

              <span className="text-red-900">
                Containerize.
              </span>

              <br />

              Deploy.
            </h1>

            <p
              className="
                mt-8 max-w-xl
                text-base leading-7
                text-neutral-600
                sm:text-lg
              "
            >
              A developer focused on building scalable web applications,
              containerized systems and cloud infrastructure using modern
              technologies.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-3">

              <button
                onClick={() => scrollTo("projects")}
                className="
                  group flex items-center gap-4
                  bg-red-900
                  px-6 py-3.5
                  font-mono text-xs
                  font-bold uppercase
                  tracking-wider
                  text-white
                  transition
                  hover:bg-red-800
                  hover:shadow-lg
                "
              >
                Explore Projects
                <span
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>

              <button
                onClick={() => scrollTo("deploy")}
                className="
                  group flex items-center gap-4
                  border border-neutral-300
                  bg-white
                  px-6 py-3.5
                  font-mono text-xs
                  font-bold uppercase
                  tracking-wider
                  text-neutral-800
                  transition
                  hover:border-red-900
                  hover:text-red-900
                "
              >
                View Deployment
                <span>⌘</span>
              </button>

            </div>

            {/* Stats */}

            <div
              className="
                mt-12 grid max-w-xl
                grid-cols-3
                border-y border-neutral-300
              "
            >

              <div className="border-r border-neutral-300 py-5 pr-4">
                <strong className="block text-2xl font-black">
                  03+
                </strong>

                <span
                  className="
                    mt-1 block
                    font-mono text-[10px]
                    uppercase tracking-wider
                    text-neutral-500
                  "
                >
                  Years learning
                </span>
              </div>

              <div className="border-r border-neutral-300 px-4 py-5">
                <strong className="block text-2xl font-black">
                  15+
                </strong>

                <span
                  className="
                    mt-1 block
                    font-mono text-[10px]
                    uppercase tracking-wider
                    text-neutral-500
                  "
                >
                  Technologies
                </span>
              </div>

              <div className="py-5 pl-4">
                <strong className="block text-2xl font-black">
                  ∞
                </strong>

                <span
                  className="
                    mt-1 block
                    font-mono text-[10px]
                    uppercase tracking-wider
                    text-neutral-500
                  "
                >
                  Things to build
                </span>
              </div>

            </div>
          </div>

          {/* =====================================================
              TERMINAL
          ===================================================== */}

          <div className="relative">

            <div
              className="
                absolute -inset-5
                bg-red-900/5
                blur-3xl
              "
            />

            <div
              className="
                relative overflow-hidden
                border border-neutral-800
                bg-[#111111]
                shadow-2xl
              "
            >

              {/* Terminal Header */}

              <div
                className="
                  flex items-center
                  justify-between
                  border-b border-white/10
                  bg-[#181818]
                  px-4 py-3
                "
              >

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span
                  className="
                    font-mono text-[10px]
                    text-neutral-500
                  "
                >
                  developer@cloud:~
                </span>

                <span className="font-mono text-xs text-neutral-600">
                  •••
                </span>

              </div>

              {/* Terminal Body */}

              <div
                className="
                  min-h-125
                  p-6
                  font-mono text-xs
                  leading-6
                  text-neutral-300
                  sm:p-8
                "
              >

                <div>
                  <span className="text-red-400">➜</span>
                  <span className="ml-2 text-white">
                    whoami
                  </span>
                </div>

                <div className="mb-5 text-green-400">
                  software-engineer
                </div>

                <div>
                  <span className="text-red-400">➜</span>
                  <span className="ml-2 text-white">
                    cat skills.json
                  </span>
                </div>

                <div className="my-4 rounded border border-white/5 bg-black/30 p-4">

                  <div className="text-purple-400">
                    {"{"}
                  </div>

                  <div>
                    <span className="text-blue-400">
                      &nbsp;&nbsp;"frontend"
                    </span>
                    <span>: [</span>
                  </div>

                  <div className="text-green-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;"React",
                    "JavaScript",
                    "CSS"
                  </div>

                  <div>
                    &nbsp;&nbsp;],
                  </div>

                  <div>
                    <span className="text-blue-400">
                      &nbsp;&nbsp;"backend"
                    </span>
                    <span>: [</span>
                  </div>

                  <div className="text-green-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;"Node.js",
                    "Express",
                    "MongoDB"
                  </div>

                  <div>
                    &nbsp;&nbsp;],
                  </div>

                  <div>
                    <span className="text-blue-400">
                      &nbsp;&nbsp;"cloud"
                    </span>
                    <span>: [</span>
                  </div>

                  <div className="text-green-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;"Docker",
                    "ECR",
                    "ECS",
                    "Linux"
                  </div>

                  <div>
                    &nbsp;&nbsp;]
                  </div>

                  <div className="text-purple-400">
                    {"}"}
                  </div>

                </div>

                <div>
                  <span className="text-red-400">➜</span>
                  <span className="ml-2 text-white">
                    docker ps
                  </span>
                </div>

                <div
                  className="
                    mt-3 flex items-center gap-3
                    rounded
                    border border-green-500/20
                    bg-green-500/5
                    px-3 py-2
                    text-green-400
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  <span>frontend-container</span>

                  <span className="ml-auto font-bold">
                    UP
                  </span>
                </div>

                <div
                  className="
                    mt-5 animate-pulse
                    text-green-400
                  "
                >
                  ▋
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}

        <section
          id="about"
          className="
            mx-auto max-w-7xl
            scroll-mt-24
            border-t border-neutral-300
            px-6 py-24
            lg:px-8
          "
        >

          <div
            className="
              mb-12 flex items-center gap-3
              font-mono text-[10px]
              font-bold uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            <span className="text-red-900">
              01
            </span>

            ABOUT

            <span className="h-px w-16 bg-neutral-300" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">

            <h2
              className="
                text-4xl font-black
                leading-tight
                tracking-tight
                sm:text-5xl
              "
            >
              From writing code
              <br />
              to{" "}
              <span className="text-red-900">
                shipping systems.
              </span>
            </h2>

            <div
              className="
                max-w-xl
                text-base leading-8
                text-neutral-600
              "
            >

              <p>
                I enjoy building applications from the frontend
                all the way through deployment. My current focus is
                understanding how modern applications are designed,
                containerized and deployed in real cloud environments.
              </p>

              <p className="mt-6">
                I work across React, Node.js, MongoDB, Docker,
                Linux and AWS, while continuously learning system
                design, distributed systems and DevOps practices.
              </p>

            </div>
          </div>
        </section>

        {/* =========================================================
            TECHNOLOGY STACK
        ========================================================= */}

        <section
          id="stack"
          className="
            mx-auto max-w-7xl
            scroll-mt-24
            px-6 py-24
            lg:px-8
          "
        >

          <div
            className="
              mb-12 flex items-center gap-3
              font-mono text-[10px]
              font-bold uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            <span className="text-red-900">
              02
            </span>

            TECHNOLOGY STACK

            <span className="h-px w-16 bg-neutral-300" />
          </div>

          <div className="mb-10">

            <h2
              className="
                text-4xl font-black
                tracking-tight
                sm:text-5xl
              "
            >
              Tools I build with.
            </h2>

            <p
              className="
                mt-4 max-w-xl
                text-neutral-600
              "
            >
              A practical stack for building modern applications
              and cloud infrastructure.
            </p>

          </div>

          <div
            className="
              grid gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="
                  group
                  flex items-center gap-5
                  border border-neutral-300
                  bg-white
                  p-6
                  transition
                  hover:-translate-y-1
                  hover:border-red-900
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    flex h-14 w-14
                    shrink-0
                    items-center justify-center
                    border border-neutral-200
                    bg-[#f7f7f4]
                    text-2xl
                    transition
                    group-hover:border-red-900
                  "
                >
                  {tech.icon}
                </div>

                <div>

                  <h3 className="font-bold">
                    {tech.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      font-mono text-[10px]
                      uppercase tracking-wider
                      text-neutral-500
                    "
                  >
                    {tech.description}
                  </p>

                </div>

                <span
                  className="
                    ml-auto
                    text-xl
                    text-neutral-300
                    transition
                    group-hover:text-red-900
                  "
                >
                  ↗
                </span>

              </div>
            ))}

          </div>
        </section>

        {/* =========================================================
            ARCHITECTURE
        ========================================================= */}

        <section
          className="
            border-y border-neutral-300
            bg-[#eeeeea]
            py-24
          "
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div
              className="
                mb-12 flex items-center gap-3
                font-mono text-[10px]
                font-bold uppercase
                tracking-[0.2em]
                text-neutral-500
              "
            >
              <span className="text-red-900">
                03
              </span>

              DEPLOYMENT ARCHITECTURE

              <span className="h-px w-16 bg-neutral-300" />
            </div>

            <div
              className="
                mb-12 flex flex-col
                justify-between gap-6
                md:flex-row md:items-end
              "
            >

              <div>

                <h2
                  className="
                    text-4xl font-black
                    tracking-tight
                    sm:text-5xl
                  "
                >
                  From localhost to cloud.
                </h2>

                <p
                  className="
                    mt-4 max-w-2xl
                    leading-7 text-neutral-600
                  "
                >
                  The same application can move through a
                  predictable containerized deployment pipeline.
                </p>

              </div>

              <div
                className="
                  flex items-center gap-2
                  border border-green-600/30
                  bg-green-50
                  px-4 py-2
                  font-mono text-[10px]
                  font-bold
                  tracking-wider
                  text-green-700
                "
              >
                <span
                  className="
                    h-2 w-2 rounded-full
                    bg-green-500
                    animate-pulse
                  "
                />

                DEPLOYMENT READY
              </div>

            </div>

            {/* Architecture */}

            <div
              className="
                grid gap-4
                md:grid-cols-5
              "
            >

              {architecture.map((item, index) => (
                <div
                  key={item.label}
                  className="
                    relative flex
                    items-center
                    md:block
                  "
                >

                  <div
                    className="
                      w-full
                      border border-neutral-300
                      bg-white
                      p-6
                      transition
                      hover:-translate-y-1
                      hover:border-red-900
                      hover:shadow-lg
                    "
                  >

                    <div
                      className="
                        mb-5 flex
                        h-12 w-12
                        items-center justify-center
                        bg-red-900
                        text-xl text-white
                      "
                    >
                      {item.icon}
                    </div>

                    <strong className="block text-sm">
                      {item.label}
                    </strong>

                    <small
                      className="
                        mt-2 block
                        font-mono text-[10px]
                        uppercase tracking-wider
                        text-neutral-500
                      "
                    >
                      {item.type}
                    </small>

                  </div>

                  {index < architecture.length - 1 && (
                    <div
                      className="
                        hidden
                        md:absolute
                        md:-right-4
                        md:top-1/2
                        md:z-10
                        md:block
                        md:-translate-y-1/2
                        md:text-xl
                        md:text-red-900
                      "
                    >
                      →
                    </div>
                  )}

                </div>
              ))}

            </div>

            {/* Pipeline */}

            <div
              className="
                mt-8
                border border-neutral-800
                bg-[#111111]
                p-6
                font-mono text-xs
                leading-7
                text-neutral-300
              "
            >

              <div className="text-neutral-500">
                # deployment pipeline
              </div>

              <div>
                <span className="text-red-400">
                  docker
                </span>{" "}
                build -t frontend .
              </div>

              <div>
                <span className="text-red-400">
                  docker
                </span>{" "}
                push frontend:v1
              </div>

              <div>
                <span className="text-red-400">
                  aws
                </span>{" "}
                ecs update-service --force-new-deployment
              </div>

              <div className="mt-2 text-green-400">
                ✓ deployment initiated
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================
            PROJECTS
        ========================================================= */}

        <section
          id="projects"
          className="
            mx-auto max-w-7xl
            scroll-mt-24
            px-6 py-24
            lg:px-8
          "
        >

          <div
            className="
              mb-12 flex items-center gap-3
              font-mono text-[10px]
              font-bold uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            <span className="text-red-900">
              04
            </span>

            PROJECTS

            <span className="h-px w-16 bg-neutral-300" />
          </div>

          <div
            className="
              mb-10 flex flex-col
              justify-between gap-4
              md:flex-row md:items-end
            "
          >

            <div>

              <h2
                className="
                  text-4xl font-black
                  tracking-tight
                  sm:text-5xl
                "
              >
                Things I've built.
              </h2>

              <p className="mt-4 text-neutral-600">
                Projects that combine software engineering
                with practical infrastructure.
              </p>

            </div>

            <span
              className="
                font-mono text-xs
                font-bold tracking-wider
                text-red-900
              "
            >
              03 PROJECTS
            </span>

          </div>

          <div
            className="
              grid gap-4
              lg:grid-cols-3
            "
          >

            {projects.map((project) => (
              <article
                key={project.number}
                className="
                  group
                  flex min-h-90
                  flex-col
                  border border-neutral-300
                  bg-white
                  p-7
                  transition
                  hover:-translate-y-1
                  hover:border-red-900
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      font-mono text-xs
                      font-bold
                      text-red-900
                    "
                  >
                    {project.number}
                  </span>

                  <span
                    className="
                      text-xl
                      text-neutral-300
                      transition
                      group-hover:text-red-900
                    "
                  >
                    ↗
                  </span>

                </div>

                <h3
                  className="
                    mt-12
                    text-2xl font-black
                    tracking-tight
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm leading-7
                    text-neutral-600
                  "
                >
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        border border-neutral-200
                        bg-[#f7f7f4]
                        px-2.5 py-1
                        font-mono text-[9px]
                        font-bold uppercase
                        tracking-wider
                        text-neutral-600
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>
        </section>

        {/* =========================================================
            LIVE ENVIRONMENT
        ========================================================= */}

        <section
          id="deploy"
          className="
            mx-auto max-w-7xl
            scroll-mt-24
            px-6 py-24
            lg:px-8
          "
        >

          <div
            className="
              mb-12 flex items-center gap-3
              font-mono text-[10px]
              font-bold uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            <span className="text-red-900">
              05
            </span>

            LIVE ENVIRONMENT

            <span className="h-px w-16 bg-neutral-300" />
          </div>

          <div
            className="
              overflow-hidden
              border border-neutral-800
              bg-[#111111]
              shadow-2xl
            "
          >

            <div className="grid lg:grid-cols-[220px_1fr]">

              {/* Sidebar */}

              <aside
                className="
                  border-b border-white/10
                  bg-[#171717]
                  p-4
                  lg:border-b-0
                  lg:border-r
                "
              >

                <div
                  className="
                    mb-8
                    flex items-center gap-2
                    px-3 py-2
                    font-mono text-sm
                    font-bold
                    text-white
                  "
                >
                  <span className="text-red-400">
                    ☁
                  </span>

                  cloud.app
                </div>

                <div className="space-y-1">

                  {[
                    ["overview", "◈", "Overview"],
                    ["services", "▣", "Services"],
                    ["logs", "≋", "Logs"],
                  ].map(([tab, icon, label]) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        flex w-full items-center gap-3
                        px-3 py-3
                        text-left
                        font-mono text-xs
                        transition
                        ${
                          activeTab === tab
                            ? "bg-red-900 text-white"
                            : "text-neutral-500 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      <span>{icon}</span>
                      {label}
                    </button>
                  ))}

                </div>

              </aside>

              {/* Dashboard */}

              <div className="min-h-112 p-6 sm:p-8">

                {/* Header */}

                <div
                  className="
                    flex flex-col
                    justify-between gap-4
                    border-b border-white/10
                    pb-6
                    sm:flex-row
                    sm:items-center
                  "
                >

                  <div>

                    <span
                      className="
                        font-mono text-[9px]
                        font-bold
                        tracking-widest
                        text-neutral-600
                      "
                    >
                      CLUSTER
                    </span>

                    <h3
                      className="
                        mt-1
                        font-mono text-lg
                        font-bold text-white
                      "
                    >
                      frontend-production
                    </h3>

                  </div>

                  <span
                    className="
                      inline-flex items-center gap-2
                      self-start
                      border border-green-500/20
                      bg-green-500/5
                      px-3 py-1.5
                      font-mono text-[9px]
                      font-bold
                      tracking-widest
                      text-green-400
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    HEALTHY
                  </span>

                </div>

                {/* Overview */}

                {activeTab === "overview" && (
                  <div className="mt-6">

                    <div
                      className="
                        grid gap-3
                        sm:grid-cols-2
                        xl:grid-cols-4
                      "
                    >

                      {[
                        ["RUNNING TASKS", "01", "Desired: 01"],
                        ["CPU", "12%", "0.5 vCPU"],
                        ["MEMORY", "28%", "1 GB"],
                        ["STATUS", "RUNNING", "Fargate"],
                      ].map(([label, value, sub], index) => (
                        <div
                          key={label}
                          className="
                            border border-white/10
                            bg-white/2
                            p-5
                          "
                        >

                          <span
                            className="
                              font-mono text-[9px]
                              font-bold
                              tracking-wider
                              text-neutral-600
                            "
                          >
                            {label}
                          </span>

                          <strong
                            className={`
                              mt-3 block
                              text-2xl font-black
                              ${
                                index === 3
                                  ? "text-green-400"
                                  : "text-white"
                              }
                            `}
                          >
                            {value}
                          </strong>

                          <small className="text-neutral-600">
                            {sub}
                          </small>

                        </div>
                      ))}

                    </div>

                    {/* Service */}

                    <div
                      className="
                        mt-4
                        flex flex-col
                        gap-4
                        border border-white/10
                        bg-white/2
                        p-5
                        sm:flex-row
                        sm:items-center
                      "
                    >

                      <div
                        className="
                          flex h-11 w-11
                          shrink-0
                          items-center justify-center
                          bg-red-900
                          text-xl
                        "
                      >
                        ⚛
                      </div>

                      <div className="flex-1">

                        <strong className="block text-sm text-white">
                          react-frontend
                        </strong>

                        <span className="font-mono text-[10px] text-neutral-600">
                          ECR image · frontend:v1
                        </span>

                      </div>

                      <div
                        className="
                          flex items-center gap-2
                          font-mono text-[10px]
                          text-green-400
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Running
                      </div>

                      <span className="text-neutral-600">
                        →
                      </span>

                    </div>

                  </div>
                )}

                {/* Services */}

                {activeTab === "services" && (
                  <div className="mt-8">

                    <h3 className="text-xl font-bold text-white">
                      Services
                    </h3>

                    <p className="mt-2 text-sm text-neutral-500">
                      React frontend is running as an ECS Fargate task.
                    </p>

                    <div
                      className="
                        mt-6
                        flex flex-col
                        gap-4
                        border border-white/10
                        p-5
                        sm:flex-row
                        sm:items-center
                      "
                    >

                      <div
                        className="
                          flex h-11 w-11
                          items-center justify-center
                          bg-red-900
                        "
                      >
                        ⚛
                      </div>

                      <div className="flex-1">

                        <strong className="block text-white">
                          react-frontend
                        </strong>

                        <span className="font-mono text-[10px] text-neutral-600">
                          Desired count: 1
                        </span>

                      </div>

                      <span
                        className="
                          flex items-center gap-2
                          font-mono text-[10px]
                          text-green-400
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Active
                      </span>

                    </div>

                  </div>
                )}

                {/* Logs */}

                {activeTab === "logs" && (
                  <div className="mt-8">

                    <div
                      className="
                        border border-white/10
                        bg-black/30
                        p-5
                        font-mono text-xs
                        leading-8
                      "
                    >

                      <div className="text-neutral-500">
                        <span className="mr-4 text-neutral-700">
                          20:41:02
                        </span>
                        Container started
                      </div>

                      <div className="text-neutral-500">
                        <span className="mr-4 text-neutral-700">
                          20:41:03
                        </span>
                        Nginx listening on port 80
                      </div>

                      <div className="text-neutral-500">
                        <span className="mr-4 text-neutral-700">
                          20:41:04
                        </span>
                        Health check passed
                      </div>

                      <div className="text-green-400">
                        <span className="mr-4 text-neutral-700">
                          20:41:05
                        </span>
                        Deployment successful
                      </div>

                    </div>

                  </div>
                )}

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div
            className="
              relative overflow-hidden
              border border-red-900
              bg-red-900
              px-8 py-20
              text-center
              text-white
              sm:px-12
            "
          >

            <div
              className="
                pointer-events-none absolute
                inset-0 opacity-10
               
                [bg-size:20px_20px]
              "
            />

            <div className="relative">

              <span
                className="
                  font-mono text-3xl
                  text-red-300
                "
              >
                {"{ }"}
              </span>

              <h2
                className="
                  mt-6
                  text-4xl font-black
                  tracking-tight
                  sm:text-6xl
                "
              >
                Build something.
                <br />
                <span className="text-red-200">
                  Then ship it.
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-5 max-w-xl
                  leading-7
                  text-red-100
                "
              >
                The best way to learn infrastructure is to put
                an application into production.
              </p>

              <button
                onClick={() => scrollTo("home")}
                className="
                  group mt-8
                  inline-flex items-center gap-4
                  bg-white
                  px-6 py-3
                  font-mono text-xs
                  font-bold uppercase
                  tracking-wider
                  text-red-900
                  transition
                  hover:bg-red-50
                "
              >
                Back to top

                <span
                  className="
                    transition-transform
                    group-hover:-translate-y-1
                  "
                >
                  ↑
                </span>

              </button>

            </div>
          </div>
        </section>

      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer
        className="
          border-t border-neutral-300
          bg-[#eeeeea]
        "
      >

        <div
          className="
            mx-auto flex max-w-7xl
            flex-col gap-8
            px-6 py-10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:px-8
          "
        >

          <div>

            <div
              className="
                flex items-center gap-3
                font-mono font-bold
              "
            >

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  bg-red-900
                  text-xs text-white
                "
              >
                &lt;/&gt;
              </span>

              <span>
                dev
                <span className="text-red-900">
                  .cloud
                </span>
              </span>

            </div>

            <p
              className="
                mt-4
                text-sm leading-6
                text-neutral-500
              "
            >
              Building applications.
              <br />
              Learning infrastructure.
            </p>

          </div>

          <div
            className="
              flex flex-wrap gap-x-6 gap-y-2
              font-mono text-[10px]
              font-bold uppercase
              tracking-wider
              text-neutral-500
            "
          >
            <span>React</span>
            <span>Node.js</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>Linux</span>
          </div>

          <div
            className="
              font-mono text-[10px]
              uppercase tracking-wider
              text-neutral-500
            "
          >
            © {new Date().getFullYear()} Developer
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;

