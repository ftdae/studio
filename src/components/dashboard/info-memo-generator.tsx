"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleGenerateInfoMemo } from "@/actions/valuator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { DocumentViewer } from "@/components/document-viewer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate Info Memo"}
    </Button>
  );
}

export function InfoMemoGenerator() {
  const [state, formAction] = useFormState(handleGenerateInfoMemo, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message.startsWith("Error:")) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Company Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" placeholder="e.g., Innovate Inc." required />
            </div>
             <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="revenue">Annual Revenue</Label>
                <Input id="revenue" name="revenue" type="number" placeholder="5000000" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="expenses">Annual Expenses</Label>
                <Input id="expenses" name="expenses" type="number" placeholder="3000000" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="assets">Total Assets</Label>
                <Input id="assets" name="assets" type="number" placeholder="1000000" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="valuationEstimate">Valuation Estimate</Label>
                <Input id="valuationEstimate" name="valuationEstimate" type="number" placeholder="12000000" required />
              </div>
            </div>
             <div className="grid gap-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea id="description" name="description" placeholder="Describe the company's operations, products, and market position." required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="keyClients">Key Clients</Label>
                <Textarea id="keyClients" name="keyClients" placeholder="List major clients, e.g., 'Google, Microsoft, Amazon'." required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="competitiveAdvantages">Competitive Advantages</Label>
                <Textarea id="competitiveAdvantages" name="competitiveAdvantages" placeholder="Describe what sets the company apart from competitors." required />
            </div>
            {state.issues && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid Input</AlertTitle>
                <AlertDescription>
                  <ul>
                    {state.issues.map((issue, index) => <li key={index}>- {issue}</li>)}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      <DocumentViewer document={state.data} title="Generated Info Memo" />
    </div>
  );
}
