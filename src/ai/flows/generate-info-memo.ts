'use server';

/**
 * @fileOverview An AI agent for generating comprehensive information memos with AI-powered key insight highlighting.
 *
 * - generateInformationMemo - A function that generates the information memo.
 * - GenerateInformationMemoInput - The input type for the generateInformationMemo function.
 * - GenerateInformationMemoOutput - The return type for the generateInformationMemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInformationMemoInputSchema = z.object({
  companyName: z.string().describe('The name of the company.'),
  revenue: z.number().describe('The company\'s annual revenue.'),
  expenses: z.number().describe('The company\'s annual expenses.'),
  assets: z.number().describe('The company\'s total assets.'),
  description: z.string().describe('A detailed description of the company and its operations.'),
  valuationEstimate: z.number().describe('The estimated valuation of the company.'),
  keyClients: z.string().describe('A list of key clients.'),
  competitiveAdvantages: z.string().describe('A description of the company\'s competitive advantages.'),
});

export type GenerateInformationMemoInput = z.infer<typeof GenerateInformationMemoInputSchema>;

const GenerateInformationMemoOutputSchema = z.object({
  informationMemo: z.string().describe('The generated information memo.'),
});

export type GenerateInformationMemoOutput = z.infer<typeof GenerateInformationMemoOutputSchema>;

export async function generateInformationMemo(input: GenerateInformationMemoInput): Promise<GenerateInformationMemoOutput> {
  return generateInformationMemoFlow(input);
}

const generateInformationMemoPrompt = ai.definePrompt({
  name: 'generateInformationMemoPrompt',
  input: {schema: GenerateInformationMemoInputSchema},
  output: {schema: GenerateInformationMemoOutputSchema},
  prompt: `You are an AI assistant specializing in creating investor-ready information memos.

  Based on the financial data and company information provided, generate a comprehensive information memo that highlights key insights and presents the company in the best possible light.

  Company Name: {{{companyName}}}
  Revenue: {{{revenue}}}
  Expenses: {{{expenses}}}
  Assets: {{{assets}}}
  Description: {{{description}}}
  Valuation Estimate: {{{valuationEstimate}}}
  Key Clients: {{{keyClients}}}
  Competitive Advantages: {{{competitiveAdvantages}}}

  Information Memo:`,
});

const generateInformationMemoFlow = ai.defineFlow(
  {
    name: 'generateInformationMemoFlow',
    inputSchema: GenerateInformationMemoInputSchema,
    outputSchema: GenerateInformationMemoOutputSchema,
  },
  async input => {
    const {output} = await generateInformationMemoPrompt(input);
    return output!;
  }
);
