<script setup lang="ts">
// import { useStore } from '@/store/index;
// const mainStore = useStore();

interface Props {
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: 'default',
})

const emit = defineEmits(['emit-func']);

async function onClick() {
//   mainStore.downloadingName = props.downloadingName;
//   await props.clickFunc();
//   mainStore.downloadingName = '';
  emit('emit-func');
};
</script>

<template>
  <div @click="onClick" class="icon">
    <img src="@/assets/images/logo.png" width="50" />
  </div>
</template>

<style lang="scss">
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, .15);

  &:hover {
    cursor: pointer;
  }
}
</style>
