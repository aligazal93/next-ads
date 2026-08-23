import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',

  labels: {
    singular: 'خدمة',
    plural: 'الخدمات',
  },
  admin: {
    useAsTitle: 'title',
  },
  //   admin: {
  //     group: 'لــوحــة التــحــكـم',
  //     useAsTitle: 'title',
  //   },

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'اسم الخدمة',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'وصف الخدمة',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'صورة الخدمة',
      required: true,
    },
  ],
}
