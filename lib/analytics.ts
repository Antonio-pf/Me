import { track } from '@vercel/analytics'

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  track(eventName, properties)
}

// Event names padronizados
export const ANALYTICS_EVENTS = {
  // Hero Actions
  CLICKED_GITHUB: 'clicked_github',
  CLICKED_LINKEDIN: 'clicked_linkedin',
  CLICKED_DOWNLOAD_CV: 'clicked_download_cv',

  // Contact Actions
  CLICKED_EMAIL: 'clicked_email',
  CLICKED_WEBSITE: 'clicked_website',
  CLICKED_PHONE: 'clicked_phone',

  // Navigation
  CLICKED_NAV_ABOUT: 'clicked_nav_about',
  CLICKED_NAV_EXPERIENCE: 'clicked_nav_experience',
  CLICKED_NAV_PROJECTS: 'clicked_nav_projects',
  CLICKED_NAV_SKILLS: 'clicked_nav_skills',
  CLICKED_NAV_CONTACT: 'clicked_nav_contact',

  // Chat Widget
  CHAT_OPENED: 'chat_opened',
  CHAT_CLOSED: 'chat_closed',
  CHAT_QUICK_REPLY_CLICKED: 'chat_quick_reply_clicked',
  CHAT_HISTORY_CLEARED: 'chat_history_cleared',

  // Projects & Lightbox
  PROJECT_LIGHTBOX_OPENED: 'project_lightbox_opened',
  PROJECT_LIGHTBOX_NAVIGATED: 'project_lightbox_navigated',
  PROJECT_THUMBNAIL_CLICKED: 'project_thumbnail_clicked',
  PROJECT_GITHUB_CLICKED: 'project_github_clicked',
  PROJECT_DEMO_CLICKED: 'project_demo_clicked',
}
