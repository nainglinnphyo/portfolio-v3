export type StackGroup = {
  label: string;
  items: string[];
  /** Tailwind column span on the lg bento grid. */
  span: string;
};

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "PHP", "SQL"],
    span: "lg:col-span-3",
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "gRPC", "GraphQL", "REST"],
    span: "lg:col-span-3",
  },
  {
    label: "Data",
    items: ["PostgreSQL", "ScyllaDB", "Redis", "MySQL"],
    span: "lg:col-span-2",
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Three.js"],
    span: "lg:col-span-2",
  },
  {
    label: "Platform",
    items: ["Docker", "MQTT", "MinIO", "CI/CD"],
    span: "lg:col-span-2",
  },
];

export const marqueeItems = [
  "microservices",
  "gRPC",
  "event-driven",
  "real-time",
  "Redis",
  "ScyllaDB",
  "Go",
  "TypeScript",
  "NestJS",
  "observability",
  "scale",
];
