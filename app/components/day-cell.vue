<script setup lang="ts">
import type { DateValue } from "reka-ui";
import type { Grid } from "reka-ui/date";

const { day, month } = defineProps<{
  day: DateValue;
  month: Grid<DateValue>;
}>();

const { data } = useFetch("/api/issues/:day", {
  params: {
    day: day.toString(),
  },
});

console.log({ day: day.toString() });
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>
      <div class="flex flex-col space-y-1 items-center justify-center">
        <CalendarCellTrigger
          :day="day"
          :month="month.value"
          class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-neutral-700 w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-orange10 data-[selected]:text-orange-500 data-[selected]:bg-orange-50 hover:bg-orange-50 data-[highlighted]:bg-orange5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-orange9 outline-none"
        />
        <span
          v-if="data?.length && data?.length > 0"
          class="p-[1.9px] rounded-full bg-orange-600"
        />
      </div>
    </HoverCardTrigger>
    <HoverCardContent
      side="bottom"
      class="bg-white rounded-md border-[1px] border-solid border-neutral-100 shadow-md p-3 z-10"
    >
      some content
    </HoverCardContent>
  </HoverCardRoot>
</template>
