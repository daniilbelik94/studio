'use server';

/**
 * @fileOverview A flow that optimizes the selection of customer testimonials based on user location and profile data.
 *
 * - optimizeTestimonials - A function that selects the most relevant testimonials.
 * - OptimizeTestimonialsInput - The input type for the optimizeTestimonials function.
 * - OptimizeTestimonialsOutput - The return type for the optimizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeTestimonialsInputSchema = z.object({
  userLocation: z
    .string()
    .describe('The location of the user (e.g., city, state, or country).'),
  userProfile: z
    .string()
    .describe('A description of the user profile'),
  availableTestimonials: z
    .array(z.string())
    .describe('An array of available customer testimonials.'),
});
export type OptimizeTestimonialsInput = z.infer<
  typeof OptimizeTestimonialsInputSchema
>;

const OptimizeTestimonialsOutputSchema = z.object({
  selectedTestimonials: z
    .array(z.string())
    .describe(
      'An array of the most relevant customer testimonials for the user.'
    ),
});
export type OptimizeTestimonialsOutput = z.infer<
  typeof OptimizeTestimonialsOutputSchema
>;

export async function optimizeTestimonials(
  input: OptimizeTestimonialsInput
): Promise<OptimizeTestimonialsOutput> {
  return optimizeTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeTestimonialsPrompt',
  input: {schema: OptimizeTestimonialsInputSchema},
  output: {schema: OptimizeTestimonialsOutputSchema},
  prompt: `You are an AI expert in selecting the most relevant customer testimonials for a user based on their location and profile.

Given the user's location: {{{userLocation}}},
profile: {{{userProfile}}},
and the following available testimonials:

{{#each availableTestimonials}} - {{{this}}}
{{/each}}

Select the testimonials that would be most compelling and relevant to the user.
Return only the selected testimonials in an array.
`,
});

const optimizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'optimizeTestimonialsFlow',
    inputSchema: OptimizeTestimonialsInputSchema,
    outputSchema: OptimizeTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
