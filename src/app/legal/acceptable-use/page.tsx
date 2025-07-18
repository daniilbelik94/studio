

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function AcceptableUsePage() {
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
        <div className="container max-w-4xl py-12 px-4 md:px-6">
           <Breadcrumb className="mb-8">
              <BreadcrumbList>
                  <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                          <Link href="/">Home</Link>
                      </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>Legal</BreadcrumbPage>
                  </BreadcrumbItem>
                   <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>Acceptable Use Policy</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <article className="prose prose-stone dark:prose-invert max-w-none">
             <Image src="https://placehold.co/800x300.png" width={800} height={300} data-ai-hint="legal abstract gavel" alt="Acceptable Use Policy" className="mb-8 rounded-lg shadow-md w-full object-cover" />
            <h1>Acceptable Use Policy</h1>
            <p className="text-muted-foreground">Last updated: July 26, 2024</p>
            
            <p>This Acceptable Use Policy ("AUP") governs your use of the services provided by Enterprise Cloud ("we," "us," or "our") and is incorporated by reference into our Terms of Service. By using our services, you agree to comply with this AUP. We may modify this AUP at any time by posting a revised version on our website.</p>

            <h2>1. Prohibited Activities</h2>
            <p>You may not use our services to engage in, foster, or promote illegal, abusive, or irresponsible behavior, including but not limited to:</p>
            <ul>
                <li><strong>Illegal Content:</strong> Hosting, distributing, or linking to any content that is illegal under applicable law.</li>
                <li><strong>Intellectual Property Infringement:</strong> Infringing upon the intellectual property rights of others, including copyrights, trademarks, patents, or trade secrets.</li>
                <li><strong>Harmful or Fraudulent Activities:</strong> Engaging in activities that are harmful to others, our operations, or reputation, including distributing malware, phishing, or engaging in fraudulent schemes.</li>
                <li><strong>Network Abuse:</strong> Any activity that disrupts or interferes with our network or the services of other users, including denial-of-service (DoS) attacks, unauthorized network scanning, or mail bombing.</li>
                <li><strong>Spam:</strong> Sending, or facilitating the sending of, unsolicited bulk email or communications.</li>
            </ul>

            <h2>2. Content Standards</h2>
            <p>You are responsible for all content hosted on or transmitted via our services. You may not host content that is obscene, defamatory, or constitutes child pornography. We reserve the right to remove any content that we deem, in our sole discretion, to be in violation of this AUP.</p>

            <h2>3. Security</h2>
            <p>You are responsible for maintaining the security of your account and systems. You must take reasonable security precautions, including using strong passwords and keeping your software up to date. You must not attempt to circumvent user authentication or security of any host, network, or account.</p>

            <h2>4. Enforcement</h2>
            <p>We reserve the right to investigate any violation of this AUP. We may, without notice, suspend or terminate your access to the services if you engage in activities that violate this policy. We may also report any activity that we suspect violates any law or regulation to appropriate law enforcement officials, regulators, or other appropriate third parties.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Acceptable Use Policy, please contact us at <a href="mailto:legal@enterprisecloud.com">legal@enterprisecloud.com</a>.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
