<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'PVP Ranked'
const description = '"Track your Elo across all kits with in-game leaderboards, secure match history, and real-time rankings on McPVP.club.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>


    <UMain>
      <NuxtPage />
      <UModals />
    </UMain>

    <USeparator icon="ic:baseline-blur-on" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built by ArSi • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/ArSiJa8"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
