import { Address, Constr, getAddressDetails } from "lucid-cardano";

export namespace Sundae {
  export const LP_NFT_POLICY_ID =
    "0029cb7c88c7567b63d1a512c0ed626aa169688ec980730c0473b913";
  export const ESCROW_ADDRESS =
    "addr1wxaptpmxcxawvr3pzlhgnpmzz3ql43n2tc8mn3av5kx0yzs09tqh8";
  export const SCOOPER_FEE = 2_500_000n;
  export const RIDER_FEE = 2_000_000n;
  export const ESCROW_CANCEL_REDEEMER = "d87a80";
  export const ESCROW_SCRIPT_VALIDATOR =
    "59084601000033233322232332232333222323332223322323332223233223233223332223333222233322233223322332233223332223322332233322232323232322222325335300b001103c13503d35303b3357389201035054350003c498ccc888c8c8c94cd4c05c0144d4c0680188888cd4c04c480048d4c0ed40188888888888cd4c078480048ccd5cd19b8f375c0020180440420066a6040006446a6048004446a605000444666aa60302400244a66a6a07c0044266a08c0020042002a0886466a002a088a08a2446600466a609000846a0820024a0806600400e00226a606ca002444444444466a6032240024646464666ae68cdc399991119191800802990009aa82c1119a9a826000a4000446a6aa08a00444a66a6050666ae68cdc78010048150148980380089803001990009aa82b9119a9a825800a4000446a6aa08800444a66a604e666ae68cdc7801003814814080089803001999aa81e3ae335503c75ceb4d4c084cccd5cd19b8735573aa006900011998119aba1500335742a00466a080eb8d5d09aba2500223505135304f33573892010350543100050499262220020183371491010270200035302801422220044800808007c4d5d1280089aab9e500113754002012264a66a6a070601a6aae78dd50008a81a910a99a9a81d0008a81b910a99a9a81e0008a81c910a99a9a81f0008a81d910a99a9a8200008a81e910a99a9a8210008a81f910a99a9a8220008a820910a99a9a8230008a821910a99a9a8240008a822910a99a9a8250008a823910a99a9a82600089999999999825981000a18100090080071810006181000500418100031810002001110a8259a980a1999ab9a3370e6aae754009200023301635742a0046ae84d5d1280111a8211a982019ab9c490103505431000414992622002135573ca00226ea8004cd40148c8c8c8c8cccd5cd19b8735573aa00890001199980d9bae35742a0086464646666ae68cdc39aab9d5002480008cc88cc08c008004c8c8c8cccd5cd19b8735573aa004900011991198148010009919191999ab9a3370e6aae754009200023302d304735742a00466a07a4646464646666ae68cdc3a800a4004466606a6eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d4009200023037304e357426aae7940188d4154d4c14ccd5ce2490350543100054499264984d55cea80189aba25001135573ca00226ea8004d5d09aba2500223504e35304c335738921035054310004d49926135573ca00226ea8004d5d0a80119a81cbae357426ae8940088d4128d4c120cd5ce249035054310004949926135573ca00226ea8004d5d0a80119a81abae357426ae8940088d4118d4c110cd5ce249035054310004549926135573ca00226ea8004d5d0a8019bad35742a00464646464646666ae68cdc3a800a40084605c646464646666ae68cdc3a800a40044606c6464646666ae68cdc39aab9d5002480008cc88cd40f8008004dd69aba15002375a6ae84d5d1280111a8289a982799ab9c491035054310005049926135573ca00226ea8004d5d09aab9e500423333573466e1d40092000233036304b35742a0086eb4d5d09aba2500423504e35304c335738921035054310004d499264984d55cea80109aab9e5001137540026ae84d55cf280291999ab9a3370ea0049001118169bad357426aae7940188cccd5cd19b875003480008ccc0bcc11cd5d0a8031bad35742a00a66a072eb4d5d09aba2500523504a353048335738920103505431000494992649926135573aa00626ae8940044d55cf280089baa001357426ae8940088d4108d4c100cd5ce249035054310004149926135744a00226ae8940044d55cf280089baa0010033350052323333573466e1d40052002201623333573466e1d40092000201623504035303e335738921035054310003f499264984d55ce9baa001002335005200100112001230023758002640026aa072446666aae7c004940c08cd40bcd5d080118019aba2002498c8004d540e088448894cd4d40bc0044008884cc014008ccd54c01c48004014010004c8004d540dc884894cd4d40b400440188854cd4c01cc01000840244cd4c01848004010004488008488004800488848ccc00401000c00880048848cc00400c00880044880084880048004888848cccc00401401000c00880048848cc00400c00880048848cc00400c00880048848cc00400c00880048488c00800c888488ccc00401401000c800484888c00c0108884888ccc00801801401084888c00401080048488c00800c88488cc00401000c800448848cc00400c008480044488c88c008dd5800990009aa80d11191999aab9f0022501223350113355008300635573aa004600a6aae794008c010d5d100180c09aba10011122123300100300211200112232323333573466e1d400520002350083005357426aae79400c8cccd5cd19b87500248008940208d405cd4c054cd5ce24810350543100016499264984d55cea80089baa00112122300200311220011200113500d35300b3357389211f556e6578706563746564205478496e666f20636f6e737472756374696f6e2e0000c498888888888848cccccccccc00402c02802402001c01801401000c00880044488008488488cc00401000c480048c8c8cccd5cd19b875001480088c018dd71aba135573ca00646666ae68cdc3a80124000460106eb8d5d09aab9e500423500c35300a3357389201035054310000b499264984d55cea80089baa001212230020032122300100320012323333573466e1d40052002200823333573466e1d40092000200a2350073530053357389210350543100006499264984d55ce9baa0011200120011261220021220012001112323001001223300330020020014891c0029cb7c88c7567b63d1a512c0ed626aa169688ec980730c0473b9130001";
  export const popularPoolsQuery = `query getPopularPools($pageSize: Int) {  poolsPopular(pageSize: $pageSize) {
      ...ExtendPoolFragment
        }
      }
  
      fragment ExtendPoolFragment on Pool {
        ...PoolFragment
        ...PoolInfoFragment
      }
  
      fragment PoolFragment on Pool {
        assetA {
          ...AssetFragment
        }
        assetB {
          ...AssetFragment
        }
        assetLP {
          ...AssetFragment
        }
        name
        fee
        quantityA
        quantityB
        quantityLP
        ident
        assetID
      }
  
      fragment AssetFragment on Asset {
        assetId
        policyId
        assetName
        decimals
        ticker
        poolId
        totalSupply
        tvl
      }
  
      fragment PoolInfoFragment on Pool {
        tvl
        name
      }`;

}

export namespace Min {


  export const ORDER_ADDRESS = "addr1zxn9efv2f6w82hagxqtn62ju4m293tqvw0uhmdl64ch8uw6j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq6s3z70";

  export const POOL_ADDRESS_LIST = [
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxz2j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq0xmsha",
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxzfgf0jgfz5xdvg2pges20usxhw8zwnkggheqrxwmxd6huuqss46eh",
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxzwccf8ywaly0m99ngq68lus48lmafut7ku9geawu8u6k49suv42qq",
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxz02znpd777wgl9wwpk0dvdzuxn93mqh82q7vv6s9jn25rws52z94g",
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxz2jyskd3y6etkv8ye450545xu6q4jfq5hv4e0uxwkpf8lsq048y90",
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxztnqm37tpj0q63s0qns5wfe4flqzqqg55760472n7yt4v8skpaj3k",
  ];

  export const POOL_ADDRESS_SET = new Set(POOL_ADDRESS_LIST);

  export const FACTORY_POLICY_ID =
    "13aa2accf2e1561723aa26871e071fdf32c867cff7e7d50ad470d62f";
  export const FACTORY_ASSET_NAME = "4d494e53574150";
  export const LP_POLICY_ID =
    "e4214b7cce62ac6fbba385d164df48e157eae5863521b4b67ca71d86";
  export const POOL_NFT_POLICY_ID =
    "0be55d262b29f564998ff81efe21bdc0022621c12f15af08d0f2ddb1";


  export const LP_NFT_POLICY_ID =
    "0be55d262b29f564998ff81efe21bdc0022621c12f15af08d0f2ddb1";
  export const OUTPUT_ADA = 2_000_000n;
  export const BATCHER_FEE = 2_000_000n;

  // 0 is Testnet
  // 1 is Mainnet
  export const STAKE_ORDER_ADDRESS =
    "addr1zxn9efv2f6w82hagxqtn62ju4m293tqvw0uhmdl64ch8uw6j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq6s3z70";

  export enum StepType {
    SWAP_EXACT_IN = 0,
    SWAP_EXACT_OUT,
    DEPOSIT,
    WITHDRAW,
    ONE_SIDE_DEPOSIT,
  }

  export enum MetadataMessage {
    CANCEL_ORDER = "Minswap: Cancel Order",
    SWAP_EXACT_IN_ORDER = "Minswap: Swap Exact In Order",
  }
}

/** Hex */
export declare type PaymentKeyHash = string;
/** Hex */
export declare type ScriptHash = string;
/** Hex */
export declare type StakeKeyHash = string;
/** Hex */
export declare type KeyHash = string | PaymentKeyHash | StakeKeyHash;

export declare type Credential = {
  type: "Key" | "Script";
  hash: KeyHash | ScriptHash;
};
export namespace LucidCredential {
  export function toPlutusData(data: Credential) {
    const constructor = data.type === "Key" ? 0 : 1;
    return new Constr(constructor, [data.hash]);
  }
}

export namespace AddressPlutusData {
  export function toPlutusData(address: Address) {
    const addressDetails = getAddressDetails(address);
    if (addressDetails.paymentCredential === undefined) {
      throw new Error('Incorrect credentials');
    }

    if (addressDetails.type === "Base") {
      const stakeCredConstr = addressDetails.stakeCredential
        ? new Constr(0, [
          new Constr(0, [
            LucidCredential.toPlutusData(addressDetails.stakeCredential),
          ]),
        ])
        : new Constr(1, []);

      return new Constr(0, [
        LucidCredential.toPlutusData(addressDetails.paymentCredential),
        stakeCredConstr,
      ]);
    }
    if (addressDetails.type === "Enterprise") {
      return new Constr(0, [
        LucidCredential.toPlutusData(addressDetails.paymentCredential),
        new Constr(1, []),
      ]);
    }
    throw new Error("only supports base address, enterprise address");
  }
}

export const decimals: { [index: string]: number } = {
  'b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a.634e455441': 0,
  '8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa.4d494c4b': 0,
  '279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f.534e454b': 0,
  'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59': 0,
  'ffb1abe9fe93ee9f13874403a3d4f8addaa65fbf22d5d7f41c087d8e.4d5554414e54': 0,
  '38ad9dc3aec6a2f38e220142b9aa6ade63ebe71f65e7cc2b7d8a8535.434c4159': 4,
  '9f452e23804df3040b352b478039357b506ad3b50d2ce0d7cbd5f806.435456': 0,
}
