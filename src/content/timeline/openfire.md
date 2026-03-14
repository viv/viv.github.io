---
title: "Openfire — Mission Critical Open Source"
year: "2020 – present"
headline: "Quiet, careful work on systems that can't fail"
order: 2
techFootnote: "Java, XMPP, Netty, TLS, PKI, Open Source, Docker, Performance Engineering, Post-Quantum Cryptography"
image: "open_source"
---

Long-term contributor to [Openfire](https://github.com/igniterealtime/Openfire/), the reference [XMPP](https://xmpp.org/) server used by military, healthcare, and defence organisations worldwide, working closely with the project's lead maintainer. My work has spanned emergency vulnerability response ([CVE-2023-32315](https://nvd.nist.gov/vuln/detail/cve-2023-32315)), foundational improvements (replacing the networking framework with [Netty](https://netty.io/) to support TLS 1.3, certificate revocation via OCSP and CRL), and planning for post-quantum cryptography.

Most recently, a systematic overhaul of the cryptographic foundations (eliminating hardcoded IVs, replacing weak key derivation with PBKDF2, migrating from CBC to authenticated GCM mode) all while maintaining backward compatibility with years of production data across the global user base.
Introduced [Architecture Decision Records](https://github.com/igniterealtime/Openfire/tree/main/doc/adr) to give maintainers of a 20-year codebase a way to understand why things are the way they are.
