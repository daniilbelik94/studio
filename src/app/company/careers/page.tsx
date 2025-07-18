
import { Button } from "@/components/ui/button";
import { Building, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const jobOpenings = [
    {
        title: "Senior Backend Engineer (Go)",
        location: "Remote",
        department: "Engineering",
        description: "Design, build, and maintain the core APIs and services that power our cloud platform. You will work with Go, Kubernetes, and distributed systems to create scalable and resilient solutions."
    },
    {
        title: "Frontend Engineer (React/Next.js)",
        location: "New York, NY",
        department: "Engineering",
        description: "Develop and enhance our customer-facing dashboard using modern web technologies. You'll focus on creating intuitive user experiences and beautiful, performant interfaces."
    },
    {
        title: "Product Manager, Compute",
        location: "Remote",
        department: "Product",
        description: "Define the roadmap and strategy for our virtual machine and Kubernetes products. You'll work closely with engineering and customers to deliver features that solve real-world problems."
    },
     {
        title: "Customer Support Engineer",
        location: "Austin, TX",
        department: "Support",
        description: "Provide exceptional technical support to our customers, helping them troubleshoot issues and get the most out of our platform via tickets, chat, and phone."
    }
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Enterprise Cloud</span>
          </Link>
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
                      <BreadcrumbPage>Careers</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight">Join Our Mission</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We're building the future of cloud computing and are looking for passionate, talented individuals to join our team.
                </p>
            </div>
            
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Open Positions</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {jobOpenings.map((job) => (
                        <Card key={job.title}>
                            <CardHeader>
                                <CardTitle>{job.title}</CardTitle>
                                <CardDescription className="flex items-center gap-4 pt-2">
                                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.department}</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{job.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button>Apply Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold">Don't See Your Role?</h3>
                <p className="mt-2 text-muted-foreground">We are always looking for great talent. If you believe you'd be a good fit, please send your resume to <a href="mailto:careers@enterprisecloud.com" className="text-primary underline">careers@enterprisecloud.com</a>.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
