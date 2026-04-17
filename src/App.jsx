export default function EmrIntegrationHomepage() {
  const services = [
    {
      title: "EMR & API Integration",
      description:
        "Connect engagement platforms, EMRs, and downstream systems using healthcare-aware integration patterns across APIs, HL7, FHIR, and custom interfaces.",
    },
    {
      title: "Data Pipeline Engineering",
      description:
        "Design resilient ETL and data normalization workflows that move information cleanly from source systems into reporting, analytics, and operational tools.",
    },
    {
      title: "MIPS & Compliance Enablement",
      description:
        "Support data-to-metrics-to-submission workflows for quality programs with traceable, audit-ready pipelines built for regulatory scrutiny.",
    },
    {
      title: "Healthcare Systems Modernization",
      description:
        "Replace brittle handoffs and manual reconciliation with reliable distributed systems tailored for healthcare operations and growth.",
    },
  ];

  const stack = [
    {
      eyebrow: "Engagement + integration layer",
      title: "Intelichart",
      description:
        "Frontend workflows, patient interaction, and API-connected data capture that feed clean information into the rest of the healthcare technology stack.",
    },
    {
      eyebrow: "Data → metrics → submission pipeline",
      title: "MIPSPro / Mingle / MDInteractive",
      description:
        "Measure calculation, quality reporting, and compliance submission systems that depend on accurate transformation, validation, and delivery of healthcare data.",
    },
    {
      eyebrow: "Underlying capability",
      title: "Healthcare-specific distributed systems + ETL + regulatory rigor",
      description:
        "Architecture built around secure data movement, system resilience, auditability, and operational reliability in highly constrained environments.",
    },
  ];

  const outcomes = [
    "Reduce manual data reconciliation",
    "Improve reporting accuracy and traceability",
    "Support compliance-ready submissions",
    "Create scalable healthcare data infrastructure",
  ];

  const process = [
    {
      step: "01",
      title: "Assess the workflow",
      description:
        "Map where patient, clinical, and reporting data is created, transformed, and delayed.",
    },
    {
      step: "02",
      title: "Design the integration",
      description:
        "Define interfaces, validation rules, ETL logic, and operational safeguards around the workflow.",
    },
    {
      step: "03",
      title: "Implement & stabilize",
      description:
        "Build reliable pipelines and service layers with observability, error handling, and audit support.",
    },
    {
      step: "04",
      title: "Support ongoing scale",
      description:
        "Adapt the system as regulations, reporting logic, and product needs evolve.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-80 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-0 top-[32rem] h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
              <img
                src="/branding/emr-port.png"
                alt="EMR Port brand mark"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                EMR Port
              </div>
              <div className="text-xs text-slate-400">Healthcare data systems & compliance infrastructure</div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#stack" className="transition hover:text-white">
              Platforms
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-cyan-300/20 bg-white/10">
                <img
                  src="/branding/emr-port.png"
                  alt="EMR Port"
                  className="h-full w-full object-cover object-center"
                />
              </span>
              Integration architecture for healthcare organizations, vendors, and reporting workflows
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Clean, compliant EMR integrations for modern healthcare operations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We build healthcare-grade integration systems that connect patient engagement, EMR data flows, ETL pipelines, and compliance submission workflows into reliable, audit-ready infrastructure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                Schedule a consultation
              </a>
              <a
                href="#stack"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
              Explore integration capabilities
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-xl shadow-slate-950/30"
                >
                  <div className="mb-2 h-2 w-14 rounded-full bg-cyan-300/80" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur xl:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-300">Core offering</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Data flow, reporting, and compliance</h2>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-200">
                  Healthcare-specific
                </div>
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70">
                  <div className="relative aspect-[4/3] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />
                    <img
                      src="/branding/emr-port.png"
                      alt="EMR Port illustration"
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Patient engagement and intake integrations",
                    "Secure API and interface orchestration",
                    "ETL transformation and data validation",
                    "Quality measure and reporting support",
                    "Operational observability and auditability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Representative stack</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Intelichart for engagement and integration workflows. MIPSPro, Mingle, and MDInteractive for transforming source data into quality metrics and compliance submissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for the technical realities of healthcare integration.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We help organizations replace fragmented data handoffs with dependable systems that are easier to operate, easier to audit, and better aligned with regulatory needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Platforms & architecture</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A practical view of the stack you support.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                The work spans frontend integration layers, reporting pipelines, and the distributed systems underneath them. Buyers do not need jargon—they need confidence that the whole workflow is understood.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {stack.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/90">{item.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Process</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                From fragmented workflow to dependable infrastructure.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                We focus on technical clarity, operational reliability, and the realities of working in regulated healthcare environments.
              </p>
            </div>

            <div className="grid gap-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[90px_1fr] md:items-start"
                >
                  <div className="text-3xl font-semibold text-cyan-300">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-emerald-400/10 p-8 shadow-2xl shadow-black/25 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Why clients engage</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Technical depth that maps to business outcomes.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether the challenge is patient engagement integration, data normalization, or submission pipeline reliability, the goal is the same: less operational friction, cleaner reporting, and stronger confidence in the system.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Integration design grounded in healthcare workflows",
                  "ETL and system thinking for complex data movement",
                  "Compliance-aware implementation with traceability in mind",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s talk about your integration environment.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Share your current systems, bottlenecks, or reporting challenges and start with a focused conversation about how the workflow can be improved.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                >
                  hello@example.com
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request an intro call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
