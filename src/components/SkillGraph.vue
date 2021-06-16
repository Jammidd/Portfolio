<template>
  <div class="w-full mx-1 py-4">
    <div class="block graph text-center">
      <div 
        class="inline-block w-1/3 py-2 bg-gray-100 border-r text-xs"
        :class="{'bg-green-300': level >= 1}">Beginner</div>
      <div 
        class="inline-block w-1/3 py-2 bg-gray-100 border-r text-xs"
        :class="{'bg-green-300': level >= 2}">Intermediate</div>
      <div 
        class="inline-block w-1/3 py-2 bg-gray-100 text-xs"
        :class="{'bg-green-300': level >= 3}">Advanced</div>
    </div>
    <div class="block font-semibold text-md mt-1">{{ name }}
      <span class="float-right text-sm font-light">{{ years }} years</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillGraph',
  props: {
    name: {
      default: 'Skill',
      type: String
    },
    years: {
      default: 1,
      type: Number
    },
    level: {
      default: 1,
      type: Number
    }
  }
}
</script>