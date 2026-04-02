import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { MatrixBackground } from "@/components/MatrixBackground";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Freelancing } from "@/components/Freelancing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DownloadButton } from "@/components/DownloadButton";

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30 selection:text-primary">
      <MatrixBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Freelancing />
          <Contact />
        </main>
        <Footer />
      </div>
      <DownloadButton />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
