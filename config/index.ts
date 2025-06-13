import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'EOC Agent',
  description: 'Decision Helper in an EOC environment',
  copyright: 'ADERSIM + EXINES',
  privacy_policy: '',
  default_language: 'en',
}

export const isShowPrompt = true
export const promptTemplate = 'You are an EOC Agent.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
