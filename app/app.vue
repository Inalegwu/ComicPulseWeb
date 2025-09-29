<script setup lang="ts">
import { Info, RefreshCw, Settings } from "lucide-vue-next";
import {
  HoverCardRoot,
  SplitterGroup,
  SplitterPanel,
  SplitterResizeHandle,
} from "reka-ui";
</script>

<template>
  <div
    class="w-full h-screen bg-gradient-to-br from-neutral-50 to-orange-50 flex items-center justify-center"
  >
    <div class="w-[90%] h-[90%]">
      <SplitterGroup direction="horizontal" id="splitter-group-1">
        <SplitterPanel
          id="splitter-group-1-panel-1"
          :min-size="60"
          :max-size="70"
          class="border-[1px] border-solid space-y-4 bg-white border-neutral-100 rounded-md flex flex-col p-4"
        >
          <span class="flex items-center justify-between">
            <h3 class="font-medium text-2xl text-orange-600">Pulse Calendar</h3>
            <HoverCardRoot>
              <HoverCardTrigger class="text-orange-600">
                <Info :size="13" />
              </HoverCardTrigger>
              <HoverCardContent
                side="left"
                class="p-3 mt-2 max-w-62 bg-white shadow-lg rounded-md border-[1px] border-solid border-neutral-200"
              >
                <div
                  class="flex flex-col space-y-1 items-start bg-white justify-center"
                >
                  <span class="text-xs text-neutral-600 text-start"
                    >The
                    <span class="text-orange-600">ComicPulse calendar</span>, is
                    a project designed to help keep your finger on the pulse of
                    comic book releases on every wednesday of any given month
                  </span>
                  <span class="text-[11px] text-neutral-400 text-start"
                    >designed and developed by
                    <a
                      class="text-orange-500 hover:underline"
                      target="_blank"
                      href="https://github.com/Inalegwu"
                      >@disgruntleddev</a
                    ></span
                  >
                </div>
              </HoverCardContent>
            </HoverCardRoot>
          </span>
          <Calendar />
        </SplitterPanel>
        <SplitterResizeHandle
          id="splitter-group-1-resize-handle-1"
          class="w-1"
        />
        <SplitterPanel id="splitter-group-1-panel-2" :min-size="20">
          <SplitterGroup id="splitter-group-2" direction="vertical">
            <SplitterPanel
              id="splitter-group-2-panel-1"
              :min-size="50"
              class="border-[1px] border-solid bg-white border-neutral-100 rounded-md"
            >
              <div
                class="w-full h-full flex flex-col items-start justify-start p-3"
              >
                <span class="w-full flex items-center justify-start space-x-3">
                  <RefreshCw class="text-orange-600" :size="13" />
                </span>
              </div>
            </SplitterPanel>
            <SplitterResizeHandle
              id="splitter-group-2-resize-handle-1"
              class="h-1"
            />
            <SplitterPanel
              id="splitter-group-2-panel-2"
              :min-size="20"
              class="border-[1px] border-solid bg-white border-neutral-100 rounded-md flex items-center justify-center"
            >
              <div
                class="w-full h-full flex flex-col items-start justify-start p-3"
              >
                <span class="w-full flex items-center justify-start space-x-3">
                  <Settings class="text-orange-600" :size="13" />
                </span>
              </div>
            </SplitterPanel>
          </SplitterGroup>
        </SplitterPanel>
      </SplitterGroup>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Geist", sans-serif;
}
</style>
