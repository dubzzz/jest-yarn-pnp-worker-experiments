import { Worker } from "node:worker_threads";

test("should work", async () => {
  const currentFileURL = new URL(import.meta.url);
  const workerFileURL = new URL( // hacky approach! just for the experiment
    currentFileURL.toString().replace("main.spec.js", "worker.js")
  );
  const worker = new Worker(workerFileURL, {
    workerData: { raw: 5 },
  });
  const { computed } = await new Promise((resolve) =>
    worker.on("message", resolve)
  );
  expect(computed).toBe(25);
  await worker.terminate();
});
