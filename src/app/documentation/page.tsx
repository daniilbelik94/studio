
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";

const documentationSections = [
    { id: "getting-started", title: "Getting Started", icon: "Rocket" },
    { id: "api-reference", title: "API Reference", icon: "Code" },
    { id: "databases", title: "Databases", icon: "Database" },
    { id: "security", title: "Security", icon: "Shield" },
    { id: "billing", title: "Billing", icon: "CreditCard" },
];

export default function DocumentationPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
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
                    <nav className="flex-1 space-y-4 px-4 text-sm font-medium">
                        <h3 className="font-semibold text-lg">Documentation</h3>
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
                        <div className="prose prose-stone dark:prose-invert max-w-none space-y-16">
                            <section>
                                <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
                                <p className="text-lg text-muted-foreground">
                                    Welcome to the official documentation for Enterprise Cloud. Find all the information you need to get the most out of our platform, from initial setup to advanced configurations.
                                </p>
                            </section>

                            <section id="getting-started" className="scroll-mt-24 rounded-xl border bg-card p-8 shadow-sm">
                                <h2 className="text-3xl font-bold !mt-0">Getting Started</h2>
                                <p>This guide will walk you through creating an account, deploying your first server, and understanding the core concepts of our platform.</p>
                                <Image src="https://placehold.co/800x400.png" width={800} height={400} alt="Dashboard" data-ai-hint="dashboard analytics" className="my-6 rounded-lg shadow-md" />
                                <h3 className="text-2xl font-bold">1. Creating Your Account</h3>
                                <p>To begin, you'll need to sign up for an Enterprise Cloud account. Navigate to our signup page, provide the required information, and verify your email address. Once your account is created, you can log in to the main dashboard.</p>
                                <h3 className="text-2xl font-bold">2. Deploying Your First Server</h3>
                                <p>From the dashboard, click on 'Create New' and select 'Virtual Machine'. You will be presented with a configuration screen where you can choose your server's region, operating system, and hardware resources. For a basic setup, we recommend Ubuntu 22.04 with 2 vCPU and 4 GB of RAM.</p>
                                <pre className="!bg-secondary !text-secondary-foreground">
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

                             <section id="api-reference" className="scroll-mt-24 rounded-xl border bg-card p-8 shadow-sm">
                                <h2 className="text-3xl font-bold !mt-0">API Reference</h2>
                                <p>Our REST API allows you to manage all of your resources programmatically. All endpoints are secured with API keys and follow standard HTTP conventions.</p>
                                <h3 className="text-2xl font-bold">Authentication</h3>
                                <p>To authenticate your requests, you must include an `Authorization` header with your API key formatted as a Bearer token.</p>
                                <pre className="!bg-secondary !text-secondary-foreground">
                                    <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                                </pre>
                                <h3 className="text-2xl font-bold">Endpoint: List Servers</h3>
                                <p>Retrieves a list of all your virtual machines.</p>
                                <p><strong>GET</strong> `/v1/servers`</p>
                                <pre className="!bg-secondary !text-secondary-foreground">
                                    <code>
{`curl -X GET "https://api.enterprisecloud.com/v1/servers" \\
     -H "Authorization: Bearer YOUR_API_KEY"`}
                                    </code>
                                </pre>
                            </section>
                             <section id="databases" className="scroll-mt-24 rounded-xl border bg-card p-8 shadow-sm">
                                <h2 className="text-3xl font-bold !mt-0">Databases</h2>
                                <p>Learn how to deploy and manage our fully managed database solutions, including PostgreSQL, MySQL, and Redis.</p>
                                <Image src="https://placehold.co/800x400.png" width={800} height={400} alt="Database diagram" data-ai-hint="database diagram" className="my-6 rounded-lg shadow-md" />
                            </section>
                             <section id="security" className="scroll-mt-24 rounded-xl border bg-card p-8 shadow-sm">
                                <h2 className="text-3xl font-bold !mt-0">Security</h2>
                                <p>A deep dive into our security features, including Firewalls, DDoS mitigation, and role-based access control (RBAC).</p>
                                <Image src="https://placehold.co/800x400.png" width={800} height={400} alt="Security shield" data-ai-hint="security abstract" className="my-6 rounded-lg shadow-md" />
                            </section>
                            <section id="billing" className="scroll-mt-24 rounded-xl border bg-card p-8 shadow-sm">
                                <h2 className="text-3xl font-bold !mt-0">Billing</h2>
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
