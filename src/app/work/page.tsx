import type { Metadata } from "next";
import Exp from "@/components/Exp";
import PageHeader from "@/components/ui/PageHeader";
import { profile } from "@/utils/profile";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Naing Linn Phyo's roles — Head of Department, Dev Team Lead and Senior Backend Developer — and what each one actually involved.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-12 py-10 max-sm:gap-10">
      <PageHeader
        index="02"
        title="Work"
        kicker="2022 — present"
        lede={`Three roles across ${profile.company.name} and its products, most recent first. The shape of the job has moved from writing the services to owning the layer they share — and, lately, the plan that decides what gets built.`}
      />
      <Exp />
    </div>
  );
}
