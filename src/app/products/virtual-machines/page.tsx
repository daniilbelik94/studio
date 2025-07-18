
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Cpu, Database, Server, Shield, HardDrive, Zap, Gauge } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const featureCards = [
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "High-Performance CPUs",
        description: "Utilize the latest generation of processors for demanding workloads, ensuring fast and reliable performance.",
    },
    {
        icon: <HardDrive className="h-8 w-8 text-primary" />,
        title: "Blazing-Fast SSD Storage",
        description: "Local NVMe SSDs provide high-throughput, low-latency storage perfect for databases and I/O-intensive applications.",
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Scalable Resources",
        description: "Instantly scale your CPU, RAM, and storage resources up or down to meet changing demands without downtime.",
    },
    {
        icon: <Gauge className="h-8 w-8 text-primary" />,
        title: "99.99% Uptime SLA",
        description: "Our robust infrastructure is backed by an industry-leading Service Level Agreement, guaranteeing high availability.",
    },
];

export default function VirtualMachinesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Enterprise Cloud</span>
          </Link>
          <nav className="ml-auto hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link className="font-bold text-foreground transition-colors hover:text-foreground" href="/products/virtual-machines">
              Virtual Machines
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/object-storage">
              Object Storage
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/managed-kubernetes">
              Managed Kubernetes
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/documentation">
              Documentation
            </Link>
          </nav>
           <Button asChild className="ml-auto">
             <Link href="/company/contact">Contact Sales</Link>
           </Button>
      </header>
      <main className="flex-1">
        <div className="container py-12 px-4 md:px-6">
          <Breadcrumb className="mb-8">
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
                      <BreadcrumbPage>Virtual Machines</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          
          <section className="space-y-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Virtual Machines</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Power your applications with our scalable, secure, and high-performance virtual servers, designed for enterprise workloads of any scale.
                </p>
            </div>

             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-8">
                {featureCards.map((feature) => (
                    <Card key={feature.title} className="text-center">
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

             <div className="text-center pt-8">
                 <Button asChild size="lg">
                    <Link href="/company/contact">Deploy Your VM Today</Link>
                 </Button>
             </div>
          </section>

        </div>
      </main>
    </div>
  );
}
