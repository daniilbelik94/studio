

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";


export default function TermsOfServicePage() {
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
                      <BreadcrumbPage>Terms of Service</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <article className="prose prose-stone dark:prose-invert max-w-none">
            <h1>Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: July 26, 2024</p>
            
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://enterprisecloud.com website (the "Service") operated by Enterprise Cloud ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2>1. Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

            <h2>2. Services</h2>
            <p>We provide various cloud computing services, including but not limited to Virtual Machines, Object Storage, and Managed Kubernetes (collectively, the "Services"). We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Services, subject to these Terms and our Acceptable Use Policy.</p>
            <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.</p>

            <h2>3. Payments and Fees</h2>
            <p>You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. You must provide us with a valid credit card or other payment method acceptable to us. Your Payment Provider agreement governs your use of the designated credit card, and you must refer to that agreement and not the Terms to determine your rights and liabilities.</p>

            <h2>4. Limitation Of Liability</h2>
            <p>In no event shall Enterprise Cloud, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

            <h2>5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>

            <h2>Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@enterprisecloud.com">legal@enterprisecloud.com</a>.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    