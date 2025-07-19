import { PageHeader } from "@/components/dashboard/page-header";
import { InfoMemoGenerator } from "@/components/dashboard/info-memo-generator";

export default function InfoMemoPage() {
  return (
    <div className="grid gap-8">
      <PageHeader
        title="Information Memo Generator"
        description="Generate a comprehensive, investor-ready information memo with AI-powered insights."
      />
      <InfoMemoGenerator />
    </div>
  );
}
