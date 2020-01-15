<template>
  <div class="w-20 h-20 bg-gray-300 rounded-lg m-10" :class="{'shadow-inner': under, 'shadow-lg': !under}">
  </div>
</template>

<script>
export default {
  name: 'squire',
  props: ['under']
}
</script>
