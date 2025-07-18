

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Building, Cpu, HardDrive, Zap, Gauge, Globe, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";

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
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Global Datacenters",
        description: "Deploy your servers in multiple geographic regions to reduce latency for your global user base.",
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Included Security",
        description: "All virtual machines are protected by our network-level firewall and free DDoS mitigation services.",
    },
];

const plans = [
    {
        name: "Standard",
        price: "$25",
        description: "For small to medium workloads, development, and testing.",
        specs: ["2 vCPU", "4 GB RAM", "80 GB SSD", "4 TB Transfer"]
    },
    {
        name: "Performance",
        price: "$60",
        description: "For production applications, databases, and busy websites.",
        specs: ["4 vCPU", "8 GB RAM", "160 GB SSD", "5 TB Transfer"]
    },
    {
        name: "High-Frequency",
        price: "$120",
        description: "For the most demanding applications and enterprise workloads.",
        specs: ["8 vCPU", "16 GB RAM", "320 GB SSD", "6 TB Transfer"]
    }
];

export default function VirtualMachinesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Image src="/logo.png" width={32} height={32} alt="Enterprise Cloud Logo" />
              <span className="hidden text-lg font-bold sm:inline-block">Enterprise Cloud</span>
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
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/enterprise-security">
              Enterprise Security
            </Link>
          </nav>
           <div className="ml-auto flex items-center gap-2">
             <Button asChild className="hidden md:flex">
               <Link href="/company/contact">Contact Sales</Link>
             </Button>
              <div className="md:ml-4">
                <ThemeToggle />
             </div>
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
                      <BreadcrumbPage>Virtual Machines</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          
          <section className="space-y-6">
            <div className="text-center">
                <p className="text-accent font-semibold">Compute Power</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Virtual Machines</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Power your applications with our scalable, secure, and high-performance virtual servers, designed for enterprise workloads of any scale.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#pricing">Get Started</Link>
                    </Button>
                     <Button asChild variant="outline" size="lg">
                        <Link href="/documentation#getting-started">Read Docs <ChevronRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                </div>
            </div>

             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-12">
                {featureCards.map((feature) => (
                    <Card key={feature.title} className="text-center shadow-md hover:shadow-xl transition-shadow bg-card/50">
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

          <section id="pricing" className="py-12 md:py-24 scroll-mt-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Find the Perfect Plan</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">From small projects to large-scale enterprise applications, we have a plan that fits your needs.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {plans.map(plan => (
                    <Card key={plan.name} className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow border-primary/20 border-2">
                        <CardHeader className="bg-muted/50">
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 pt-6">
                            <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                            <ul className="space-y-2 text-muted-foreground">
                                {plan.specs.map(spec => (
                                    <li key={spec} className="flex items-center gap-2">
                                        <Zap className="h-4 w-4 text-primary" /> {spec}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                             <Button asChild className="w-full">
                                <Link href="/company/contact">Deploy Now</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          </section>

          <section className="text-center py-16 bg-primary/10 rounded-lg">
                <h2 className="text-3xl font-bold">Ready to Launch?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Deploy your first virtual machine in under a minute from our intuitive control panel.
                </p>
                 <Button asChild size="lg" className="mt-6">
                    <Link href="/company/contact">Deploy Your VM Today</Link>
                 </Button>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    