
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ChevronRight, Code, Database, Server, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/products/object-storage">
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
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Object Storage</h1>
            <p className="text-lg text-muted-foreground">
              This is a placeholder page for Object Storage.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
