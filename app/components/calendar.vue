<script setup lang="ts">
const { data } = useFetch("/api/issues", {});
</script>

<template>
  <ScrollAreaRoot class="w-full h-full">
    <ScrollAreaViewport
      class="w-full h-full pb-10"
      style="--scrollbar-size: 10px"
    >
      <!-- TODO: group by release date -->
      <div v-for="issue in data" class="my-1">
        <div
          class="p-3 flex items-center justify-between rounded-md border-[1px] border-solid border-neutral-100"
        >
          <span class="text-xs text-neutral-700 font-bold">
            {{ issue.title }}
          </span>
        </div>
      </div>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar>
      <ScrollAreaThumb
        class="flex-1 bg-neutral-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:w-full before:h-full before:min-h-[44px]"
      />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
  <!-- <CalendarRoot
    v-slot="{ weekDays, grid }"
    :is-date-unavailable="isDateUnavailable"
    :default-value="date"
    class="mt-6 rounded-xl p-4"
    fixed-weeks
  >
    <CalendarHeader class="flex items-center justify-between">
      <CalendarPrev
        class="flex items-center justify-center cursor-pointer text-orange-600 p-2 rounded-md hover:bg-orange-50"
      >
        <ChevronLeft :size="15"/>
      </CalendarPrev>
      <CalendarHeading class="text-md text-orange-600 font-medium" />
      <CalendarNext
        class="flex items-center justify-center cursor-pointer text-orange-600 p-2 rounded-md hover:bg-orange-50"
      >
       <ChevronRight :size="15"/>
      </CalendarNext>
    </CalendarHeader>
    <div
      class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
    >
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        class="w-full border-collapse select-none space-y-1"
      >
        <CalendarGridHead>
          <CalendarGridRow class="mb-1 grid w-full grid-cols-7">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="rounded-md text-sm text-orange-700"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="grid">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="grid grid-cols-7"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              class="flex items-center justify-center text-center text-sm"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-neutral-700 w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-orange10 data-[selected]:text-orange-500 data-[selected]:bg-orange-50 hover:bg-orange-50 data-[highlighted]:bg-orange5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-orange9 outline-none"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot> -->
</template>
