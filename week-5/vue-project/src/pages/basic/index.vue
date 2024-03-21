<script setup lang="ts">
import TextInterpolation from '@/components/text-interpolation.vue'
import RawHtml from '@/components/raw-html.vue'
import AttributeBinding from '@/components/attribute-binding.vue'
import ExpressionVue from '@/components/expression-vue.vue'
import VShow from '@/components/v-show.vue'
import VIf from '@/components/v-if.vue'
import VFor from '@/components/v-for.vue'
import VModel from '@/components/v-model.vue'
import VSlot from '@/components/v-slot.vue'
import ElRef from '@/components/el-ref.vue'
import UserComponent from '@/components/user-component.vue'
import { ref } from 'vue'

const show = ref('user')

const switchDark = (type: 'DARK' | 'LIGHT') => {
  console.log('switch', type)
}
</script>

<template>
  <VSlot title="Hello Title" @switch="switchDark">
    <template #header> HI </template>
    <RawHtml></RawHtml>
    ______
    <TextInterpolation></TextInterpolation>
    _____________
    <attribute-binding></attribute-binding>
    _____ <br />
    <ExpressionVue></ExpressionVue>
    <br />
    <VShow></VShow>
    <br />
    <VIf />
    <VFor class="m-"></VFor>
    <VModel></VModel>
    <div v-pre>{{ userName }} {{ user > 23 }}</div>
    <ElRef></ElRef>
    <button @click="show = ''">remove user component</button>
    <UserComponent v-if="show == 'user'"></UserComponent>
    <div>
      
    </div>
  </VSlot>
</template>
