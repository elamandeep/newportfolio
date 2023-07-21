import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string"
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'url'
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'url'
    })
  ],
  liveEdit: false
})