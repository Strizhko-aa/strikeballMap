<template>
  <!-- обертка podition: fixed -->
  <div class="fixed z-10 top-0 bottom-0 w-screen h-screen">
    <div class="flex relative z-10 items-center justify-center w-full h-full">
      <div class="bg-gray-400 px-4 py-2 rounded shadow">
        <slot/>
      </div>
    </div>

    <!-- background -->
    <div class="absolute z-0 top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
  </div>
</template>
