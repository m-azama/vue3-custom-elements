<script setup lang="ts">
import { useStore } from '@/store/index';
// import AppIcon from '@/components/AppIcon.ce.vue';
// import AppWindow from '@/components/AppWindow.ce.vue';

const mainStore = useStore();

interface Props {
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: 'default',
})

const emit = defineEmits(['mf-click-fnc']);

const toggleWindow = () => {
  //console.log('emitFunc');
  mainStore.toggleWindow();
  emit('mf-click-fnc', 'value from component');
  console.log(props.label);

};
</script>

<template>
  <div class="app">
    <!-- <slot name="header"></slot> -->
    <Transition name="slide-fade">
      <app-window
        v-if="mainStore.isVisibleWindow"
        class="window"
      />
    </Transition>
    <Transition name="slide-fade-icon">
      <app-icon
        v-if="!mainStore.isVisibleWindow"
        @click="toggleWindow"
      />
    </Transition>
  </div>
</template>

<style lang="scss">
//@import '@/style.css';

.app {
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: #646cffaa;
}
.window {
  position: absolute;
  bottom: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all .1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: scale(.9, .9);
  opacity: 0;
}

.slide-fade-icon-enter-active {
  transition: all .1s .2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-icon-leave-active {
  transition: all .1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-icon-enter-from,
.slide-fade-icon-leave-to {
  transform: scale(.1, .1);
  opacity: 0;
}
</style>
