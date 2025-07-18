
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function AboutPage() {
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
                      <BreadcrumbPage>About Us</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <p className="text-lg text-muted-foreground">
              This is a placeholder page for About Us.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
