

import { Button } from "@/components/ui/button";
import { Building, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Image src="/logo.png" width={32} height={32} alt="Enterprise Cloud Logo" />
              <span className="text-lg font-bold">Enterprise Cloud</span>
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
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
                      <BreadcrumbPage>Company</BreadcrumbPage>
                  </BreadcrumbItem>
                   <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>Contact Us</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground">
                    We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:sales@enterprisecloud.com" className="hover:underline">sales@enterprisecloud.com</a>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <span>+1 (800) 555-0199</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <span>123 Cloud Way, Suite 404, San Francisco, CA 94105</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" />
                        </div>
                    </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                   <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" />
                  </div>
                </div>
                <Button type="submit" variant="default" className="w-full">Submit Request</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    