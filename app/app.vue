<script setup lang="ts">
import { Info } from "lucide-vue-next";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui';
</script>

<template>
  <div class="w-full h-screen bg-gradient-to-br from-neutral-50 to-green-50 flex items-center justify-center">
    <div class="w-[90%] h-[90%]">
      <SplitterGroup direction="horizontal" id="splitter-group-1">
 <SplitterPanel
        id="splitter-group-1-panel-1"
        :min-size="20"
        class="border-[1px] border-solid bg-white border-neutral-100 rounded-md flex flex-col p-4"
      >
      <span class="flex items-center justify-between space-x-3">
      <h3 class="font-medium text-xl">Pulse Calendar</h3>
      <button class="p-1 rounded-md hover:bg-neutral-100 flex items-center justify-center">
        <Info/>
      </button>
      </span>
    </SplitterPanel>
     <SplitterResizeHandle
        id="splitter-group-1-resize-handle-1"
        class="w-1"
      />
        <SplitterPanel
        id="splitter-group-1-panel-2"
        :min-size="20"
      >
        <SplitterGroup
          id="splitter-group-2"
          direction="vertical"
        >
          <SplitterPanel
            id="splitter-group-2-panel-1"
            :min-size="20"
            class="border-[1px] border-solid bg-red-100 border-neutral-100 rounded-md flex items-center justify-center"
          >
            Panel B
          </SplitterPanel>
          <SplitterResizeHandle
            id="splitter-group-2-resize-handle-1"
            class="h-1"
          />
          <SplitterPanel
            id="splitter-group-2-panel-2"
            :min-size="20"
            class="border-[1px] border-solid bg-blue-100 border-neutral-100 rounded-md flex items-center justify-center"
          >
            Panel C
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
      </SplitterGroup>
    </div>
  </div>
</template>

<style scoped>
*{
  font-family: Geist, sans-serif;
}
</style>