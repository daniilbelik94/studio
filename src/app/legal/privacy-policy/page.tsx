

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
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
                      <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
          <article className="prose prose-stone dark:prose-invert max-w-none">
            <h1>Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: July 26, 2024</p>
            
            <p>Enterprise Cloud ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
            </ul>

            <h2>2. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Process payments and refunds.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>

            <h2>4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

             <h2>5. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:privacy@enterprisecloud.com">privacy@enterprisecloud.com</a>.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    