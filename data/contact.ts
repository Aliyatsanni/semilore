export interface ContactInfo {
  icon: string
  title: string
  content: string
  href?: string
}

export const contactInfo: ContactInfo[] = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    content: 'liyabaealiyat@gmail.com',
    href: 'mailto:liyabaealiyat@gmail.com'
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    content: '+234 816 018 9247',
    href: 'tel:+2348160189247'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    content: 'Nigeria'
  }
]
