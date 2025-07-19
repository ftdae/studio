import { PageHeader } from "@/components/dashboard/page-header";
import { OnePagerGenerator } from "@/components/dashboard/one-pager-generator";

export default function OnePagerPage() {
  return (
    <div className="grid gap-8">
      <PageHeader
        title="One-Pager Generator"
        description="Create a concise, investor-ready one-pager summary for your business."
      />
      <OnePagerGenerator />
    </div>
  );
}
