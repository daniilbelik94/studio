
'use client'

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/testimonials";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Server, Database, Shield, Cpu, Waves, Building, Briefcase, Lightbulb, BarChart, Globe, LifeBuoy, Lock, BookOpen, Menu, X, Twitter, Linkedin, Github, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Footer } from "@/components/footer";

const products = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Virtual Machines",
    description: "Scalable compute instances to power your applications, from small workloads to large-scale enterprise systems.",
    pricing: "Starting at $25/mo",
    features: ["2 vCPU", "4 GB RAM", "80 GB SSD", "4 TB Transfer"],
    details: "Our Virtual Machines offer a robust and flexible environment for any workload. With options for custom CPU, RAM, and storage configurations, you can tailor your instances to your exact needs. Benefit from our global network for low latency, 99.99% uptime SLA, and included DDoS protection. Perfect for web servers, development environments, and backend services.",
    link: "/products/virtual-machines",
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Object Storage",
    description: "Durable, secure, and highly available object storage for your data, backups, and media content.",
    pricing: "Starting at $0.02/GB",
    features: ["1 TB Storage", "5 TB Transfer", "Global CDN", "S3-Compatible API"],
    details: "Our S3-compatible Object Storage is designed for durability and infinite scalability. Store and retrieve any amount of data, from anywhere on the web. It's perfect for backups, archives, big data lakes, and serving static assets for your web applications. Integrated with our global CDN, your content is delivered fast, no matter where your users are.",
    link: "/products/object-storage",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Managed Kubernetes",
    description: "Deploy, manage, and scale containerized applications with our certified Kubernetes service.",
    pricing: "Starting at $70/mo",
    features: ["Free Control Plane", "Auto Scaling", "High-Availability", "Developer Tools"],
    details: "Focus on your applications, not on managing infrastructure. Our Managed Kubernetes service provides a certified, production-ready environment with a free control plane, automated scaling, and self-healing capabilities. Integrated with our container registry and developer tools, you can streamline your CI/CD pipeline and deploy with confidence.",
    link: "/products/managed-kubernetes",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Enterprise Security",
    description: "Protect your infrastructure with advanced threat detection, DDoS mitigation, and web application firewalls.",
    pricing: "Contact Sales",
    features: ["DDoS Mitigation", "WAF", "Threat Intelligence", "24/7 Monitoring"],
    details: "Secure your critical workloads with our comprehensive security suite. We provide multi-layered protection, including a powerful Web Application Firewall (WAF), proactive DDoS mitigation, and real-time threat intelligence. Our security operations center (SOC) monitors your environment 24/7 to detect and respond to threats before they impact your business.",
    link: "/products/enterprise-security",
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

const caseStudies = [
    {
        company: "Quantum Corp",
        title: "Quantum Corp Scales E-commerce Platform by 500% for Black Friday",
        description: "By leveraging our auto-scaling Virtual Machines and Managed Kubernetes, Quantum Corp successfully handled record-breaking traffic without any downtime, ensuring a smooth experience for their customers and maximizing sales.",
        image: "https://placehold.co/600x400.png",
        link: "/documentation#getting-started",
        dataAiHint: "e-commerce success"
    },
    {
        company: "Stellar Tech",
        title: "Stellar Tech Achieves Global Low-Latency for their SaaS Application",
        description: "Using our global Object Storage with integrated CDN, Stellar Tech was able to serve their application assets from edge locations worldwide, reducing page load times by 60% and significantly improving user satisfaction.",
        image: "https://placehold.co/600x400.png",
        link: "/documentation#databases",
        dataAiHint: "saas global network"
    },
    {
        company: "Innovate Inc",
        title: "Innovate Inc Secures Financial Data with Enterprise-Grade Security",
        description: "With our comprehensive security suite, including WAF and DDoS mitigation, Innovate Inc protects its sensitive financial data, meets compliance requirements, and builds trust with its enterprise customers.",
        image: "https://placehold.co/600x400.png",
        link: "/documentation#security",
        dataAiHint: "finance security"
    }
];


const trustedLogos = [
  { 
    name: "Google", 
    logo: (
      <svg role="img" viewBox="0 0 32 32" className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors">
        <use href="#icon-google"></use>
      </svg>
    )
  },
  { 
    name: "Microsoft", 
    logo: (
       <svg role="img" viewBox="0 0 32 32" className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors">
        <use href="#icon-microsoft"></use>
      </svg>
    )
  },
  { 
    name: "Salesforce", 
    logo: (
       <svg role="img" viewBox="0 0 32 32" className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors">
        <use href="#icon-salesforce"></use>
      </svg>
    )
  },
    { 
    name: "Amazon Web Services", 
    logo: (
       <svg role="img" viewBox="0 0 32 32" className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors">
        <use href="#icon-amazonaws"></use>
      </svg>
    )
  },
  { 
    name: "Oracle", 
    logo: (
       <svg role="img" viewBox="0 0 32 32" className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors">
        <use href="#icon-oracle"></use>
      </svg>
    )
  },
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

function ConsultationDialog({ triggerButton }: { triggerButton: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
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

function ProductPricingRow({ product }: { product: (typeof products)[0] }) {
    return (
        <TableRow className="hover:bg-primary/5">
            <TableCell className="font-bold text-lg">{product.title}</TableCell>
            <TableCell>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {product.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
            </TableCell>
            <TableCell className="text-right font-semibold text-lg">{product.pricing}</TableCell>
            <TableCell className="text-right">
                <Button asChild variant="outline">
                    <Link href={product.link}>View Details</Link>
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false);
    }
  };
  
  const navLinks = [
    { label: 'Products', id: 'products' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background relative overflow-hidden">
        <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <symbol id="icon-oracle" viewBox="0 0 32 32">
                    <path d="M21.883 5.883h-11.76c-0.002 0-0.003 0-0.005 0-5.588 0-10.117 4.53-10.117 10.117 0 5.586 4.527 10.114 10.112 10.117h11.771c5.588 0 10.117-4.53 10.117-10.117s-4.53-10.117-10.117-10.117v0zM21.625 22.552h-11.244c-3.562-0.074-6.421-2.979-6.421-6.552s2.859-6.478 6.414-6.552l0.007-0h11.244c3.619 0 6.552 2.933 6.552 6.552s-2.933 6.552-6.552 6.552v0z"></path>
                </symbol>
                <symbol id="icon-amazonaws" viewBox="0 0 32 32">
                    <path d="M9.017 13.381c0 0.395 0.043 0.713 0.117 0.947 0.085 0.235 0.192 0.491 0.341 0.768 0.053 0.084 0.075 0.169 0.075 0.244 0 0.107-0.064 0.213-0.203 0.32l-0.671 0.447c-0.077 0.056-0.173 0.091-0.276 0.096l-0.001 0c-0.107 0-0.213-0.053-0.319-0.149-0.138-0.148-0.264-0.312-0.375-0.486l-0.008-0.014c-0.098-0.162-0.208-0.368-0.309-0.579l-0.021-0.049c-0.829 0.979-1.873 1.468-3.129 1.468-0.893 0-1.607-0.255-2.128-0.765-0.521-0.512-0.787-1.192-0.787-2.044 0-0.904 0.319-1.64 0.968-2.192 0.649-0.553 1.511-0.831 2.607-0.831 0.363 0 0.735 0.032 1.128 0.085 0.395 0.053 0.8 0.139 1.224 0.235v-0.777c0-0.809-0.169-1.373-0.5-1.703-0.34-0.331-0.915-0.489-1.733-0.489-0.373 0-0.757 0.041-1.151 0.137s-0.777 0.213-1.149 0.363c-0.101 0.047-0.224 0.094-0.352 0.133l-0.022 0.006c-0.050 0.017-0.108 0.028-0.168 0.031l-0.002 0c-0.149 0-0.224-0.107-0.224-0.329v-0.521c0-0.171 0.021-0.299 0.075-0.373 0.080-0.095 0.18-0.171 0.294-0.221l0.005-0.002c0.372-0.192 0.819-0.352 1.34-0.48 0.48-0.128 1.032-0.202 1.601-0.202 0.021 0 0.043 0 0.064 0l-0.003-0c1.267 0 2.192 0.288 2.788 0.863 0.585 0.573 0.883 1.447 0.883 2.617zM4.697 15c0.351 0 0.712-0.064 1.096-0.192 0.383-0.128 0.724-0.361 1.011-0.68 0.171-0.203 0.299-0.427 0.363-0.683 0.063-0.255 0.107-0.564 0.107-0.925v-0.447c-0.264-0.069-0.597-0.132-0.935-0.177l-0.045-0.005c-0.3-0.040-0.647-0.063-0.999-0.064h-0.001c-0.713 0-1.235 0.139-1.587 0.427-0.351 0.287-0.52 0.691-0.52 1.223 0 0.5 0.127 0.873 0.393 1.128 0.255 0.267 0.627 0.395 1.117 0.395zM13.244 16.149c-0.192 0-0.32-0.032-0.405-0.107-0.085-0.064-0.16-0.213-0.224-0.415l-2.5-8.228c-0.045-0.124-0.079-0.269-0.095-0.418l-0.001-0.008c0-0.171 0.085-0.267 0.255-0.267h1.044c0.201 0 0.34 0.033 0.413 0.107 0.087 0.064 0.151 0.213 0.213 0.416l1.789 7.045 1.66-7.045c0.053-0.213 0.117-0.352 0.201-0.416 0.109-0.068 0.241-0.108 0.383-0.108 0.015 0 0.031 0 0.046 0.001l-0.002-0h0.851c0.203 0 0.341 0.033 0.427 0.107 0.084 0.064 0.16 0.213 0.201 0.416l1.681 7.131 1.841-7.131c0.064-0.213 0.139-0.352 0.213-0.416 0.105-0.068 0.234-0.108 0.372-0.108 0.015 0 0.030 0 0.045 0.001l-0.002-0h0.991c0.169 0 0.267 0.087 0.267 0.267 0 0.053-0.012 0.107-0.023 0.171-0.019 0.102-0.045 0.191-0.078 0.277l0.004-0.010-2.564 8.227c-0.064 0.213-0.139 0.351-0.224 0.415-0.104 0.067-0.231 0.108-0.367 0.108-0.013 0-0.026-0-0.039-0.001l0.002 0h-0.916c-0.201 0-0.34-0.032-0.427-0.107-0.084-0.075-0.159-0.213-0.2-0.427l-1.651-6.864-1.64 6.853c-0.053 0.213-0.116 0.352-0.2 0.427-0.087 0.075-0.236 0.107-0.427 0.107zM26.919 16.436c-0.553 0-1.107-0.064-1.639-0.191-0.532-0.128-0.947-0.267-1.224-0.427-0.171-0.095-0.287-0.201-0.329-0.297-0.040-0.088-0.063-0.19-0.064-0.298v-0.543c0-0.223 0.085-0.329 0.244-0.329 0.064 0 0.128 0.011 0.192 0.032s0.16 0.064 0.267 0.107c0.361 0.16 0.755 0.287 1.171 0.372 0.425 0.085 0.84 0.128 1.267 0.128 0.669 0 1.192-0.117 1.553-0.352 0.334-0.204 0.554-0.567 0.554-0.981 0-0.010-0-0.021-0-0.031l0 0.002c0-0.009 0-0.019 0-0.030 0-0.278-0.109-0.53-0.287-0.716l0 0c-0.192-0.201-0.555-0.383-1.076-0.553l-1.543-0.48c-0.777-0.244-1.352-0.605-1.703-1.084-0.33-0.422-0.53-0.959-0.533-1.543v-0.001c0-0.447 0.097-0.84 0.288-1.181 0.192-0.34 0.447-0.639 0.767-0.872 0.32-0.245 0.68-0.427 1.107-0.553 0.427-0.128 0.873-0.181 1.341-0.181 0.233 0 0.479 0.011 0.713 0.043 0.244 0.032 0.467 0.075 0.691 0.117 0.213 0.053 0.416 0.107 0.607 0.169 0.192 0.064 0.341 0.128 0.448 0.192 0.128 0.065 0.235 0.155 0.318 0.264l0.002 0.002c0.060 0.089 0.096 0.199 0.096 0.317 0 0.012-0 0.024-0.001 0.035l0-0.002v0.5c0 0.224-0.085 0.341-0.245 0.341-0.151-0.018-0.287-0.063-0.41-0.131l0.006 0.003c-0.579-0.262-1.255-0.415-1.968-0.415-0.026 0-0.053 0-0.079 0.001l0.004-0c-0.607 0-1.087 0.095-1.416 0.297-0.331 0.203-0.5 0.511-0.5 0.947 0 0.299 0.107 0.555 0.32 0.756 0.212 0.203 0.605 0.405 1.169 0.587l1.512 0.477c0.765 0.245 1.32 0.587 1.649 1.023s0.489 0.936 0.489 1.489c0 0.457-0.096 0.873-0.276 1.235-0.192 0.363-0.448 0.681-0.777 0.937-0.331 0.267-0.724 0.457-1.181 0.596-0.48 0.148-0.979 0.223-1.523 0.223zM28.931 21.609c-3.501 2.587-8.589 3.959-12.963 3.959-6.131 0-11.653-2.267-15.827-6.035-0.329-0.297-0.032-0.703 0.363-0.468 4.512 2.617 10.079 4.204 15.836 4.204 3.885 0 8.152-0.809 12.080-2.469 0.585-0.267 1.085 0.383 0.511 0.809zM30.389 19.948c-0.448-0.573-2.96-0.276-4.099-0.137-0.34 0.043-0.393-0.256-0.084-0.48 2-1.404 5.289-1 5.672-0.532 0.383 0.48-0.107 3.768-1.98 5.343-0.287 0.245-0.564 0.117-0.436-0.201 0.427-1.053 1.373-3.427 0.927-3.992z"></path>
                </symbol>
                <symbol id="icon-salesforce" viewBox="0 0 32 32">
                    <path d="M13.34 7.221c1-1.061 2.46-1.741 4.061-1.741 2.080 0 3.939 1.2 4.919 2.94 0.84-0.4 1.8-0.6 2.801-0.6 3.799 0 6.879 3.12 6.879 6.96s-3.081 6.96-6.901 6.96c-0.46 0-0.919-0.059-1.36-0.139-0.86 1.56-2.5 2.6-4.4 2.6-0.8 0-1.54-0.2-2.2-0.5-0.879 2.061-2.919 3.499-5.3 3.499-2.479 0-4.6-1.559-5.4-3.759-0.36 0.081-0.72 0.1-1.1 0.1-2.939 0-5.34-2.4-5.34-5.4 0-2 1.081-3.74 2.68-4.68-0.34-0.76-0.52-1.6-0.52-2.461 0-3.44 2.8-6.199 6.2-6.199 2.040 0 3.8 0.939 4.96 2.4z"></path>
                </symbol>
                <symbol id="icon-microsoft" viewBox="0 0 32 32">
                    <path d="M15.2 32h-15.2v-15.2h15.2zM32 32h-15.2v-15.2h15.2zM15.2 15.2h-15.2v-15.2h15.2zM32 15.2h-15.2v-15.2h15.2z"></path>
                </symbol>
                <symbol id="icon-google" viewBox="0 0 32 32">
                    <path d="M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z"></path>
                </symbol>
            </defs>
        </svg>

      <div className="animated-shape bg-primary/50" style={{ top: '10%', left: '10%', width: '200px', height: '200px', animationDelay: '0s' }}></div>
      <div className="animated-shape bg-accent/50" style={{ top: '50%', left: '80%', width: '300px', height: '300px', animationDelay: '5s' }}></div>
      <div className="animated-shape bg-secondary/50" style={{ top: '80%', left: '20%', width: '150px', height: '150px', animationDelay: '10s' }}></div>

      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <Link className="flex items-center justify-center mr-4" href="/">
           <Image
              src="/logo.png"
              width="40"
              height="40"
              alt="Enterprise Cloud Logo"
            />
          <span className="sr-only">Enterprise Cloud Platform</span>
        </Link>
        <h1 className="hidden sm:block text-xl font-bold">Enterprise Cloud Platform</h1>

        <nav className="ml-auto hidden lg:flex items-center gap-4 sm:gap-6">
          {navLinks.map(link => (
            <Button key={link.id} variant="ghost" onClick={() => scrollTo(link.id)}>{link.label}</Button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center ml-4 gap-2">
            <ConsultationDialog triggerButton={<Button variant="default" className="shadow-md hover:shadow-primary/30 transition-shadow">Request a Consultation</Button>} />
            <ThemeToggle />
        </div>
        
        <div className="ml-auto lg:hidden flex items-center">
            <ThemeToggle />
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="ml-2">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                         <Link className="flex items-center justify-center" href="/" onClick={() => setMenuOpen(false)}>
                            <Image src="/logo.png" width={32} height={32} alt="Enterprise Cloud Logo" />
                            <span className="ml-2 font-bold">Enterprise Cloud</span>
                         </Link>
                    </SheetHeader>
                    <nav className="grid gap-4 py-8">
                      {navLinks.map(link => (
                        <Button key={link.id} variant="ghost" className="justify-start text-lg" onClick={() => scrollTo(link.id)}>{link.label}</Button>
                      ))}
                      <Button asChild size="lg" variant="outline" onClick={() => { setMenuOpen(false); }}>
                         <Link href="/documentation">Explore Documentation</Link>
                      </Button>
                      <ConsultationDialog triggerButton={<Button size="lg">Request a Consultation</Button>} />
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </header>
      <main className="flex-1 z-10">
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
                   <ConsultationDialog triggerButton={<Button size="lg" variant="default" className="shadow-lg hover:shadow-primary/40 transition-shadow">Request a Consultation</Button>} />
                  <Button asChild size="lg" variant="outline">
                    <Link href="/documentation">
                      Explore Documentation
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  width="600"
                  height="400"
                  alt="Hero"
                  data-ai-hint="cloud technology abstract"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Trusted by the world's leading companies</h2>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20 mt-8">
                {trustedLogos.map((logo) => (
                  <div key={logo.name} className="flex items-center justify-center gap-4 group" title={logo.name}>
                     {logo.logo}
                     <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">{logo.name}</span>
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
                <Card key={product.title} className="fade-in-item flex flex-col h-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="items-center pt-8">
                    {product.icon}
                    <CardTitle className="mt-4 text-center">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-center">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center pb-8">
                     <Button asChild variant="outline">
                        <Link href={product.link}>{product.pricing}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
                <Card key={solution.title} className="fade-in-item flex flex-col h-full text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm" style={{ animationDelay: `${i * 150}ms` }}>
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

         <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Case Studies</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Real-World Success Stories</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            See how leading companies are leveraging our platform to drive innovation and growth.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-12 mt-12 lg:grid-cols-3 lg:gap-8">
                    {caseStudies.map((study, i) => (
                        <Card key={study.title} className="fade-in-item bg-card/50 backdrop-blur-sm group overflow-hidden">
                            <CardHeader className="p-0">
                                <Image src={study.image} alt={study.title} width={600} height={400} className="rounded-t-lg group-hover:scale-105 transition-transform duration-300" data-ai-hint={study.dataAiHint} />
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="text-lg">{study.company}</CardTitle>
                                <p className="font-semibold mt-2">{study.title}</p>
                                <p className="text-sm text-muted-foreground mt-2">{study.description}</p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild variant="link" className="p-0">
                                    <Link href={study.link}>Read More <ChevronRight className="h-4 w-4 ml-1" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
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
              <Card className="mt-12 shadow-lg bg-card/50 backdrop-blur-sm">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px] text-base">Product</TableHead>
                      <TableHead className="text-base">Core Specifications</TableHead>
                      <TableHead className="text-right text-base">Price</TableHead>
                      <TableHead className="w-[200px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <ProductPricingRow key={product.title} product={product} />
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
        
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
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
                  <AccordionItem key={index} value={`item-${index}`} className="fade-in-item bg-card/50 backdrop-blur-sm rounded-lg shadow-sm mb-4 px-6" style={{ animationDelay: `${index * 150}ms` }}>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
               <ConsultationDialog triggerButton={<Button className="w-full" size="lg">Request a Consultation</Button>} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
