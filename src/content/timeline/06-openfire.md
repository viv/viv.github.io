---
title: "Openfire — Contributing to Open Source"
year: "Ongoing"
headline: "Maintaining a 20-year codebase teaches you things greenfield never will"
tier: 1
order: 6
techFootnote: "Java, Netty, MINA, XMPP, TLS 1.3, AES-GCM, PBKDF2, OCSP"
image: "open_source"
---

Long-term contributor to Openfire, the reference XMPP server used by military and defence organisations worldwide, working closely with the project's lead maintainer, Guus. The work has spanned emergency vulnerability response (CVE-2023-32315), foundational improvements (replacing the networking framework to support TLS 1.3, certificate revocation via OCSP and CRL), and planning for post-quantum cryptography.

Most recently, a systematic overhaul of the cryptographic foundations: eliminating hardcoded IVs, replacing weak key derivation with PBKDF2, migrating from CBC to authenticated GCM mode, all while maintaining backward compatibility with years of production data across the global user base.

Introduced Architecture Decision Records to give a 20-year codebase something it never had: a way to understand why things are the way they are.
