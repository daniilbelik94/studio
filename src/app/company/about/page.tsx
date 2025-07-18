

import { Button } from "@/components/ui/button";
import { Users, Target, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";

const values = [
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: "Innovation",
        description: "We are driven by a passion for technology and a desire to build the future of cloud infrastructure, empowering our customers to innovate without limits."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Customer-Centricity",
        description: "Our customers are at the heart of everything we do. We succeed when they succeed, and we are dedicated to providing them with exceptional support and value."
    },
    {
        icon: <Target className="h-10 w-10 text-primary" />,
        title: "Integrity",
        description: "We operate with transparency, honesty, and a commitment to security and privacy, earning the trust of the world's most demanding enterprises."
    }
];

export default function AboutPage() {
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
                      <BreadcrumbPage>About Us</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight">About Enterprise Cloud</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We are on a mission to simplify the cloud and empower businesses to build, deploy, and scale their applications with confidence and ease.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground space-y-4">
                        <span>Founded in 2020 by a team of veteran cloud engineers, Enterprise Cloud was born from a simple observation: the cloud had become too complex. While powerful, existing platforms were often convoluted, expensive, and lacked the human touch of expert support.</span>
                        <span>We set out to build a cloud platform that developers love and businesses trust. A platform with predictable pricing, robust security, and the performance needed to run mission-critical applications. Today, thousands of companies rely on Enterprise Cloud to power their infrastructure, from fast-growing startups to established global enterprises.</span>
                    </p>
                </div>
                 <Image
                    src="https://placehold.co/600x400.png"
                    width="600"
                    height="400"
                    alt="Our team"
                    data-ai-hint="office team collaboration"
                    className="mx-auto rounded-xl object-cover shadow-lg"
                 />
            </div>
            
            <div className="text-center">
                <h2 className="text-3xl font-bold">Our Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">The principles that guide our work and our culture.</p>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-3 sm:gap-8">
              {values.map((item) => (
                <div key={item.title} className="grid gap-2 text-center">
                   <div className="flex justify-center items-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-muted/50 py-12 rounded-lg">
                <h2 className="text-3xl font-bold">Join Our Team</h2>
                <p className="mt-4 text-lg text-muted-foreground">We're always looking for talented people to join us on our mission.</p>
                 <Button asChild size="lg" className="mt-6">
                    <Link href="/company/careers">View Open Positions</Link>
                 </Button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
