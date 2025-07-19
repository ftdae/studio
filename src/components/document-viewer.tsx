"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Download, Share2, FileText } from "lucide-react";

type DocumentViewerProps = {
  document?: string;
  title: string;
};

export function DocumentViewer({ document, title }: DocumentViewerProps) {
  const { toast } = useToast();

  const handleExport = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "A shareable link has been copied to your clipboard.",
    });
  };

  return (
    <Card className="flex flex-col @media print:shadow-none print:border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Review the AI-generated content below.</CardDescription>
        </div>
        {document && (
          <div className="flex gap-2 @media print:hidden">
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handleExport}>
              <Download className="h-4 w-4" />
              <span className="sr-only">Export PDF</span>
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <ScrollArea className="h-full max-h-[450px] w-full rounded-md border p-4">
          {document ? (
            <pre className="whitespace-pre-wrap text-sm">{document}</pre>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <FileText className="h-12 w-12 mb-4" />
              <p className="text-lg font-medium">Your generated document will appear here.</p>
              <p className="text-sm">Fill out the form and click "Generate" to start.</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
