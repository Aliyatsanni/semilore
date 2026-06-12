export interface SocialLink {
  platform: string
  icon: string
  description: string
  href: string
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    description: 'Chat with me directly',
    href: 'https://wa.me/2348160189247'
  },
  {
    platform: 'TikTok',
    icon: 'fab fa-tiktok',
    description: 'Shorts on design & dev',
    href: 'https://www.tiktok.com/@itz.wunmi8'
  }
]
