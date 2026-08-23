import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'الصفحة الرئيسية',
  //   admin: {
  //     group: 'لــوحــة التــحــكـم  ',
  //   },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'قسم الهيرو',
      fields: [
        {
          name: 'badge',
          type: 'text',
          label: 'النص الصغير',
          required: true,
        },
        {
          name: 'titleLineOne',
          type: 'text',
          label: 'العنوان - السطر الأول',
          required: true,
        },
        {
          name: 'titleLineTwo',
          type: 'text',
          label: 'العنوان - السطر الثاني',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'الوصف',
          required: true,
        },
        {
          name: 'primaryButton',
          type: 'group',
          label: 'الزر الرئيسي',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'نص الزر',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'الرابط',
              required: true,
            },
          ],
        },
        {
          name: 'secondaryButton',
          type: 'group',
          label: 'الزر الثاني',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'نص الزر',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'الرابط',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'قسم من نحن',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'العنوان',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'الوصف الرئيسي',
          required: true,
        },
        {
          name: 'secondaryDescription',
          type: 'textarea',
          label: 'الوصف الإضافي',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'صورة القسم',
          required: true,
        },
        {
          name: 'button',
          type: 'group',
          label: 'زر القسم',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'نص الزر',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'الرابط',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'craftsmanshipSection',
      type: 'group',
      label: 'قسم تفاصيل وجودة العمل',
      fields: [
        {
          name: 'badge',
          type: 'text',
          label: 'العنوان الصغير',
        },
        {
          name: 'title',
          type: 'textarea',
          label: 'العنوان الرئيسي',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'الوصف',
        },
        {
          name: 'images',
          type: 'array',
          label: 'صور القسم',
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'الصورة',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'ctaSection',
      type: 'group',
      label: 'قسم الدعوة للتواصل',
      fields: [
        {
          name: 'titleLineOne',
          type: 'text',
          label: 'العنوان - السطر الأول',
        },
        {
          name: 'titleLineTwo',
          type: 'text',
          label: 'العنوان - السطر الثاني',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'النص الصغير',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'الوصف',
        },
      ],
    },
  ],
}
