<script setup>
const ModrinthIsOpen = ref(false)
</script>

<template>
  <UApp>
  <div>
    <UPageHero
      class="min-h-screen flex items-center"
      title="MCPVP Ranked"
      description="Track your Elo across all kits with in-game leaderboards, secure match history, and real-time rankings on McPVP.club."
      :links="[{
        label: 'Download Mod',
        onClick: () => { ModrinthIsOpen = true, console.log('Modrinthclick') },
        trailingIcon: 'simple-icons:modrinth',
        size: 'xl'
      }, {
        label: 'Join Discord',
        to: 'https://discord.gg/8Mv5Z93C9C',
        target: '_blank',
        icon: 'ic:baseline-discord',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />
    <UModal v-model:open="ModrinthIsOpen">
      <template #content>
        <UCard :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          footer: 'hover:bg-[#21293d] transition-colors'
         }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Mod Status
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="ModrinthIsOpen = false" />
          </div>
        </template>

        <div class="p-4 text-center">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-12 h-12 text-yellow-500 mb-4" />
          <p>Mod not approved by Modrinth yet. Please check back later or join our Discord for updates!</p>
        </div>

        <template #footer>
          <UButton color="black" block @click="ModrinthIsOpen = false">
            Understood
          </UButton>
        </template>
      </UCard>
      </template>
    </UModal>

    <UPageSection
      id="features"
      title="Master the Arena with MCPVP Ranked"
      description="Experience the ultimate competitive edge with our independent community-driven mod. Designed specifically for McPVP.club enthusiasts, we provide the tools you need to track, improve, and showcase your skills in a fair and secure environment."
      :features="[{
        icon: 'i-lucide-trophy',
        title: 'Real Elo Tracking',
        description: 'Track your rankings in real-time across all kits on McPVP.club, including Sword, Axe, Pot, Mace, and more.'
      }, {
        icon: 'i-lucide-layout-list',
        title: 'In-Game Leaderboards',
        description: 'Check the rank of players for any kit without ever leaving the game via our seamless integrated interface.'
      }, {
        icon: 'i-lucide-history',
        title: 'Match History',
        description: 'The mod automatically keeps track of your last 20 matches, allowing you to analyze your performance and growth.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Secure Handshake Method',
        description: 'We use the secure handshake method to prevent spoofing and fake data, ensuring match stats are authentic and safe.'
      }, {
        icon: 'i-lucide-trending-up',
        title: 'Dynamic Elo System',
        description: 'Earn extra ELO through win-streak bonuses. As you climb higher, the stakes increase with adjusted gain and loss rates.'
      }, {
        icon: 'i-lucide-sparkles',
        title: 'Rewards & Cosmetics',
        description: 'Exclusive in-game rewards and cosmetic items for top-ranking players are currently in development.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Ready to show your Skills?"
        description="Join the elite ranks of PvP Ranked players today. Download our custom mod to start tracking your Elo, climb the leaderboards, and prove your dominance in the arena."
        variant="subtle"
        :links="[{
          label: 'Download Mod',
        onClick: () => { ModrinthIsOpen = true, console.log('Modrinthclick') },
        trailingIcon: 'simple-icons:modrinth',
        size: 'xl',
        colour: 'neutral',
        variant: 'outline'
      }, {
          label: 'Join Discord',
          to: 'https://discord.gg/8Mv5Z93C9C',
          target: '_blank',
          icon: 'ic:baseline-discord',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
  </UApp>
</template>
