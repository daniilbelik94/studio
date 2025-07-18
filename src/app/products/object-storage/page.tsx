
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Archive, Globe, Shield, Zap, UploadCloud } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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

export default function ObjectStoragePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Enterprise Cloud</span>
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
                      <BreadcrumbPage>Object Storage</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <section className="space-y-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Object Storage</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, durable, and affordable way to store and serve vast amounts of data for applications, backups, and archives.
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
                    <Link href="/company/contact">Start Storing Today</Link>
                 </Button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}
