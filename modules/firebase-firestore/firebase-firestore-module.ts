import { resolve } from "path";
import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  // addServerMiddleware,
  addComponentsDir,
  addAutoImportDir,
  createResolver,
  extendPages
} from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule({
  meta: {
    name: "@nuxt-firestore",
    configKey: "nuxt-firestore",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    addPlugin: true,
  },
  hooks: {},
  async setup(moduleOptions, nuxt) {
    console.log("Loading module for Firebase Firestore");
    console.log(moduleOptions);

    extendPages((pages) => {
      pages.push({
        name: "firebase-firestore",
        path: "/firebase-firestore",
        file: resolve(__dirname, "./pages/firebase-firestore.vue"),
      });
    });

    const resolver = createResolver(import.meta.url);

    const importDir = fileURLToPath(
      new URL("./server/middleware", import.meta.url)
    );

    // addServerMiddleware(resolve(importDir, 'some-middleware.ts'))

    const composablesDir = fileURLToPath(
      new URL("./composables", import.meta.url)
    );

    addAutoImportDir(composablesDir)

    if (moduleOptions.addPlugin) {
      addPlugin(resolver.resolve("plugins/firestore"));
    }

    const componentsDir = fileURLToPath(
      new URL("./components", import.meta.url)
    );

    addComponentsDir({
      path: componentsDir,
    });

    nuxt.hook("close", async (nuxt) => {
      console.log("Nuxt module close hook");
    });
  },
});


