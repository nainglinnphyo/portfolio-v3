export type Role = {
  title: string;
  company: string;
  workDate: string;
  /** Marks the role shown as live on the timeline and on the home page. */
  current?: boolean;
  /** One line used on the home page's "Currently" card. */
  summary?: string;
  jd: string[];
};

export const exp: Role[] = [
  {
    title: "Head of Department",
    company: "Xsphere Co.,Ltd",
    workDate: "August 2025 — Present",
    current: true,
    summary:
      "Own the business logic layer across the product line, and the product-management side of getting it shipped.",
    jd: [
      "Own the business logic layer across products — domain modelling, service boundaries and the contracts between them — so a rule lives in one place instead of being re-implemented per client.",
      "Set technical direction for the department: architecture review, standards for API and data design, and the build-versus-buy calls.",
      "Run the product-management side of delivery — roadmap, scoping, sprint planning and prioritisation — and turn business requirements into specifications engineers can build from without guessing.",
      "Sit between business and engineering: translate commercial goals into technical plans, and report cost, risk and timeline honestly in both directions.",
      "Grow the team through hiring, onboarding and mentoring, and keep a review culture so quality does not depend on any one person being in the room.",
      "Own delivery health — estimates, release cadence, incident follow-up, and the handful of metrics that say whether any of it is actually working.",
    ],
  },
  {
    title: "Dev Team Lead",
    company: "Fary Taxi",
    workDate: "April 2024 — August 2025",
    jd: [
      "Oversaw the planning, execution and delivery of software projects, holding them to quality standards, deadlines and budget.",
      "Provided technical direction and expertise, keeping best practice in software development and architecture in the team's default path.",
      "Worked closely with cross-functional teams — product managers, designers and QA — to deliver seamless, integrated solutions.",
      "Promoted and implemented process improvements, development methodologies and tooling that raised team productivity and software quality.",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Xsphere Co.,Ltd",
    workDate: "April 2022 — August 2025",
    jd: [
      "Architected and implemented scalable, reliable and maintainable backend services and APIs.",
      "Designed and optimised database schemas, wrote efficient queries and protected data integrity.",
      "Identified and resolved performance bottlenecks in both the application and database layers.",
      "Guided and mentored junior developers, building a culture of continuous learning and improvement.",
    ],
  },
];

export const currentRole = exp.find((role) => role.current) ?? exp[0];
