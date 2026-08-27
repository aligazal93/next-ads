import type { CollectionConfig } from 'payload'

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',

  labels: {
    singular: 'رسالة تواصل',
    plural: 'رسائل التواصل',
  },

  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'companyName', 'phone', 'createdAt'],
  },

  access: {
    // أي زائر يقدر يبعت رسالة
    create: () => true,

    // الرسائل تظهر فقط داخل لوحة التحكم
    read: ({ req }) => Boolean(req.user),

    // التعديل والحذف للأدمن فقط
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: 'fullName',
      type: 'text',
      label: 'الاسم بالكامل',
      required: true,
    },

    {
      name: 'companyName',
      type: 'text',
      label: 'اسم الشركة / المشروع',
      required: false,
    },

    {
      name: 'phone',
      type: 'text',
      label: 'رقم الهاتف',
      required: true,
    },

    {
      name: 'message',
      type: 'textarea',
      label: 'نص الرسالة',
      required: true,
    },
  ],

  timestamps: true,
}
