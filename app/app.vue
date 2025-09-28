<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui';
</script>

<template>
  <div class="w-full h-screen bg-gradient-to-br from-neutral-50 to-green-50 flex items-center justify-center">
    <div class="w-5/6 h-5/6">
      <SplitterGroup direction="horizontal" id="splitter-group-1">
 <SplitterPanel
        id="splitter-group-1-panel-1"
        :min-size="20"
        class="border-[1px] border-solid bg-white border-neutral-100 rounded-md flex items-center justify-center"
      >
    <Calender/>
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
