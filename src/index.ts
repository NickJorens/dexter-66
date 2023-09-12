import * as dotenv from "dotenv";
import * as process from "process";
import winston, { createLogger, format } from "winston";
import { DexterConfig, RequestConfig, Dexter, BlockfrostProvider, LucidProvider, LiquidityPool, WingRiders, Asset, SwapRequest } from "@indigo-labs/dexter";

dotenv.config();

const logger = createLogger({
  level: "verbose",
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
    new winston.transports.File({ filename: "verbose.log" }),
    new winston.transports.Console(),
  ],
});
async function sendWingridersSwapTx() {
  const seedPhrase = (process.env.SEED_PHRASE || '').split(' ');

  const dexterConfig: DexterConfig = {
    shouldFetchMetadata: true,
    shouldFallbackToApi: true,
    shouldSubmitOrders: true,
  };
  const requestConfig: RequestConfig = {
    timeout: 5000,
    proxyUrl: '',
    retries: 3,
  };
  // const lucidProvider = await new LucidProvider().loadWalletFromSeedPhrase(seedPhrase, undefined, { url: 'https://cardano-mainnet.blockfrost.io/api/v0', projectId: process.env.BLOCKFROST_KEY || '' })
  const lucidProvider = await new LucidProvider().loadWalletFromSeedPhrase(seedPhrase, undefined, { kupoUrl: 'http://192.168.1.73:1442', ogmiosUrl: 'ws://192.168.1.73:1337' })
  const blockfrostProvider = new BlockfrostProvider({ url: 'https://cardano-mainnet.blockfrost.io/api/v0', projectId: process.env.BLOCKFROST_KEY || '' });

  const liquidityPool = new LiquidityPool(
    WingRiders.name,
    'lovelace',
    Asset.fromId("279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f.534e454b"),
    10000000000000n,
    100000000000000n,
    lucidProvider.address(),
  );

  const dexter = new Dexter(dexterConfig, requestConfig)
    .withDataProvider(blockfrostProvider)
    .withWalletProvider(lucidProvider);

  const swapRequest: SwapRequest =
    dexter.newSwapRequest()
      .forLiquidityPool(liquidityPool)
      .withSwapInToken('lovelace')
      .withSwapInAmount(1_000_000n)
      .withSlippagePercent(20);

  const submitted = swapRequest.submit();

  submitted.onSubmitted(() => console.log('submitted'));
  submitted.onSigning(() => console.log('signing'));
  submitted.onSubmitting(() => console.log('submitting'));
  submitted.onFinally(() => console.log('finally'));
  
  logger.info(`TX Status: ${submitted.status}`);
  logger.info(`TX Hash ${submitted.hash}`);
}

sendWingridersSwapTx();