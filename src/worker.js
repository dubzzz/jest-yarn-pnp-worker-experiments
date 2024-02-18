const { workerData, parentPort } = require("node:worker_threads");
const prand = require("pure-rand");

parentPort.postMessage({ computed: workerData.raw * workerData.raw });
