import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brands',

  labels: {
    singular: 'براند',
    plural: 'البراندات',
  },

  //   admin: {
  //     group: 'لــوحــة التــحــكـم',
  //     useAsTitle: 'name',
  //   },

  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'اسم البراند',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'صورة البراند',
      required: true,
    },
  ],
}
