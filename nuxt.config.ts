import tailwindcss from "@tailwindcss/vite";
import { Env } from "./env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:['~/assets/css/main.css'],
  modules: ['@nuxt/fonts','reka-ui/nuxt'],
  vite:{
    plugins:[tailwindcss()]
  },
  $meta:{
    name:"ComicPulse"
  },
  runtimeConfig:{
    public:{
      POCKETBASE_URL:Env.POCKETBASE_URL
    }
  },
  fonts:{
    families:[
      {name:"Geist",provider:"local",src:"~/assets/fonts/geist.ttf"}
    ],
    devtools:true
  }
})