import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/testimonials";
import { Server, Database, Shield, Cpu, Waves, Building } from "lucide-react";
import Image from "next/image";

const products = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Virtual Machines",
    description: "Scalable compute instances to power your applications, from small workloads to large-scale enterprise systems.",
    pricing: "Starting at $25/mo",
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Object Storage",
    description: "Durable, secure, and highly available object storage for your data, backups, and media content.",
    pricing: "Starting at $0.02/GB",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Managed Kubernetes",
    description: "Deploy, manage, and scale containerized applications with our certified Kubernetes service.",
    pricing: "Starting at $70/mo",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Enterprise Security",
    description: "Protect your infrastructure with advanced threat detection, DDoS mitigation, and web application firewalls.",
    pricing: "Contact Sales",
  },
];

const trustedLogos = [
  { name: "Innovate Inc", path: "1" },
  { name: "Quantum Corp", path: "2" },
  { name: "Apex Solutions", path: "3" },
  { name: "Stellar Tech", path: "4" },
  { name: "Pinnacle Group", path: "5" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <a className="flex items-center justify-center" href="#">
          <Building className="h-6 w-6 text-primary" />
          <span className="sr-only">Enterprise Cloud Platform</span>
        </a>
        <h1 className="ml-4 font-headline text-xl font-bold">Enterprise Cloud Platform</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Solutions</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="accent">Request a Consultation</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Enterprise-Grade Cloud for Modern Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform provides the performance, reliability, and security your business needs to innovate faster and scale with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="accent">
                    Request a Consultation
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Documentation
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="cloud data center"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Trusted by the world's leading companies</h2>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                {trustedLogos.map((logo) => (
                  <div key={logo.name} className="flex items-center justify-center">
                     <Image src={`https://placehold.co/120x60.png/E2E8F0/4A5568?text=${logo.name}`} alt={logo.name} width={120} height={60} className="grayscale opacity-60 hover:opacity-100 transition-opacity" data-ai-hint="company logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Products</div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Built for Performance and Scale</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our suite of cloud services designed to meet the demands of enterprise applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 xl:grid-cols-4 mt-12">
              {products.map((product) => (
                <Card key={product.title} className="flex flex-col h-full">
                  <CardHeader className="items-center">
                    {product.icon}
                    <CardTitle className="mt-4 text-center font-headline">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-center">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline">{product.pricing}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We partner with innovative companies to help them achieve their goals. Here’s what they think about our platform.
                </p>
              </div>
            </div>
            <TestimonialsSection />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Accelerate Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Talk to one of our experts to see how our cloud platform can help you achieve your goals.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button size="lg" variant="accent" className="w-full">
                Request a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Enterprise Cloud Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
