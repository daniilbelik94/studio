"use client";

import { useState, useEffect } from 'react';
import { optimizeTestimonials } from '@/ai/flows/optimize-testimonials';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const availableTestimonials = [
  // Testimonials with metadata for parsing
  '{"quote": "Since migrating to this platform, our application uptime has increased to 99.99%. The performance is unparalleled, especially for our European user base.", "author": "CTO, FinTech Corp", "location_relevance": "Europe", "avatar": "woman professional"}',
  '{"quote": "The scalability of their Virtual Machines is incredible. We handled a 500% traffic spike on Black Friday without a single issue. A game-changer for our e-commerce site.", "author": "Lead Engineer, RetailGiant", "location_relevance": "Global", "avatar": "man engineer"}',
  '{"quote": "As a data science team in the US, their managed Kubernetes service has cut our deployment times in half. The support for ML frameworks is top-notch.", "author": "Head of Data, AnalyticsAI", "location_relevance": "USA", "avatar": "woman data scientist"}',
  '{"quote": "Their object storage is not only fast and affordable but also compliant with all APAC data residency laws, which is critical for our operations in Asia.", "author": "CIO, HealthCare Solutions", "location_relevance": "APAC", "avatar": "man executive"}',
  '{"quote": "We chose them for their robust security features. The peace of mind we get from their advanced threat detection is invaluable for our SaaS platform.", "author": "CISO, SecureSoft", "location_relevance": "Global", "avatar": "woman security"}',
  '{"quote": "The developer experience is fantastic. Their API is well-documented, and the CLI tools make managing our infrastructure in the Americas a breeze.", "author": "DevOps Manager, CodeCrafters", "location_relevance": "Americas", "avatar": "man developer"}'
];

const defaultTestimonials = availableTestimonials.slice(0, 3).map(t => JSON.parse(t));

const userProfile = "A marketing manager at a mid-sized e-commerce company in North America looking for scalable and reliable infrastructure.";

type Testimonial = {
  quote: string;
  author: string;
  location_relevance: string;
  avatar: string;
};

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("New York, USA");

  useEffect(() => {
    // In a real app, location could be determined via browser API or IP lookup.
    // For this demo, we use a static value.
    const getTestimonials = async () => {
      setLoading(true);
      try {
        const result = await optimizeTestimonials({
          userLocation: location,
          userProfile,
          availableTestimonials,
        });

        // Parse the string results from AI into structured objects
        const parsedTestimonials = result.selectedTestimonials.map(t => {
            try {
                return JSON.parse(t) as Testimonial;
            } catch (e) {
                console.warn("Failed to parse testimonial JSON:", t, e);
                return null; // Return null for invalid JSON
            }
        }).filter(Boolean) as Testimonial[]; // Filter out nulls
        
        if(parsedTestimonials.length > 0){
             setTestimonials(parsedTestimonials.slice(0, 3));
        } else {
            // Fallback if AI returns empty or all invalid data
            setTestimonials(defaultTestimonials);
        }

      } catch (error) {
        console.error("Failed to fetch optimized testimonials:", error);
        // Fallback to a default set on error
        setTestimonials(defaultTestimonials);
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, [location]); // Dependency array includes location to refetch if it changes.

  const renderSkeletons = () => (
    Array.from({ length: 3 }).map((_, i) => (
      <Card key={i} className="flex flex-col justify-between p-6">
        <CardHeader>
          <Quote className="w-8 h-8 text-muted" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
        <div className="flex items-center gap-4 pt-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        </div>
      </Card>
    ))
  );

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
      {loading ? renderSkeletons() : testimonials.map((testimonial, i) => {
        const [authorName, companyName] = testimonial.author.split(', ');
        return (
          <Card key={i} className="fade-in-item flex flex-col justify-between bg-muted/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ animationDelay: `${i * 150}ms` }}>
            <CardContent className="pt-8 flex-1">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg font-medium">"{testimonial.quote}"</p>
            </CardContent>
            <div className="flex items-center gap-4 p-6 pt-0">
               <Avatar className="h-12 w-12 border-2 border-primary/50">
                 <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint={testimonial.avatar} />
                 <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
               </Avatar>
               <div>
                <p className="font-semibold">{authorName}</p>
                <p className="text-sm text-muted-foreground">{companyName}</p>
               </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
