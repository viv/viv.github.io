# viv.me.uk — Content Plan (Final)

## Guiding Content Principles

### 1. Principles persist, technologies don't

Every entry is framed around what you learned, solved, or changed, not the stack. Technologies appear only as quiet footnotes.

### 2. AI as craft evolution, not hype

After 25+ years of refining how you build software, AI has become the most significant accelerator you've encountered. The key insight: the skills that made you a good engineering leader (scoping, planning, TDD, pairing, code review, iterating in small increments) are exactly the skills that make you effective with AI agents. Same principles, new collaborators. You're applying tried and trusted XP and software engineering practices to a "team" of agents.

### 3. The site is about Viv, not about an employer

Employers appear as context. The story is yours.

### 4. Write like you talk

Warm, practical, unpretentious. If it sounds like a keynote speaker, rewrite it.


---


## Hero

> **Viv.**
> Software engineer. Building things that matter since 1998.

(Final wording to be refined during build, but "Viv" confirmed as the lead name.)


---


## About

> I've been writing software since 1998. In that time I've learned that tools change constantly, but the principles of good engineering don't.
>
> Most of my career has been spent building systems where the stakes are high: national cyber security infrastructure, government services, child safeguarding platforms, identity verification at scale. You iterate towards a good solution, but the cost of getting it wrong means the discipline of how you get there really matters. I'm a Chartered Engineer and a member of the BCS, and I studied Computer Science at Cardiff University. I live in South Wales and I've worked remotely for most of my career, long before it was fashionable.
>
> These days I'm deeply focused on how AI is reshaping the craft of software engineering. Not replacing what experienced engineers do, but amplifying it in ways I find genuinely exciting. After more than 25 years, this is the most significant shift I've seen.


---


## Experience Timeline

### Tier 1 — Main Animated Scroll (8 entries)

These get the full cinematic treatment: scroll-triggered animations, narrative weight, generous space.

---

#### 1. The Beginning

**Year:** 1980s – 1990s
**Headline:** "Every expert was once a beginner"
**Story:** Playing games on a BBC Micro at junior school. Dabbling with a Sinclair ZX Spectrum 48K at home. Then A-Level Computer Science, programming in Turbo Pascal, thanks to Mr Turner.

It was during that A-Level project that something clicked. My mother was a coordinator for domiciliary care workers at the local council. Their system for organising rotas and balancing care needs was entirely paper-based. I spent time observing, understanding the problem, understanding how they worked. This was 1997. I then built a system that digitised that process.

That's when I realised: programming isn't really about computers. It's about understanding people, understanding their problems, and then bringing your technology skills to bear on those problems. Everything since has been a variation on that theme.
**Tech footnote:** _BBC Micro, ZX Spectrum 48K, Turbo Pascal_

---

#### 2. Cardiff University

**Year:** 1998 – 2001
**Headline:** "Learning to think in systems"
**Story:** BSc Computer Science at Cardiff. The formal foundations, algorithms, data structures, systems design, that still underpin everything you build decades later. Those foundations are still with me and serve me well.

During university, worked summers at Bridgend County Borough Council as a Communications IT Engineer: network support, new installations, support calls, and the telephone system. Hands-on experience with real infrastructure before even graduating.

This is also where you learned to learn, a skill that turned out to matter far more than anything in the curriculum.
**Tech footnote:** _BSc Computer Science, Second Class Honours Division 1, University of Wales, Cardiff_

---

#### 3. Tracesmart — From Chaos to Craft

**Year:** 2008 – 2011
**Headline:** "You can't build great software on a broken foundation"
**Story:** Arrived to find a shared server with no source control. Left behind a team of 15 with CI/CD, automated testing, code quality tooling, database versioning, and ISO 27001 compliance. The transformation wasn't just technical, it was cultural. Introducing pair programming, continuous feedback, and feature toggles meant changing how people thought about their work, not just how they shipped it.

Led the development team through the creation of multiple business-critical applications. Pioneered solutions for database replication challenges. Implemented high-performance, secure web services with structured data access, caching, and distributed task processing. Built robust hiring processes and championed technical excellence at every opportunity.

Beyond what we achieved, there was a clear vision for where we were heading: trunk-based development, branch by abstraction, and continuous delivery.

The hardest part wasn't implementing any single practice. It was earning the trust to change how an entire team worked, one small improvement at a time.
**Tech footnote:** _PHP, MySQL, Jenkins, Selenium, SVN → Git, Zend Framework (MVC web framework), Doctrine (object-relational mapper), Memcached (distributed caching), Gearman (distributed job queue)_

---

#### 4. CERT-UK & the Birth of National Cyber Security

**Year:** 2013 – 2015 (early Surevine)
**Headline:** "When the stakes are national"
**Story:** Part of a team contracted to support the formation of CERT-UK, supplying the incident ticketing system (including software development), the CERT-UK website, and the Cyber Security Information Sharing Partnership (CiSP) platform. Led the first refresh of CiSP, making the Traffic Light Protocol visible through the platform.

When CERT-UK evolved into the NCSC, managed the transition: rebranding, decommissioning, user migration, pen testing, all while keeping live services running for the people who depended on them.
**Tech footnote:** _XMPP, IODEF, Jive, RTIR, hardened WordPress deployment, PostgreSQL_

---

#### 5. Threatvine — Technical Authority for National Infrastructure

**Year:** ~2015 – 2019+
**Headline:** "Owning a product means owning every decision that got it here"
**Story:** Technical Authority for Threatvine, the platform powering the UK's national cyber security information sharing partnership (CiSP) for 10 years. Owned the technical roadmap, led engineering projects, handled complex technical queries multiple times per week, and managed the productisation journey including major version upgrades.

Built relationships that opened new markets: integrated with Queen's University Belfast research teams, explored partnerships with international threat intelligence companies, and brought the platform to a globally significant financial services organisation, creating a new business line. Engaged with at least three national governments exploring their own CiSP-like information sharing capabilities.

Highly commended at the UK IT Industry Awards 2016. Part of the leadership team, reporting directly to the CEO.
**Tech footnote:** _Java, Spring, PostgreSQL, Kubernetes, XMPP, Openfire, Jive, STIX, TAXII (superseding the earlier IODEF standard)_

---

#### 6. Openfire — Contributing to Open Source

**Year:** Ongoing
**Headline:** "Maintaining a 20-year codebase teaches you things greenfield never will"
**Story:** Long-term contributor to Openfire, the reference XMPP server used by military and defence organisations worldwide, working closely with the project's lead maintainer, Guus. The work has spanned emergency vulnerability response (CVE-2023-32315), foundational improvements (replacing the networking framework to support TLS 1.3, certificate revocation via OCSP and CRL), and planning for post-quantum cryptography.

Most recently, a systematic overhaul of the cryptographic foundations: eliminating hardcoded IVs, replacing weak key derivation with PBKDF2, migrating from CBC to authenticated GCM mode, all while maintaining backward compatibility with years of production data across the global user base.

Introduced Architecture Decision Records to give a 20-year codebase something it never had: a way to understand why things are the way they are.
**Tech footnote:** _Java, Netty, MINA, XMPP, TLS 1.3, AES-GCM, PBKDF2, OCSP_

---

#### 7. AI-Enhanced Engineering — The Current Chapter

**Year:** 2024 – present
**Headline:** "After 25 years, the craft is changing. That's exciting, not threatening."
**Story:** Led a comprehensive research programme for a UK government department evaluating AI-powered security testing tools for air-gapped environments. Analysed 60+ solutions, developed a structured evaluation framework, and authored a 50+ page technical report. Senior stakeholders called it "a magnificent piece of work" and "exactly what I wanted to get out of it."

But the research is only part of it. AI has become fundamental to how you engineer software daily. Right now, Claude Code is the primary tool, but this is a fast-moving domain and, like any good engineer, the decisions being made today are designed to allow change later.

The real insight: 25 years of learning how to manage teams (scoping work clearly, breaking problems down, TDD, pairing, code review, iterating in small increments) turns out to be exactly what you need to be effective with AI agents. You're applying the tried and trusted methods of XP and software engineering to a new kind of collaborator.

Beyond the daily practice, there's deeper thinking to be done. AI dramatically reduces the cost of producing code, but that doesn't automatically mean better outcomes. The bottleneck shifts: if code is cheap, then the quality, security, and review of that code becomes the constraint. Theory of constraints applies here just as it does anywhere else. The benefits are real, but so are the trade-offs, and experienced engineers are the ones best placed to navigate them.

These are the very early days. Keeping a close eye on which principles will endure.
**Tech footnote:** _Claude Code, LLMs, SAST tooling_

---

#### 8. Remote Working — Before It Was Normal

**Year:** 2013 – present
**Headline:** "Distributed teams work when trust is the default"
**Story:** Over a decade of fully remote work, long before the pandemic made it mainstream. Refined how distributed teams communicate, collaborate, and maintain cohesion. The person who calls the new starter every morning. The person who makes video calls natural, not awkward.

Remote work only succeeds when people genuinely look out for each other. That means proactive communication, deliberate inclusion, and the willingness to adapt working practices when someone is struggling.
**Tech footnote:** _None_


---


### Tier 2 — Behind "See Full Timeline"

Available via expansion for those who want the full picture. Same format, less visual weight.

---

#### T2-1. Glamorgan & Qualtech — A Broad Start

**Year:** 2001 – 2003
**Headline:** "A great first step"
**Story:** First professional role: designing and implementing e-learning infrastructure for the University of Glamorgan and Qualtech Services. Huge autonomy, a varied workload, and responsibility across all aspects of technology in a company, not just software. The gap between university theory and production reality was the first real lesson.
**Tech footnote:** _Moodle, early web technologies_

---

#### T2-2. Freelance Consulting

**Year:** 2003 – 2006
**Headline:** "When it's just you, everything matters"
**Story:** Three years as a freelance consultant. Built stock management and order processing systems for an international shipping company. Led development of a vision system data capture product for manufacturing lines. Freelancing teaches you things employment never does: how to scope, how to estimate honestly, how to manage a client's expectations, and what happens when every problem is yours to solve.
**Tech footnote:** _PHP, MySQL, C#, ActiveX_

---

#### T2-3. Hargreaves Lansdown — Building Through the IPO

**Year:** 2006 – 2008
**Headline:** "Building software during the event, not after it"
**Story:** Developer at Hargreaves Lansdown, building the company's online life insurance platform and content management system during the most demanding period in its history, including its flotation on the London Stock Exchange in 2007. They listed directly onto the FTSE 250 and have since been a FTSE 100 company before being taken private.

When systems support a company going through an IPO, "move fast and break things" isn't an option. Reliability under pressure comes from discipline: testing, monitoring, and keeping things simple enough to understand at 2am.
**Tech footnote:** _Web technologies, financial services platforms_

---

#### T2-4. BaseKit — Sharing What You've Learned

**Year:** 2011 – 2012
**Headline:** "The fastest way to improve a team is to share what you've learned"
**Story:** Helped a growing startup bring rigour to an application that had been built fast and needed the practices and tooling that come with maturity: structured testing, clean APIs, deployment discipline. The bigger contribution was knowledge transfer: mentoring the team on REST, OAuth, XP practices, unit testing, Scrum, and Continuous Delivery. The things you take for granted after years of practice can be transformative when shared with a team encountering them for the first time.
**Tech footnote:** _PHP, SOA, REST, OAuth_

---

#### T2-5. Thrupoint — Mobile and Telecommunications

**Year:** 2012 – 2013
**Headline:** "New domains demand new thinking"
**Story:** Developed software for iOS, Android, and BlackBerry devices to function as corporate IP phones. A completely different domain. Deep technical skills transfer across domains when you focus on first principles.
**Tech footnote:** _Java, mobile (iOS/Android/BlackBerry), SIP, enterprise telephony_

---

#### T2-6. Crossing Domains — When Networks Can't Be Trusted

**Year:** Various
**Headline:** "The most interesting engineering happens at the boundaries"
**Story:** A recurring thread: building systems that communicate across security domains where the network between them is inherently untrusted. Cross-domain email and calendar integration. Push notifications bridging secure and open networks. A nationally significant service processing the most sensitive personal information across security boundaries.

You can't just encrypt the pipe and call it secure. Cross-domain engineering means rethinking trust at every layer: data schemas, validation, identity, cross-domain gateways, diodes, hardware security modules, and the business processes that wrap around all of it.
**Tech footnote:** _AWS Serverless, React, WebCrypto, Spring Integration, cross-domain gateways_

---

#### T2-7. Stabilising Systems Under Pressure

**Year:** Various
**Headline:** "Sometimes the most valuable thing you can do is make it stop breaking"
**Story:** Called upon by a large international consortium to assess and stabilise a custom XMPP-based chat system. Diagnosed the root cause, removed unnecessary workarounds, implemented proper connection handling at the right layer, and delivered stability within 30 days. The skill isn't heroics. It's the discipline to diagnose before you fix, and to fix at the right level of abstraction.
**Tech footnote:** _React, Redux, TypeScript, Node.js, nest.js, XMPP_

---

#### T2-8. Building and Growing Teams

**Year:** Throughout career
**Headline:** "Investing in people pays the highest returns"
**Story:** Led and grew teams across multiple organisations. Improved and consulted on hiring processes. Introduced 360-degree feedback, meaningful 1:1s, and CPD programmes. Mentored apprentices, one of whom won the BCS Software Developer & Tester Apprentice of the Year. Hosted work experience placements that turned into genuine learning experiences for everyone involved.

Adapted working practices for colleagues with mental health challenges. Promoted wellness through company running initiatives. The thread that runs through the whole career: helping people grow.
**Tech footnote:** _None_

---

#### T2-9. Infrastructure as Code & Platform Engineering

**Year:** Various
**Headline:** "If you can't rebuild it from scratch, you don't really own it"
**Story:** Led the transformation of manual deployment processes into automated, reproducible infrastructure. Air-gapped Kubernetes clusters. Automated deployments reducing 40+ manual steps to under 10. Designed and delivered a complete resilience improvement for a nationally significant UK government system, identifying single points of failure and replacing a single PostgreSQL cluster with a distributed YugabyteDB deployment across multiple availability zones, end to end, as a solo project. Tested with chaos engineering to validate production readiness. If your deployment depends on someone's knowledge rather than your code, you've built a liability, not an asset.
**Tech footnote:** _Kubernetes (K3S, RKE2, EKS), Pulumi, Terraform, Helm, YugabyteDB, Chaos Toolkit, Zarf_

---

#### T2-10. Security as a Design Decision

**Year:** Various
**Headline:** "Security isn't a layer — it's a way of thinking"
**Story:** Primary point of contact for external security assessors. Developed tooling for UK government that bridged the gap between software developers and Security Operations Centre analysts, enabling higher-quality security logging and more effective protective monitoring. Part of a small team of three senior engineers conducting R&D into browser-based end-to-end encryption. Security work is fundamentally about communication: translating technical risk into business decisions.
**Tech footnote:** _Terraform, AWS IAM, ANTLR, GraalVM, Keycloak, SAML, OIDC_

---

#### T2-11. Working at the Edges of Organisations

**Year:** Various
**Headline:** "Understanding the problem is harder than solving it"
**Story:** Repeatedly tasked with the work between companies: analysing RFPs, extracting requirements, estimating scope, proposing roadmaps, and aligning expectations with key decision makers. Also served as technical subject matter expert for the NCA, advising on threat assessments for decentralised messaging systems and their implications for law enforcement. The most valuable engineering contribution is often not writing code. It's making sure the right thing gets built.
**Tech footnote:** _None_


---


## What I Do / Expertise

Four themes, each a short paragraph.

### Building systems that last

25+ years building software across government, finance, cyber security, and identity verification. Pragmatic architecture, clear boundaries, ruthless simplicity where it matters, and the discipline to maintain backward compatibility when the easy option would be to break everything.

### Secure by design

Years working with government, CISOs, and governance boards. Security isn't something you bolt on. It's how you think about trust boundaries, identity, data flow, and the human decisions around all of it.

### AI-augmented engineering

Not theoretical. Practical. AI is a core part of the daily engineering workflow, managed with the same XP and engineering discipline you'd apply to any team. Also led formal government-commissioned research evaluating AI security tools. You know where AI helps, where it hallucinates, and why experienced engineers get more from it than novices.

### Growing engineers

Mentoring apprentices. Hosting work experience. Running 1:1s, 360-degree feedback, and CPD programmes. The best investment a senior engineer can make is in the people around them.


---


## AI Engineering — Dedicated Section

### Philosophy
Your view on AI in software engineering from 25+ years of context. The central insight: managing AI agents effectively requires the same skills as managing human engineering teams, specifically scoping, planning, TDD, pairing, code review, and small iterations. XP practices aren't obsolete; they're more relevant than ever.

### How I Work with AI
AI as the daily tool, with an awareness that the specific tools will change. Your actual workflow, patterns, what works, what doesn't. The deeper thinking: bottlenecks, theory of constraints, the shift from code production cost to code quality and review as the binding constraint.

### What I've Built / Researched
Government-commissioned AI-SAST research. 60+ solutions evaluated. 50+ page report.

### Where This Is Going
Your calibrated view on the trajectory, informed by 25 years of paradigm shifts. These are early days. The tools will change. The principles won't.

**Note:** This section should be a "last updated: [date]" page in its own markdown file for easy refreshing.


---


## Beyond the Code

### Wado Ryu Karate
3rd Dan. You teach. See [ogwrkarate.co.uk](https://www.ogwrkarate.co.uk). This isn't a hobby. It's a parallel discipline of teaching, leadership, and personal development pursued for decades.

### Guitar & Keyboard
Electric and acoustic guitar since 1995, plus keyboard. A hobby, but 30 years of one.

### Mentoring & Community
Ben's work experience story. The apprentice who won BCS Software Developer & Tester Apprentice of the Year. 5k wellness runs. Mental health advocacy in the workplace.


---


## Contact / Footer

- GitHub: [github.com/viv](https://github.com/viv)
- LinkedIn: [linkedin.com/in/bmvivian](https://www.linkedin.com/in/bmvivian)
- Location: South Wales
- No email contact on the public site.

> Want to talk? Find me on GitHub or LinkedIn.


---


## Principles (Woven Through the Site)

These are not displayed as a list. They're embedded in the timeline entries and section copy.

1. **"You can't build great software on a broken foundation."** (Tracesmart)
2. **"The most interesting engineering happens at the boundaries."** (Cross-domain work)
3. **"Security is a design decision, not a feature."** (Government work, Openfire, governance)
4. **"If you can't rebuild it from scratch, you don't own it."** (IaC, automation)
5. **"Maintaining is harder than building."** (Openfire, backward compatibility)
6. **"AI amplifies craft, it doesn't replace judgement."** (Research, daily AI workflow)


---


## Tone Guide

| Do | Don't |
|---|---|
| Write in first person | Write in third person |
| Use plain, direct language | Use jargon or buzzwords |
| Be specific: name the principle, the lesson | Be vague |
| Show personality where natural | Force jokes or be relentlessly serious |
| Mention tech as context, in passing | Lead with technology names |
| Be honest about what you don't know | Claim expertise you don't have |
| Let career length speak for itself | Repeatedly emphasise "25 years" |
| Use commas and full stops | Overuse em dashes |
| Sound like a person talking | Sound like a keynote speaker |
