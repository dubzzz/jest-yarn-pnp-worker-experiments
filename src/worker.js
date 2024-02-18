import { workerData } from "node:worker_threads";
import prand from "pure-rand";

parentPort.postMessage({ computed: workerData.raw * workerData.raw });
