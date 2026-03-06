import { defineField, defineType } from 'sanity'

export const weeklyDigest = defineType({
  name: 'weeklyDigest',
  title: 'Weekly Digest',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'weekOf',
      title: 'Week Of',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'items',
      title: 'Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
      description: 'Only one digest should be active at a time.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      weekOf: 'weekOf',
    },
    prepare({ title, weekOf }) {
      const formattedDate = weekOf
        ? new Date(weekOf).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'No date'
      return {
        title,
        subtitle: `Week of ${formattedDate}`,
      }
    },
  },
  orderings: [
    {
      title: 'Week Of, New',
      name: 'weekOfDesc',
      by: [{ field: 'weekOf', direction: 'desc' }],
    },
  ],
})
