

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Archive, Globe, Shield, UploadCloud, Link2, Server, FolderArchive, Film, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";

const featureCards = [
    {
        icon: <UploadCloud className="h-8 w-8 text-primary" />,
        title: "Infinitely Scalable",
        description: "Store and retrieve any amount of data, from kilobytes to petabytes, without worrying about capacity limits.",
    },
    {
        icon: <Archive className="h-8 w-8 text-primary" />,
        title: "S3-Compatible API",
        description: "Easily integrate with your existing tools and workflows using our fully S3-compatible API.",
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Global Content Delivery",
        description: "Integrated CDN delivers your content to users worldwide with low latency and high transfer speeds.",
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Built-in Security",
        description: "Data is encrypted at rest and in transit, with fine-grained access controls to keep your data secure.",
    },
];

const benefitItems = [
    {
        icon: <Server className="h-8 w-8 text-accent" />,
        title: "Static Asset Hosting",
        description: "Serve images, videos, and other static content for your websites and applications with high performance and low cost."
    },
    {
        icon: <FolderArchive className="h-8 w-8 text-accent" />,
        title: "Data Backup & Archiving",
        description: "A durable and cost-effective solution for long-term data retention, disaster recovery, and compliance."
    },
     {
        icon: <Film className="h-8 w-8 text-accent" />,
        title: "Big Data & Media",
        description: "Create massive data lakes to store and analyze large datasets for machine learning and deliver media content at scale."
    }
];

export default function ObjectStoragePage() {
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
             <Link className="font-bold text-foreground transition-colors hover:text-foreground" href="/products/object-storage">
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
                      <BreadcrumbPage>Object Storage</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <section className="space-y-6">
            <div className="text-center">
                <p className="text-accent font-semibold">Scalable Data Storage</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Object Storage</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, durable, and affordable way to store and serve vast amounts of data for applications, backups, and archives.
                </p>
                 <div className="mt-6 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/company/contact">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/documentation#databases">Read Docs <ChevronRight className="h-4 w-4 ml-1" /></Link>
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
                     <Image src="https://placehold.co/500x500.png" width="500" height="500" alt="Data storage abstract art" className="rounded-lg shadow-xl" data-ai-hint="data storage abstract" />
                 </div>
                 <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Built for a Multitude of Use Cases</h2>
                    <p className="text-muted-foreground">Our Object Storage is flexible enough to power everything from simple website assets to complex big data pipelines.</p>
                     <div className="grid gap-6 pt-4">
                        {benefitItems.map((item) => (
                            <div key={item.title} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>
             </div>
           </section>

             <section className="text-center py-16 bg-primary/10 rounded-lg">
                <h2 className="text-3xl font-bold">Start Storing in Seconds</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Create your first storage bucket and start uploading data with our simple-to-use control panel or S3-compatible tools.
                </p>
                 <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90">
                    <Link href="/company/contact">Start Storing Today</Link>
                 </Button>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    