export interface FAQType {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQType[] = [
  {
    id: 1,
    question: "How long does a thumbnail take?",
    answer: "Usually within 24-48 hours depending on complexity and active production queue lengths."
  },
  {
    id: 2,
    question: "Do you provide revisions?",
    answer: "Yes, structured feedback loops and revisions are included with every project asset to ensure complete satisfaction."
  },
  {
    id: 3,
    question: "Can you work with international clients?",
    answer: "Absolutely. All asset delivery, communication pipelines, and invoicing operations are handled seamlessly via global remote frameworks."
  },
  {
    id: 4,
    question: "What software do you use?",
    answer: "Photoshop, Illustrator, After Effects, Premiere Pro, and Figma form the core structural stack for all conceptualization work."
  }
];