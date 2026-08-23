import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',

  label: 'إعدادات الموقع',

  //   admin: {
  //     group: 'اعدات الموقع',
  //   },

  fields: [
    {
      name: 'branding',
      type: 'group',
      label: 'الهوية',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          label: 'اسم الشركة',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'اللوجو',
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'media',
          label: 'Favicon',
        },
      ],
    },

    {
      name: 'header',
      type: 'group',
      label: 'الهيدر',
      fields: [
        {
          name: 'navigation',
          type: 'array',
          label: 'روابط القائمة',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'اسم الرابط',
            },
            {
              name: 'url',
              type: 'text',
              label: 'الرابط',
            },
          ],
        },
        {
          name: 'cta',
          type: 'group',
          label: 'زر الهيدر',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'نص الزر',
            },
            {
              name: 'url',
              type: 'text',
              label: 'الرابط',
            },
          ],
        },
      ],
    },

    {
      name: 'contact',
      type: 'group',
      label: 'بيانات التواصل',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'رقم الهاتف',
        },
        {
          name: 'whatsapp',
          type: 'text',
          label: 'رقم واتساب',
        },
        {
          name: 'email',
          type: 'email',
          label: 'البريد الإلكتروني',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'العنوان',
        },
      ],
    },

    {
      name: 'socials',
      type: 'array',
      label: 'مواقع التواصل الاجتماعي',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'المنصة',
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin',
            },
            {
              label: 'TikTok',
              value: 'tiktok',
            },
            {
              label: 'X',
              value: 'x',
            },
            {
              label: 'YouTube',
              value: 'youtube',
            },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'الرابط',
        },
      ],
    },

    {
      name: 'footer',
      type: 'group',
      label: 'الفوتر',
      fields: [
        {
          name: 'description',
          type: 'textarea',
          label: 'نبذة مختصرة',
        },
        {
          name: 'copyright',
          type: 'text',
          label: 'حقوق النشر',
        },
      ],
    },

    {
      name: 'seo',
      type: 'group',
      label: 'SEO الافتراضي',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'صورة المشاركة',
        },
      ],
    },
  ],
}
