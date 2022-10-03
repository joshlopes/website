import cryptoLogo from '../chains/logo/crypto-org.png';
import nomicLogo from '../images/crypto/nomic/nomic-logo.svg';
import evmosLogo from '../chains/logo/evmos.png';
import cerberusLogo from '../chains/logo/cerberus.png';
import konstellationLogo from '../chains/logo/konstellation.png';
import bitsongLogo from '../chains/logo/bitsong.png';
import chihuahualogo from '../chains/logo/chihuahua.png';
import odinLogo from '../images/crypto/odin/odin_logo.jpeg';
import stargaze from '../chains/logo/stargaze.png';
import cosmos from '../chains/logo/cosmos.png';
import juno from '../chains/logo/juno.png';
import solana from '../images/crypto/solana/solana.png';
import strideLogo from '../chain-registry/stride/images/strd.png';
import rebusLogo from '../images/crypto/rebus/logo.jpg';
import comdexLogo from '../chain-registry/comdex/images/cmdx.png';

const nodesData = [
    {
        slug: 'evmos',
        name: "EVMOs",
        tags: "cosmos",
        logo: evmosLogo,
        stakeUrl: 'https://restake.app/evmos/evmosvaloper19fv2gwkgv3x53lau3um6tzg7qxvq96grvg97zr',
        isEnabled: true,
        isTest: false,
        isPartner: false,
    },
    {
        slug: 'juno',
        name: "Juno",
        tags: "cosmos",
        logo: juno,
        stakeUrl: 'https://restake.app/juno/junovaloper14xmyp2hdd586frvl0d5mpqy5j9rjkt4khdp5hd',
        isEnabled: true,
        isTest: false,
        isWhitelabel: false,
    },
    {
        slug: 'stride',
        name: "Stride",
        tags: "cosmos",
        logo: strideLogo,
        stakeUrl: 'https://restake.app/stride/stridevaloper19twsea48jjup6qrfv55v0fr8hzt7zy4rul5mpg',
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'comdex',
        name: "Comdex",
        tags: "cosmos",
        logo: comdexLogo,
        stakeUrl: 'https://restake.app/comdex/comdexvaloper1zf8k0qlvr0uq4gy73ex9vhjxwlwls7kaxt9jk2',
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'nomic',
        name: "Nomic",
        tags: "cosmos",
        logo: nomicLogo,
        stakeUrl: 'https://app.nomic.io/',
        isEnabled: true,
    },
    {
        slug: 'rebus',
        name: "Rebus",
        tags: "cosmos",
        logo: rebusLogo,
        stakeUrl: 'https://app.rebuschain.com/staking',
        isEnabled: true,
    },
    {
        slug: 'bitsong',
        name: "Bitsong",
        tags: "cosmos",
        logo: bitsongLogo,
        stakeUrl: 'https://restake.app/bitsong/bitsongvaloper1qxw4fjged2xve8ez7nu779tm8ejw92rv0vcuqr',
        isEnabled: true,
    },
    {
        slug: 'solana',
        name: "Solana (Stake2Earn)",
        tags: "solana",
        logo: solana,
        stakeUrl: 'https://solanabeach.io/validator/6559KMdiUseNSAkRcK9WcFcNTppoj6jWtKVedpMkBYCn',
        isEnabled: true,
        isTest: false,
        isPartner: true,
    },
    {
        slug: 'stargaze',
        name: "Stargaze (Bad Kids)",
        tags: "cosmos",
        logo: stargaze,
        stakeUrl: 'https://restake.app/stargaze/starsvaloper1gz645mefvu5emd0llpfjchqqpyuxt0xxq34per',
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'cosmoshub',
        name: "Cosmos Hub (Don Cryptonium)",
        tags: "cosmos",
        logo: cosmos,
        stakeUrl: 'https://restake.app/cosmoshub/cosmosvaloper1rj6324uq904z5zr96zg6ew9qjyau9u6h5nflg6',
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'cryptoorgchain',
        name: "CROnquerorsNode",
        tags: "cosmos",
        logo: cryptoLogo,
        stakeUrl: 'https://restake.app/cryptoorgchain/crocncl1s078nr9kp4ulsxgnsasnr3k6zg5q9erps348eg',
        isEnabled: true,
        price: 0,
        isPartner: true
    },
    {
        slug: 'cerberus',
        name: 'Cerberus',
        tags: "cosmos",
        logo: cerberusLogo,
        stakeUrl: 'https://restake.app/cerberus/cerberusvaloper1c4pewt03f0fnwrf4vcgawzl6pllm3l9kfffu7l',
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'chihuahua',
        name: "Chihuahua",
        tags: "cosmos",
        logo: chihuahualogo,
        stakeUrl: 'https://restake.app/chihuahua/chihuahuavaloper1n7n0rgm37yp8rflxyhw2u75eh6j6tqnp72w5zq',
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'konstellation',
        name: "Konstellation",
        tags: "cosmos",
        logo: konstellationLogo,
        stakeUrl: 'https://restake.app/konstellation/darcvaloper1l4uc54aslmwlzfw3eyspf8sst96p5c609t20x9',
        isEnabled: true,
    },
    {
        slug: 'odin',
        name: "Odin",
        tags: "cosmos",
        logo: odinLogo,
        stakeUrl: 'https://restake.app/odin/odinvaloper1sxvwx7h6wp4hcn3rh2xtl8mv6w0w9mvudd6e3j',
        isEnabled: true,
    },
]

export default nodesData;
