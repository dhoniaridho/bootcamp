<script setup lang="ts">
import TextInterpolation from './components/text-interpolation.vue'
import RawHtml from './components/raw-html.vue'
import AttributeBinding from './components/attribute-binding.vue'
import ExpressionVue from './components/expression-vue.vue'
import VShow from './components/v-show.vue'
import VIf from './components/v-if.vue'
</script>

<template>
  <RawHtml></RawHtml>
  ______
  <TextInterpolation></TextInterpolation>
  _____________
  <attribute-binding></attribute-binding>
  _____ <br />
  <ExpressionVue></ExpressionVue>
  <br>
  <VShow></VShow>
  <br>
  <VIf />
</template>
