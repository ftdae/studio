'use server';

/**
 * @fileOverview AI agent that generates a one-page summary of a company's valuation.
 *
 * - generateOnePager - A function that generates the one-pager.
 * - GenerateOnePagerInput - The input type for the generateOnePager function.
 * - GenerateOnePagerOutput - The return type for the generateOnePager function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateOnePagerInputSchema = z.object({
  companyName: z.string().describe('The name of the company.'),
  revenue: z.number().describe('The company revenue.'),
  expenses: z.number().describe('The company expenses.'),
  assets: z.number().describe('The company assets.'),
  valuationEstimate: z.number().describe('The estimated valuation of the company.'),
});
export type GenerateOnePagerInput = z.infer<typeof GenerateOnePagerInputSchema>;

const GenerateOnePagerOutputSchema = z.object({
  onePager: z.string().describe('The generated one-page summary.'),
});
export type GenerateOnePagerOutput = z.infer<typeof GenerateOnePagerOutputSchema>;

export async function generateOnePager(input: GenerateOnePagerInput): Promise<GenerateOnePagerOutput> {
  return generateOnePagerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateOnePagerPrompt',
  input: {schema: GenerateOnePagerInputSchema},
  output: {schema: GenerateOnePagerOutputSchema},
  prompt: `You are an AI assistant that generates a one-page summary of a company's valuation.

  Based on the following information, create a concise and investor-ready one-pager:

  Company Name: {{{companyName}}}
  Revenue: {{{revenue}}}
  Expenses: {{{expenses}}}
  Assets: {{{assets}}}
  Valuation Estimate: {{{valuationEstimate}}}

  The one-pager should include:
  - A brief overview of the company.
  - Key financial highlights.
  - The valuation estimate and its basis.
  - A compelling conclusion to attract potential investors.
  `,
});

const generateOnePagerFlow = ai.defineFlow(
  {
    name: 'generateOnePagerFlow',
    inputSchema: GenerateOnePagerInputSchema,
    outputSchema: GenerateOnePagerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
