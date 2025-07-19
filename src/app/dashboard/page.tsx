import { PageHeader } from "@/components/dashboard/page-header";
import { ValuationCard } from "@/components/dashboard/valuation-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid gap-8">
      <PageHeader title="Dashboard" description="Get an instant valuation for any business." />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Company Data</CardTitle>
            <CardDescription>Enter a company ticker or name to fetch financial data automatically.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex items-center space-x-2">
                <Input id="company-search" placeholder="e.g., AAPL or Apple Inc." className="flex-1" />
                <Button type="submit" size="icon" aria-label="Search">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
             <p className="text-xs text-muted-foreground">
                Company data fetching is a mock feature for demonstration.
             </p>
          </CardFooter>
        </Card>

        <ValuationCard className="lg:col-span-3" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manual Valuation</CardTitle>
          <CardDescription>Enter the company's financial details to calculate an estimated valuation.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <Input id="revenue" type="number" placeholder="e.g., 5000000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expenses">Annual Expenses</Label>
              <Input id="expenses" type="number" placeholder="e.g., 3000000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assets">Total Assets</Label>
              <Input id="assets" type="number" placeholder="e.g., 1000000" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Calculate Valuation</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
