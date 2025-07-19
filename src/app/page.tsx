import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, LineChart, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">ValuatorAI</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Login
          </Link>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Briefcase className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Business Valuation, Simplified.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ValuatorAI leverages cutting-edge AI to provide accurate business valuations and generate
                    investor-ready documents in minutes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Start for Free</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="financial dashboard abstract"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full bg-card py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Financial Clarity</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of tools to help you understand your business's worth and communicate it
                  effectively to stakeholders.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <LineChart className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-lg font-bold">Instant Valuation</h3>
                <p className="text-sm text-muted-foreground">
                  Input your financial data and get a reliable valuation estimate powered by our advanced algorithms.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <FileText className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-lg font-bold">One-Pager Generation</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically create concise, investor-ready one-pagers that highlight your company's potential.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Cpu className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-lg font-bold">AI-Powered Memos</h3>
                <p className="text-sm text-muted-foreground">
                  Generate comprehensive information memos with AI-selected insights to impress potential investors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 ValuatorAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
