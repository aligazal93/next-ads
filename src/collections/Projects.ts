import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',

  labels: {
    singular: 'مشروع',
    plural: 'المشاريع',
  },

  //   admin: {
  //     group: 'لــوحــة التــحــكـم',
  //     useAsTitle: 'title',
  //   },

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'اسم المشروع',
      required: true,
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: ' الخدمة ',
      //   required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'وصف المشروع',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'صورة المشروع',
      required: true,
    },
  ],
}
