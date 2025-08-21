import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.array(z.enum(['Web Design', 'AI', 'UX Design', 'Development', 'Marketing', 'Updates'])),
    color: z.enum(['primary', 'mint', 'coral', 'blue', 'purple', 'lime', 'highlight']),
    tags: z.array(z.string()),
    image: z.string().optional(),
    featuredImage: z.string().optional(),
    featuredImageCaption: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    author: z.string().default('Matt Whitfield'),
    readTime: z.string().optional(),
    ctaPlacement: z.enum(['after-hero', 'in-content', 'none']).default('after-hero'),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

// Define the schema for case studies collection
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    image: z.string(),
    imageSecondary: z.string().optional(),
    publishDate: z.date().optional(),
    tags: z.array(z.string()),
    color: z.enum(['primary', 'mint', 'coral', 'blue', 'purple', 'lime', 'highlight']),
    services: z.array(z.string()),
    featured: z.boolean().default(false),
    projectFeatures: z.array(z.string()).optional(),
    // New schema properties for enhanced case studies
    challenge: z.string().optional(),
    caseStudyLink: z.string().optional(),
    goals: z.array(z.string()).optional(),
    solution: z.string().optional(),
    keyFeatures: z.array(
      z.object({
        title: z.string(),
        color: z.enum(['primary', 'mint', 'coral', 'blue', 'purple', 'lime', 'highlight']),
        description: z.string()
      })
    ).optional(),
    results: z.string().optional(),
    resultsMetrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        color: z.enum(['primary', 'mint', 'coral', 'blue', 'purple', 'lime', 'highlight'])
      })
    ).optional(),
    testimonial: z.string().optional(),
    testimonialAuthor: z.string().optional(),
    testimonialTitle: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudiesCollection,
};
