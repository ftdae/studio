"use server";

import { generateInformationMemo, GenerateInformationMemoInput } from "@/ai/flows/generate-info-memo";
import { generateOnePager, GenerateOnePagerInput } from "@/ai/flows/generate-one-pager";
import { z } from "zod";

const onePagerSchema = z.object({
  companyName: z.string().min(1, { message: "Company name is required." }),
  revenue: z.coerce.number().positive({ message: "Revenue must be a positive number." }),
  expenses: z.coerce.number().positive({ message: "Expenses must be a positive number." }),
  assets: z.coerce.number().positive({ message: "Assets must be a positive number." }),
  valuationEstimate: z.coerce.number().positive({ message: "Valuation must be a positive number." }),
});

const infoMemoSchema = onePagerSchema.extend({
    description: z.string().min(1, { message: "Description is required." }),
    keyClients: z.string().min(1, { message: "Key clients are required." }),
    competitiveAdvantages: z.string().min(1, { message: "Competitive advantages are required." }),
});

type FormState = {
  message: string;
  data?: string;
  issues?: string[];
};

export async function handleGenerateOnePager(prevState: FormState, formData: FormData): Promise<FormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = onePagerSchema.safeParse(rawFormData);
  
  if (!validatedFields.success) {
    return {
      message: "Error: Invalid form data.",
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const input: GenerateOnePagerInput = validatedFields.data;
    const result = await generateOnePager(input);
    return { message: "Success", data: result.onePager };
  } catch (error) {
    return { message: `Error: ${error instanceof Error ? error.message : "An unknown error occurred"}` };
  }
}


export async function handleGenerateInfoMemo(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = infoMemoSchema.safeParse(rawFormData);
  
    if (!validatedFields.success) {
      return {
        message: "Error: Invalid form data.",
        issues: validatedFields.error.issues.map((issue) => issue.message),
      };
    }
  
    try {
      const input: GenerateInformationMemoInput = validatedFields.data;
      const result = await generateInformationMemo(input);
      return { message: "Success", data: result.informationMemo };
    } catch (error) {
      return { message: `Error: ${error instanceof Error ? error.message : "An unknown error occurred"}` };
    }
}
