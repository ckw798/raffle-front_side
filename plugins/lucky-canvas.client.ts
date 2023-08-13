// register as client plugin
import VueLuckyCanvas from '@lucky-canvas/vue';

export default defineNuxtPlugin(({ vueApp }) => {
  // register as global components
  vueApp.use(VueLuckyCanvas);
});

// declare global components' type
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LuckyWheel: typeof import('@lucky-canvas/vue').LuckyWheel;
    LuckyGrid: typeof import('@lucky-canvas/vue').LuckyGrid;
    SlotMachine: typeof import('@lucky-canvas/vue').SlotMachine;
  }
}
