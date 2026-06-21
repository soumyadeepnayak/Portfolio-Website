import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region src/components/portfolio/Nav.tsx
var links = [
	{
		href: "#timeline",
		label: "Timeline"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#training",
		label: "Training"
	},
	{
		href: "#certificates",
		label: "Certificates"
	},
	{
		href: "#extra",
		label: "Activities"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"}`,
		children: /* @__PURE__ */ jsxs("nav", {
			className: "mx-auto max-w-7xl flex items-center justify-between px-6 h-14 text-sm",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "font-semibold tracking-tight",
					children: ["Soumyadeep", /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: "."
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden md:flex items-center gap-8 text-muted-foreground",
					children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "hover:text-foreground transition-colors",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ jsx("a", {
					href: "mailto:soumyadeep1211s@gmail.com",
					className: "rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-xs font-medium hover:opacity-90 transition",
					children: "Get in touch"
				})
			]
		})
	});
}
//#endregion
//#region src/components/portfolio/Hero.tsx
function Hero() {
	const root = useRef(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.timeline({ defaults: { ease: "expo.out" } }).from(".hero-eyebrow", {
				y: 20,
				opacity: 0,
				duration: .8
			}).from(".hero-word", {
				y: 80,
				opacity: 0,
				duration: 1.1,
				stagger: .08
			}, "-=0.4").from(".hero-sub", {
				y: 20,
				opacity: 0,
				duration: .8
			}, "-=0.6").from(".hero-cta", {
				y: 20,
				opacity: 0,
				duration: .6,
				stagger: .1
			}, "-=0.5").from(".hero-meta", {
				opacity: 0,
				duration: .8,
				stagger: .05
			}, "-=0.3");
			gsap.to(".hero-orb", {
				y: -30,
				repeat: -1,
				yoyo: true,
				duration: 4,
				ease: "sine.inOut"
			});
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		ref: root,
		className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-hero",
		children: [/* @__PURE__ */ jsx("div", { className: "hero-orb absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-foreground/[0.04] blur-3xl pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-6xl px-6 text-center pt-20",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "hero-eyebrow text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "Portfolio · 2026"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "text-display mt-6 text-[clamp(2.8rem,9vw,8rem)] leading-[0.95]",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "hero-word inline-block mr-4",
							children: "Building."
						}),
						/* @__PURE__ */ jsx("span", {
							className: "hero-word inline-block mr-4",
							children: "Testing."
						}),
						/* @__PURE__ */ jsx("span", {
							className: "hero-word inline-block text-muted-foreground",
							children: "Shipping."
						})
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "hero-sub mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground",
					children: [
						"I'm ",
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground font-medium",
							children: "Soumyadeep Nayak"
						}),
						", a Java Full Stack developer crafting resilient backends with Spring Boot and refined interfaces with React."
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex flex-nowrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ jsx("a", {
						href: "#projects",
						className: "hero-cta inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-95 transition-transform",
						children: "View Projects"
					}), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "hero-cta inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-95 transition-transform",
						children: "Contact Me"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hero-meta mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto",
					children: [
						{
							k: "Focus",
							v: "Full Stack"
						},
						{
							k: "Stack",
							v: "Java · React"
						},
						{
							k: "Based in",
							v: "Punjab, India"
						},
						{
							k: "Rank",
							v: "9th @ COD-A-FESTX"
						}
					].map((m) => /* @__PURE__ */ jsxs("div", {
						className: "border-t border-border pt-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: m.k
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-base font-medium",
							children: m.v
						})]
					}, m.k))
				})
			]
		})]
	});
}
//#endregion
//#region src/components/portfolio/Section.tsx
gsap.registerPlugin(ScrollTrigger);
function Section({ id, eyebrow, title, subtitle, children, dark = false }) {
	const ref = useRef(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".sec-eyebrow, .sec-title, .sec-sub", {
				scrollTrigger: {
					trigger: ref.current,
					start: "top 90%",
					toggleActions: "play none none none"
				},
				y: 40,
				opacity: 0,
				duration: 1,
				ease: "expo.out",
				stagger: .1
			});
			gsap.utils.toArray(".reveal").forEach((el) => {
				gsap.fromTo(el, {
					y: 60,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "expo.out",
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						toggleActions: "play none none none"
					}
				});
			});
			ScrollTrigger.refresh();
		}, ref);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsx("section", {
		id,
		ref,
		className: `relative py-28 md:py-40 px-6 ${dark ? "bg-dark-section" : ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl",
				children: [
					eyebrow && /* @__PURE__ */ jsx("p", {
						className: `sec-eyebrow text-xs uppercase tracking-[0.3em] ${dark ? "text-white/50" : "text-muted-foreground"}`,
						children: eyebrow
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "sec-title text-display mt-4 text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]",
						children: title
					}),
					subtitle && /* @__PURE__ */ jsx("p", {
						className: `sec-sub mt-6 text-lg md:text-xl ${dark ? "text-white/70" : "text-muted-foreground"}`,
						children: subtitle
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16",
				children
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Timeline.tsx
var events = [
	{
		year: "2026",
		title: "FounderLink — Startup × Investor Platform",
		body: "Built microservices with Spring Boot & Spring Cloud. JWT auth, role-based access, 30% faster APIs."
	},
	{
		year: "2025 – 2026",
		title: "Capgemini Java Full Stack + React",
		body: "Intensive bootcamp: Spring Boot, REST APIs, React, MVC, component architecture."
	},
	{
		year: "2025",
		title: "Food Delivery API Testing",
		body: "Postman collections, data-driven tests, +60% coverage."
	},
	{
		year: "2025",
		title: "E-commerce Checkout Automation",
		body: "Selenium + TestNG + Maven. −60% manual effort, −40% production bugs."
	},
	{
		year: "2024",
		title: "IBM DevOps & Software Engineering",
		body: "Coursera certifications. DSA mastery via Abdul Bari."
	},
	{
		year: "2022",
		title: "B.Tech CSE @ Lovely Professional University",
		body: "Computer Science & Engineering · CGPA 7.35."
	}
];
function Timeline() {
	return /* @__PURE__ */ jsx(Section, {
		id: "timeline",
		eyebrow: "The Journey",
		title: "A timeline of building things.",
		subtitle: "From first lines of Java to shipping production-grade microservices.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" }), /* @__PURE__ */ jsx("ul", {
				className: "space-y-16",
				children: events.map((e, i) => /* @__PURE__ */ jsxs("li", {
					className: `reveal relative grid md:grid-cols-2 gap-8 md:gap-16 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`,
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: `pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:[direction:ltr] md:pl-16"}`,
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground tracking-widest uppercase",
									children: e.year
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-2xl md:text-3xl font-semibold tracking-tight",
									children: e.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: e.body
								})
							]
						}),
						/* @__PURE__ */ jsx("div", { className: "hidden md:block" }),
						/* @__PURE__ */ jsx("span", { className: "absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" })
					]
				}, e.year + e.title))
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Skills.tsx
var groups = [
	{
		label: "Languages",
		items: [
			"Java",
			"JavaScript",
			"HTML",
			"CSS"
		]
	},
	{
		label: "Frameworks",
		items: [
			"Spring Boot",
			"React",
			"Tailwind CSS",
			"JUnit",
			"TestNG",
			"Mockito",
			"Selenium"
		]
	},
	{
		label: "Tools & Platforms",
		items: [
			"SQL",
			"Postman",
			"Maven",
			"Git"
		]
	},
	{
		label: "Soft Skills",
		items: [
			"Problem Solving",
			"Team Player",
			"Project Management"
		]
	}
];
function Skills() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "skills",
		eyebrow: "Toolbox",
		title: "Skills, sharpened.",
		subtitle: "The languages, frameworks, and instruments I reach for every day.",
		dark: true,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: groups.map((g) => /* @__PURE__ */ jsxs("div", {
					className: "reveal group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-colors",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.3em] text-white/50",
						children: g.label
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: g.items.map((s) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white hover:text-black transition-colors cursor-default",
							children: s
						}, s))
					})]
				}, g.label))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "reveal mt-10 marquee-mask overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] text-white/30 text-4xl md:text-6xl font-semibold tracking-tight",
					children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ jsxs("span", {
						className: "flex gap-12",
						children: [
							/* @__PURE__ */ jsx("span", { children: "Java" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "Spring Boot" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "React" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "Microservices" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "JWT" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "Selenium" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "TestNG" }),
							/* @__PURE__ */ jsx("span", { children: "·" })
						]
					}, i))
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }` })
		]
	});
}
//#endregion
//#region src/components/portfolio/Projects.tsx
var projects = [
	{
		name: "FounderLink",
		tag: "Microservices · Spring Cloud",
		period: "Mar 2026 – May 2026",
		description: "A startup–investor platform built on Spring Boot microservices. JWT-secured, role-based, and 30% faster APIs across four distinct user profiles.",
		bullets: [
			"Spring Cloud service discovery & gateway",
			"Granular role-based access (4 profiles)",
			"Listings, discovery filters, investment lifecycle"
		],
		stack: [
			"Java",
			"Spring Boot",
			"Spring Security",
			"Spring Cloud",
			"JWT"
		],
		accent: "from-zinc-900 to-zinc-700",
		href: "https://github.com/soumyadeepnayak"
	},
	{
		name: "Food Delivery API Testing",
		tag: "API · Postman",
		period: "Apr 2025 – May 2025",
		description: "A comprehensive automated API test suite validating restaurants, menus, and order flows with dynamic test scripts and data-driven coverage.",
		bullets: [
			"Reusable Postman Collections",
			"JSON payload + status + latency checks",
			"+60% test coverage via data-driven runs"
		],
		stack: [
			"Postman",
			"REST",
			"JSON"
		],
		accent: "from-neutral-800 to-neutral-600"
	},
	{
		name: "E-commerce Checkout Automation",
		tag: "QA · Selenium",
		period: "Jan 2025 – Feb 2025",
		description: "End-to-end automation for cart, payment, and order confirmation flows. Cut manual testing by 60% and production bugs by 40%.",
		bullets: [
			"Reusable Page Object Models",
			"Selenium + TestNG + Maven",
			"Critical checkout coverage"
		],
		stack: [
			"Selenium",
			"Java",
			"TestNG",
			"Maven"
		],
		accent: "from-stone-800 to-stone-600",
		href: "https://github.com/soumyadeepnayak"
	}
];
function Projects() {
	return /* @__PURE__ */ jsx(Section, {
		id: "projects",
		eyebrow: "Selected Work",
		title: "Projects worth talking about.",
		subtitle: "Three case studies. One philosophy: ship well-tested, well-architected software.",
		children: /* @__PURE__ */ jsx("div", {
			className: "space-y-8",
			children: projects.map((p, i) => /* @__PURE__ */ jsx("article", {
				className: "reveal group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card hover:shadow-elegant transition-all duration-500",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-5 gap-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `relative md:col-span-2 min-h-[280px] bg-gradient-to-br ${p.accent} p-10 flex flex-col justify-between text-white overflow-hidden`,
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" }),
							/* @__PURE__ */ jsx("p", {
								className: "relative text-xs uppercase tracking-[0.3em] text-white/70",
								children: p.tag
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs text-white/60",
									children: p.period
								}), /* @__PURE__ */ jsx("h3", {
									className: "text-display text-4xl md:text-5xl mt-2 leading-none",
									children: p.name
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "absolute bottom-4 right-6 text-6xl md:text-8xl font-bold text-white/10 leading-none",
								children: ["0", i + 1]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3 p-10",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-foreground/90",
								children: p.description
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-6 space-y-2 text-muted-foreground",
								children: p.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-2 w-1 h-1 rounded-full bg-foreground shrink-0" }), b]
								}, b))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: p.stack.map((s) => /* @__PURE__ */ jsx("span", {
									className: "rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground",
									children: s
								}, s))
							}),
							p.href && /* @__PURE__ */ jsxs("a", {
								href: p.href,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-8 inline-flex items-center gap-2 text-sm font-medium group/link",
								children: ["View on GitHub", /* @__PURE__ */ jsx("span", {
									className: "inline-block transition-transform group-hover/link:translate-x-1",
									children: "→"
								})]
							})
						]
					})]
				})
			}, p.name))
		})
	});
}
//#endregion
//#region src/components/portfolio/Training.tsx
function Training() {
	return /* @__PURE__ */ jsx(Section, {
		id: "training",
		eyebrow: "Training",
		title: "Sharpening the craft.",
		subtitle: "Where I went deep on Java, Spring Boot, and React engineering.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "reveal rounded-3xl border border-border p-10 md:p-14 bg-card shadow-card",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-display text-3xl md:text-4xl",
						children: "Java Full Stack + React"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-muted-foreground",
						children: "Capgemini"
					})] }), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground tracking-widest uppercase",
						children: "Dec 2025 – May 2026"
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-8 grid md:grid-cols-2 gap-6 text-foreground/90",
					children: [
						"Intensive full-stack bootcamp on Java, Spring Boot, and React.",
						"Built RESTful APIs with Spring Boot connected to React UIs.",
						"Practiced MVC and component-based architecture end-to-end.",
						"Shipped full-stack projects covering the entire web dev lifecycle."
					].map((t) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "mt-2 w-1 h-1 rounded-full bg-foreground shrink-0" }), t]
					}, t))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: [
						"Java",
						"Spring Boot",
						"React",
						"REST APIs",
						"Maven",
						"HTML",
						"CSS",
						"JavaScript"
					].map((s) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-secondary px-3 py-1 text-xs",
						children: s
					}, s))
				})
			]
		})
	});
}
//#endregion
//#region src/components/portfolio/Certificates.tsx
var certs = [
	{
		title: "IBM DevOps and Software Engineering",
		issuer: "Coursera",
		date: "November 2024"
	},
	{
		title: "Introduction to Software Engineering",
		issuer: "Coursera",
		date: "June 2024"
	},
	{
		title: "Mastering Data Structures & Algorithms (C / C++)",
		issuer: "Udemy · Abdul Bari",
		date: "April 2024"
	}
];
function Certificates() {
	return /* @__PURE__ */ jsx(Section, {
		id: "certificates",
		eyebrow: "Credentials",
		title: "Certified, and curious.",
		subtitle: "Continuous learning is the actual stack.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid md:grid-cols-3 gap-6",
			children: certs.map((c, i) => /* @__PURE__ */ jsxs("div", {
				className: "reveal group rounded-3xl border border-border p-8 hover:bg-secondary transition-colors",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: ["0", i + 1]
						}), /* @__PURE__ */ jsx("span", {
							className: "w-10 h-10 rounded-full border border-border grid place-items-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors",
							children: "✓"
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-8 text-xl font-semibold tracking-tight",
						children: c.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.issuer
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: c.date
					})
				]
			}, c.title))
		})
	});
}
//#endregion
//#region src/components/portfolio/Extra.tsx
function Extra() {
	return /* @__PURE__ */ jsx(Section, {
		id: "extra",
		eyebrow: "Beyond the IDE",
		title: "Extracurricular & wins.",
		subtitle: "Where curiosity meets competition.",
		dark: true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-10",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.3em] text-white/50",
						children: "Hackathon"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-display mt-4 text-4xl md:text-5xl text-white",
						children: "Ranked 9th — COD-A-FESTX 1.0"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-white/70 text-lg",
						children: "Organized by Lovely Professional University. A high-pressure problem-solving and rapid prototyping sprint that pushed architecture instincts, code quality, and team execution."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "reveal rounded-3xl border border-white/10 bg-white/[0.04] p-10 flex flex-col justify-between",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.3em] text-white/50",
						children: "Education"
					}),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-semibold text-white",
							children: "B.Tech CSE"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-white/70",
							children: "Lovely Professional University · Punjab"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-white/50 text-sm",
							children: "CGPA 7.35 · Since Aug 2022"
						})
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 pt-6 border-t border-white/10",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-white/70",
							children: "TPS DAV Public School, Jamshedpur"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-white/50",
							children: "Intermediate · 80% · 2020 – 2022"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Contact.tsx
var channels = [
	{
		label: "Email",
		value: "soumyadeep1211s@gmail.com",
		href: "mailto:soumyadeep1211s@gmail.com"
	},
	{
		label: "LinkedIn",
		value: "soumyadeep-nayak",
		href: "https://www.linkedin.com/in/soumyadeep-nayak-/"
	},
	{
		label: "GitHub",
		value: "soumyadeepnayak",
		href: "https://github.com/soumyadeepnayak"
	},
	{
		label: "Phone",
		value: "+91 89182 19266",
		href: "tel:+918918219266"
	}
];
function Contact() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "contact",
		eyebrow: "Let's Build",
		title: "Have an idea? Let's make it real.",
		subtitle: "Open to full-stack roles, freelance builds, and collaborations on something genuinely good.",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid md:grid-cols-2 gap-4",
			children: channels.map((c) => /* @__PURE__ */ jsxs("a", {
				href: c.href,
				target: c.href.startsWith("http") ? "_blank" : void 0,
				rel: "noreferrer",
				className: "reveal group flex items-center justify-between rounded-2xl border border-border p-6 hover:bg-foreground hover:text-background transition-colors",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-background/60",
					children: c.label
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-lg font-medium",
					children: c.value
				})] }), /* @__PURE__ */ jsx("span", {
					className: "text-2xl transition-transform group-hover:translate-x-1",
					children: "→"
				})]
			}, c.label))
		}), /* @__PURE__ */ jsxs("footer", {
			className: "mt-24 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ jsxs("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Soumyadeep Nayak. Crafted with care."
			] }), /* @__PURE__ */ jsx("p", { children: "Designed in the spirit of clarity." })]
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Timeline, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Training, {}),
			/* @__PURE__ */ jsx(Certificates, {}),
			/* @__PURE__ */ jsx(Extra, {}),
			/* @__PURE__ */ jsx(Contact, {})
		]
	});
}
//#endregion
export { Index as component };
