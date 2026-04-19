import { defaultCache } from "@serwist/next/worker";
import { Serwist } from "serwist";

// O Serwist injetará automaticamente o __SW_MANIFEST aqui durante o build
const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();