import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

type ValuationCardProps = {
  className?: string;
  valuation?: number;
};

export function ValuationCard({ className, valuation }: ValuationCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Estimated Valuation</CardTitle>
        <LineChart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {valuation ? `$${valuation.toLocaleString()}` : "$0"}
        </div>
        <p className="text-xs text-muted-foreground">
          Based on provided financial data
        </p>
      </CardContent>
    </Card>
  );
}
