
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Cpu, GitBranch, Layers, Puzzle, Scaling, Rocket, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";

const featureCards = [
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Certified Kubernetes",
        description: "Run your containerized applications on a fully managed, CNCF-certified Kubernetes platform.",
    },
    {
        icon: <Scaling className="h-8 w-8 text-primary" />,
        title: "Effortless Autoscaling",
        description: "Automatically scale your clusters and workloads based on CPU or memory usage to handle traffic spikes.",
    },
    {
        icon: <Puzzle className="h-8 w-8 text-primary" />,
        title: "Simplified Management",
        description: "We handle the control plane, upgrades, and patching, so you can focus on your applications.",
    },
    {
        icon: <GitBranch className="h-8 w-8 text-primary" />,
        title: "Developer-Friendly Tooling",
        description: "Integrated CI/CD pipelines, private container registry, and one-click app marketplace.",
    },
];

const useCases = [
    "Microservices architecture",
    "CI/CD and DevOps automation",
    "Stateful applications",
    "Big data processing"
];

export default function ManagedKubernetesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Enterprise Cloud</span>
          </Link>
          <nav className="ml-auto hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/virtual-machines">
              Virtual Machines
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/object-storage">
              Object Storage
            </Link>
             <Link className="font-bold text-foreground transition-colors hover:text-foreground" href="/products/managed-kubernetes">
              Managed Kubernetes
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/enterprise-security">
              Enterprise Security
            </Link>
          </nav>
            <div className="ml-auto flex items-center gap-2">
             <Button asChild className="hidden md:flex">
               <Link href="/company/contact">Contact Sales</Link>
             </Button>
             <ThemeToggle />
           </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 px-4 md:px-6">
          <Breadcrumb className="mb-8 hidden md:flex">
              <BreadcrumbList>
                  <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                          <Link href="/">Home</Link>
                      </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>Products</BreadcrumbPage>
                  </BreadcrumbItem>
                   <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>Managed Kubernetes</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <section className="space-y-6">
            <div className="text-center">
                <p className="text-accent font-semibold">Container Orchestration</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Managed Kubernetes</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Deploy, manage, and scale your containerized applications effortlessly with our production-ready Kubernetes service. Focus on building great applications, not on infrastructure management.
                </p>
            </div>

             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-8">
                {featureCards.map((feature) => (
                    <Card key={feature.title} className="text-center shadow-md hover:shadow-xl transition-shadow">
                        <CardHeader className="items-center">
                            {feature.icon}
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </section>

          <section className="py-12 md:py-24">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-3xl font-bold mb-4">Accelerate Your Development Lifecycle</h2>
                     <p className="text-muted-foreground mb-6">
                         Our Managed Kubernetes service is designed to remove the operational overhead of running a resilient and scalable container platform. With automated updates, security patching, and a free, highly-available control plane, you can streamline your CI/CD pipelines and ship code faster than ever.
                     </p>
                     <ul className="space-y-4">
                         {useCases.map(useCase => (
                             <li key={useCase} className="flex items-center gap-3">
                                 <CheckCircle className="h-6 w-6 text-accent" />
                                 <span className="text-lg">{useCase}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
                 <div className="flex justify-center">
                     <Rocket className="h-48 w-48 text-primary/20" />
                 </div>
             </div>
          </section>
          
          <section className="text-center py-12 bg-primary/10 rounded-lg">
                <h2 className="text-3xl font-bold">Start Building on Kubernetes Today</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Create your first cluster in minutes and experience the power of managed Kubernetes.
                </p>
                 <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90">
                    <Link href="/company/contact">Create Your Cluster</Link>
                 </Button>
            </section>
        </div>
      </main>
    </div>
  );
}
