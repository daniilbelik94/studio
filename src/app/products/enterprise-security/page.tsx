

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ShieldCheck, Siren, Bot, FileLock, Network, KeyRound, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";


const featureCards = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Web Application Firewall (WAF)",
        description: "Protect your applications from common web exploits and vulnerabilities like SQL injection and cross-site scripting.",
    },
    {
        icon: <Siren className="h-8 w-8 text-primary" />,
        title: "Advanced DDoS Mitigation",
        description: "Safeguard your infrastructure against volumetric and application-layer DDoS attacks with our global network.",
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "Real-time Threat Intelligence",
        description: "Leverage our constantly updated threat intelligence feeds to proactively block malicious actors and traffic.",
    },
    {
        icon: <FileLock className="h-8 w-8 text-primary" />,
        title: "Compliance & Auditing",
        description: "Meet your compliance requirements (SOC 2, ISO 27001, PCI DSS) with robust logging and reporting.",
    },
];

const benefitItems = [
    {
        icon: <KeyRound className="h-8 w-8 text-accent" />,
        title: "Reduce Risk",
        description: "Proactively identify and mitigate threats before they impact your business operations, ensuring continuity and protecting your reputation."
    },
    {
        icon: <Network className="h-8 w-8 text-accent" />,
        title: "Ensure Compliance",
        description: "Simplify your audit processes and meet stringent regulatory requirements with our certified security infrastructure and detailed reporting."
    },
     {
        icon: <Building className="h-8 w-8 text-accent" />,
        title: "Build Customer Trust",
        description: "Demonstrate your commitment to security and data protection, building confidence with your users and enterprise customers."
    }
];

export default function EnterpriseSecurityPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Image src="/logo.png" width={32} height={32} alt="Enterprise Cloud Logo" />
              <span className="hidden text-lg font-bold sm:inline-block">Enterprise Cloud</span>
          </Link>
          <nav className="ml-auto hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/virtual-machines">
              Virtual Machines
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/object-storage">
              Object Storage
            </Link>
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/managed-kubernetes">
              Managed Kubernetes
            </Link>
             <Link className="font-bold text-foreground transition-colors hover:text-foreground" href="/products/enterprise-security">
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
                      <BreadcrumbPage>Enterprise Security</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>

          <section className="space-y-6">
            <div className="text-center">
                <p className="text-accent font-semibold">Comprehensive Protection</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Enterprise Security</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Secure your infrastructure from end to end with our comprehensive suite of managed security services. We provide the tools and expertise to protect your most critical applications and data against evolving threats.
                </p>
                 <div className="mt-6 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/company/contact">Get Started</Link>
                    </Button>
                     <Button asChild variant="outline" size="lg">
                        <Link href="/documentation#security">Read Docs <ChevronRight className="h-4 w-4 ml-1" /></Link>
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

          <section className="py-12 md:py-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div className="flex justify-center">
                     <Image src="https://placehold.co/500x500.png" width="500" height="500" alt="Security Shield" className="rounded-lg shadow-xl" data-ai-hint="security abstract" />
                  </div>
                  <div className="space-y-4">
                      <h2 className="text-3xl font-bold">Your Trusted Security Partner</h2>
                      <p className="text-muted-foreground">
                          In today's digital landscape, security is not just a feature; it's a fundamental requirement. Our enterprise security solutions are designed to provide multi-layered defense, integrating seamlessly with your infrastructure. We combine automated systems with a 24/7 Security Operations Center (SOC) to ensure your business is protected around the clock, allowing you to innovate with confidence.
                      </p>
                       <div className="grid gap-6 pt-4">
                            {benefitItems.map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                    {item.icon}
                                    <div>
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                  </div>
              </div>
          </section>

          <section className="text-center py-16 bg-primary/10 rounded-lg">
                <h2 className="text-3xl font-bold">Ready to Secure Your Platform?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Talk to our security experts today to get a personalized assessment and quote for your business needs.
                </p>
                 <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90">
                    <Link href="/company/contact">Request a Security Consultation</Link>
                 </Button>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    