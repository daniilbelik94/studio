
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t z-10">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" width={32} height={32} alt="Enterprise Cloud Logo" />
                <span className="text-xl font-bold">Enterprise Cloud</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Scalable cloud solutions for modern enterprise businesses.
              </p>
              <div className="flex mt-6 space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
              </div>
            </div>
            <div className="col-span-1 md:col-start-2">
              <h3 className="font-semibold tracking-wider">Products</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/products/virtual-machines" className="text-muted-foreground hover:text-primary transition-colors">Virtual Machines</Link></li>
                <li><Link href="/products/object-storage" className="text-muted-foreground hover:text-primary transition-colors">Object Storage</Link></li>
                <li><Link href="/products/managed-kubernetes" className="text-muted-foreground hover:text-primary transition-colors">Managed Kubernetes</Link></li>
                <li><Link href="/products/enterprise-security" className="text-muted-foreground hover:text-primary transition-colors">Enterprise Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/company/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/company/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="/company/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/legal/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal/acceptable-use" className="text-muted-foreground hover:text-primary transition-colors">Acceptable Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; 2024 Enterprise Cloud Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

    