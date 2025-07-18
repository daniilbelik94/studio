

import { Building, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";

const documentationSections = [
    { id: "getting-started", title: "Getting Started" },
    { id: "api-reference", title: "API Reference" },
    { id: "databases", title: "Databases" },
    { id: "security", title: "Security" },
    { id: "billing", title: "Billing" },
];

export default function DocumentationPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
                <Link className="flex items-center gap-2 font-semibold" href="/">
                    <Image src="/logo.png" width={32} height={32} alt="Enterprise Cloud Logo" />
                    <span className="hidden font-bold sm:inline-block">Enterprise Cloud</span>
                </Link>
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] w-64 flex-col border-r bg-background/95 py-6 sm:flex">
                    <nav className="flex-1 px-4 text-sm font-medium">
                        <ul className="space-y-2">
                            {documentationSections.map(section => (
                                <li key={section.id}>
                                    <Link
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                                        href={`#${section.id}`}
                                    >
                                        {section.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 sm:pl-64">
                    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
                        <Breadcrumb className="mb-8">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Documentation</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="prose prose-stone dark:prose-invert max-w-none space-y-12">
                            <section>
                                <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
                                <p className="text-lg text-muted-foreground">
                                    Welcome to the official documentation for Enterprise Cloud. Find all the information you need to get the most out of our platform, from initial setup to advanced configurations.
                                </p>
                            </section>

                            <section id="getting-started" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold">Getting Started</h2>
                                <p>This guide will walk you through creating an account, deploying your first server, and understanding the core concepts of our platform.</p>
                                <h3 className="text-2xl font-bold">1. Creating Your Account</h3>
                                <p>To begin, you'll need to sign up for an Enterprise Cloud account. Navigate to our signup page, provide the required information, and verify your email address. Once your account is created, you can log in to the main dashboard.</p>
                                <h3 className="text-2xl font-bold">2. Deploying Your First Server</h3>
                                <p>From the dashboard, click on 'Create New' and select 'Virtual Machine'. You will be presented with a configuration screen where you can choose your server's region, operating system, and hardware resources. For a basic setup, we recommend Ubuntu 22.04 with 2 vCPU and 4 GB of RAM.</p>
                                <pre>
                                    <code>
{`# Example: Creating a server via our CLI
ecloud servers create \\
  --name my-first-server \\
  --region us-east-1 \\
  --image ubuntu-22.04 \\
  --plan standard-2`}
                                    </code>
                                </pre>
                            </section>

                             <section id="api-reference" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold">API Reference</h2>
                                <p>Our REST API allows you to manage all of your resources programmatically. All endpoints are secured with API keys and follow standard HTTP conventions.</p>
                                <h3 className="text-2xl font-bold">Authentication</h3>
                                <p>To authenticate your requests, you must include an `Authorization` header with your API key formatted as a Bearer token.</p>
                                <pre>
                                    <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                                </pre>
                                <h3 className="text-2xl font-bold">Endpoint: List Servers</h3>
                                <p>Retrieves a list of all your virtual machines.</p>
                                <p><strong>GET</strong> `/v1/servers`</p>
                                <pre>
                                    <code>
{`curl -X GET "https://api.enterprisecloud.com/v1/servers" \\
     -H "Authorization: Bearer YOUR_API_KEY"`}
                                    </code>
                                </pre>
                            </section>
                             <section id="databases" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold">Databases</h2>
                                <p>Learn how to deploy and manage our fully managed database solutions, including PostgreSQL, MySQL, and Redis.</p>
                            </section>
                             <section id="security" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold">Security</h2>
                                <p>A deep dive into our security features, including Firewalls, DDoS mitigation, and role-based access control (RBAC).</p>
                            </section>
                            <section id="billing" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold">Billing</h2>
                                <p>Understand how billing works, how to manage your payment methods, and how to interpret your monthly invoices.</p>
                            </section>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}

    