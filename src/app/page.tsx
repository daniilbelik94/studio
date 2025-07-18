
'use client'

import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/testimonials";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Server, Database, Shield, Cpu, Waves, Building, Briefcase, Lightbulb, BarChart, Globe, LifeBuoy, Lock } from "lucide-react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";


const products = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Virtual Machines",
    description: "Scalable compute instances to power your applications, from small workloads to large-scale enterprise systems.",
    pricing: "Starting at $25/mo",
    features: ["2 vCPU", "4 GB RAM", "80 GB SSD", "4 TB Transfer"],
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Object Storage",
    description: "Durable, secure, and highly available object storage for your data, backups, and media content.",
    pricing: "Starting at $0.02/GB",
    features: ["1 TB Storage", "5 TB Transfer", "Global CDN", "S3-Compatible API"],
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Managed Kubernetes",
    description: "Deploy, manage, and scale containerized applications with our certified Kubernetes service.",
    pricing: "Starting at $70/mo",
    features: ["Free Control Plane", "Auto Scaling", "High-Availability", "Developer Tools"],
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Enterprise Security",
    description: "Protect your infrastructure with advanced threat detection, DDoS mitigation, and web application firewalls.",
    pricing: "Contact Sales",
    features: ["DDoS Mitigation", "WAF", "Threat Intelligence", "24/7 Monitoring"],
  },
];

const whyUsItems = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Infrastructure",
    description: "Deploy your applications closer to your users with our worldwide network of data centers for lower latency and improved performance."
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
    title: "24/7 Expert Support",
    description: "Our team of certified cloud engineers is available around the clock to help you with any issue, from migration to optimization."
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "We protect your most critical workloads with multi-layered security, compliance certifications, and proactive threat monitoring."
  }
];


const solutions = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "E-commerce",
    description: "High-performance infrastructure to handle traffic spikes and provide a seamless shopping experience.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "SaaS Platforms",
    description: "Reliable and scalable solutions to build and grow your software-as-a-service business.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Big Data & Analytics",
    description: "Process and analyze massive datasets with our powerful computing and storage services.",
  },
];

const trustedLogos = [
  { name: "Innovate Inc", path: "1" },
  { name: "Quantum Corp", path: "2" },
  { name: "Apex Solutions", path: "3" },
  { name: "Stellar Tech", path: "4" },
  { name: "Pinnacle Group", path: "5" },
];

const faqs = [
  {
    question: "What kind of support can I expect?",
    answer: "We offer 24/7/365 expert support via email, phone, and chat. Our premium support plans also include a dedicated account manager and proactive monitoring to ensure your infrastructure is always running optimally."
  },
  {
    question: "How do you handle data security and compliance?",
    answer: "Security is our top priority. Our platform is compliant with major industry standards like ISO 27001, SOC 2, and GDPR. We provide a suite of security services, including DDoS mitigation, web application firewalls, and regular vulnerability scanning."
  },
  {
    question: "Can I migrate my existing applications to your platform?",
    answer: "Absolutely. We offer a range of migration tools and services to help you move your applications smoothly and with minimal downtime. Our support team can assist you with planning and executing the migration."
  },
  {
    question: "How does your pricing work?",
    answer: "Our pricing is transparent and predictable. You can choose to pay as you go or opt for reserved instances for significant discounts. Use our pricing table to estimate your monthly costs, and contact our sales team for custom enterprise quotes."
  }
];


function ConsultationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="default" className="shadow-lg hover:shadow-primary/40 transition-shadow">
          Request a Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and one of our experts will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea id="message" placeholder="How can we help you?" className="col-span-3" />
          </div>
        </div>
        <Button type="submit" variant="default" className="w-full">Submit Request</Button>
      </DialogContent>
    </Dialog>
  )
}

function ConsultationDialogButton({className}: {className?: string}) {
   return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className={cn("shadow-md hover:shadow-primary/30 transition-shadow", className)}>Request a Consultation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and one of our experts will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea id="message" placeholder="How can we help you?" className="col-span-3" />
          </div>
        </div>
        <Button type="submit" variant="default" className="w-full">Submit Request</Button>
      </DialogContent>
    </Dialog>
   )
}


export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .fade-in-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <a className="flex items-center justify-center" href="#">
          <Building className="h-6 w-6 text-primary" />
          <span className="sr-only">Enterprise Cloud Platform</span>
        </a>
        <h1 className="ml-4 text-xl font-bold">Enterprise Cloud Platform</h1>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Button variant="ghost" onClick={() => scrollTo('products')}>Products</Button>
          <Button variant="ghost" onClick={() => scrollTo('solutions')}>Solutions</Button>
          <Button variant="ghost" onClick={() => scrollTo('pricing')}>Pricing</Button>
          <Button variant="ghost" onClick={() => scrollTo('faq')}>FAQ</Button>
          <ConsultationDialogButton className="hidden sm:inline-flex" />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Enterprise-Grade Cloud for Modern Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform provides the performance, reliability, and security your business needs to innovate faster and scale with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <ConsultationDialog />
                  <Button size="lg" variant="outline">
                    Explore Documentation
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  width="600"
                  height="400"
                  alt="Hero"
                  data-ai-hint="cloud data center"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Trusted by the world's leading companies</h2>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 mt-6">
                {trustedLogos.map((logo) => (
                  <div key={logo.name} className="flex items-center justify-center">
                     <Image src={`https://placehold.co/120x60.png/E2E8F0/4A5568?text=${logo.name}`} alt={logo.name} width={120} height={60} className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" data-ai-hint="company logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Our Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Performance and Scale</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our suite of cloud services designed to meet the demands of enterprise applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 xl:grid-cols-4 mt-12">
              {products.map((product, i) => (
                <Card key={product.title} className="fade-in-item flex flex-col h-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ animationDelay: `${i * 150}ms` }}>
                  <CardHeader className="items-center pt-8">
                    {product.icon}
                    <CardTitle className="mt-4 text-center">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-center">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center pb-8">
                    <Button variant="outline" onClick={() => scrollTo('pricing')}>{product.pricing}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Why Choose Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Enterprise Advantage</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the key benefits that make our platform the right choice for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-3 sm:gap-8 mt-12">
              {whyUsItems.map((item, i) => (
                <div key={item.title} className="fade-in-item grid gap-2 text-center" style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="flex justify-center items-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Solutions</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored for Your Industry</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide specialized cloud solutions to meet the unique challenges of your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 items-start gap-8 sm:max-w-4xl sm:grid-cols-3 md:gap-12 lg:max-w-5xl mt-12">
              {solutions.map((solution, i) => (
                <Card key={solution.title} className="fade-in-item flex flex-col h-full text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ animationDelay: `${i * 150}ms` }}>
                  <CardHeader className="items-center pt-8">
                    {solution.icon}
                    <CardTitle className="mt-4">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
           <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Pricing</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent &amp; Predictable Pricing</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Choose the right plan for your needs. All plans come with our core security and support features.
                    </p>
                </div>
              </div>
              <Card className="mt-12 shadow-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px] text-base">Product</TableHead>
                      <TableHead className="text-base">Specifications</TableHead>
                      <TableHead className="text-right text-base">Price</TableHead>
                      <TableHead className="w-[200px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.title} className="hover:bg-primary/5">
                        <TableCell className="font-bold text-lg">{product.title}</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {product.features.map(feature => <li key={feature}>{feature}</li>)}
                          </ul>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-lg">{product.pricing}</TableCell>
                        <TableCell className="text-right">
                          <ConsultationDialogButton />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
        </section>


        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We partner with innovative companies to help them achieve their goals. Here’s what they think about our platform.
                </p>
              </div>
            </div>
            <TestimonialsSection />
          </div>
        </section>
        
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">FAQ</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Find answers to common questions about our platform and services.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-3xl w-full mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="fade-in-item bg-background rounded-lg shadow-sm mb-4 px-6" style={{ animationDelay: `${index * 150}ms` }}>
                    <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Accelerate Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Talk to one of our experts to see how our cloud platform can help you achieve your goals.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 mt-4">
               <ConsultationDialogButton className="w-full" />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Enterprise Cloud Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-muted-foreground" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-muted-foreground" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

    