
import { Building, ChevronRight, Code, Database, Server, Shield } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


const documentationSections = [
    {
        title: "Getting Started",
        description: "An overview of the platform and first steps.",
        icon: <Server className="h-6 w-6" />,
        link: "#getting-started"
    },
    {
        title: "API Reference",
        description: "Detailed information about our API endpoints.",
        icon: <Code className="h-6 w-6" />,
        link: "#api-reference"
    },
    {
        title: "Databases",
        description: "Guides for setting up and managing your databases.",
        icon: <Database className="h-6 w-6" />,
        link: "#databases"
    },
    {
        title: "Security",
        description: "Learn how to secure your applications on our platform.",
        icon: <Shield className="h-6 w-6" />,
        link: "#security"
    }
];

export default function DocumentationPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
                <div className="flex h-16 items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="/">
                        <Building className="h-6 w-6 text-primary" />
                        <span>Enterprise Cloud</span>
                    </Link>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                    <ul className="grid items-start px-4 text-sm font-medium">
                        <li>
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                                href="#getting-started"
                            >
                                Getting Started
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                href="#api-reference"
                            >
                                API Reference
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                href="#databases"
                            >
                                Databases
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                href="#security"
                            >
                                Security
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                     <Breadcrumb>
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
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="grid gap-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
                            <p className="text-muted-foreground">
                                Find all the information you need to get the most out of our platform.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                             {documentationSections.map(section => (
                                <Card key={section.title}>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <div className="flex items-center gap-3">
                                            {section.icon}
                                            <CardTitle className="text-lg">{section.title}</CardTitle>
                                        </div>
                                        <Link href={section.link}>
                                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                        </Link>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{section.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div id="getting-started" className="scroll-mt-20">
                            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                            <div className="prose prose-stone dark:prose-invert max-w-none space-y-4">
                                <p>Welcome to the Enterprise Cloud Platform! This guide will walk you through the initial setup and basic features to get you up and running as quickly as possible.</p>
                                <h3 className="text-xl font-bold">1. Creating Your Account</h3>
                                <p>First, you'll need to sign up for an account. Navigate to our signup page and provide the required information. Once your account is created, you can log in to the main dashboard.</p>
                                <h3 className="text-xl font-bold">2. Deploying Your First Server</h3>
                                <p>From the dashboard, click on 'Create New' and select 'Virtual Machine'. You will be presented with a configuration screen where you can choose your server's region, operating system, and hardware resources. For a basic setup, we recommend Ubuntu 22.04 with 2 vCPU and 4 GB of RAM.</p>
                                <pre className="bg-gray-800 text-white p-4 rounded-md"><code>
{`# Example: Creating a server via our CLI
ecloud servers create --name my-first-server --region us-east-1 --image ubuntu-22.04 --plan standard-2`}
                                </code></pre>
                            </div>
                        </div>
                         <div id="api-reference" className="scroll-mt-20">
                            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                            <div className="prose prose-stone dark:prose-invert max-w-none space-y-4">
                                <p>Our REST API allows you to manage your resources programmatically. All endpoints are secured with API keys and follow standard HTTP conventions.</p>
                                <h3 className="text-xl font-bold">Authentication</h3>
                                <p>To authenticate your requests, you need to include an `Authorization` header with your API key.</p>
                                <pre className="bg-gray-800 text-white p-4 rounded-md"><code>
{`Authorization: Bearer YOUR_API_KEY`}
                                </code></pre>
                                <h3 className="text-xl font-bold">Endpoint: List Servers</h3>
                                <p>Retrieves a list of all your virtual machines.</p>
                                <p><strong>GET</strong> `/v1/servers`</p>
                                <pre className="bg-gray-800 text-white p-4 rounded-md"><code>
{`curl -X GET "https://api.enterprisecloud.com/v1/servers" \\
     -H "Authorization: Bearer YOUR_API_KEY"`}
                                </code></pre>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
