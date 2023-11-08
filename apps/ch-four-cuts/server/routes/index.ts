import { publicProcedure, router } from '../trpc.js';
import { cameraRouter } from './camera.js';
import { printerRouter } from './printer.js';
import { sessionRouter } from './session.js';
import { settingsRouter } from './settings.js';

export const appRouter = router({
  printer: printerRouter,
  camera: cameraRouter,
  session: sessionRouter,
  settings: settingsRouter,
  greet: publicProcedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query(({ input }) => ({ greeting: `hello, ${input}!` })),
});

export type AppRouter = typeof appRouter;
