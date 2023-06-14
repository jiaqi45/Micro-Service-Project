import { createI18n } from "vue-i18n"

const translations = {
    en: require('@/lang/en.json')
}

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: translations
})
