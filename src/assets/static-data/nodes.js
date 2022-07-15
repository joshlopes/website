import cryptoLogo from '../chains/logo/crypto-org.png';
import nomicLogo from '../images/crypto/nomic/nomic-logo.svg';
import evmosLogo from '../chains/logo/evmos.png';
import cerberusLogo from '../chains/logo/cerberus.png';
import konstellationLogo from '../chains/logo/konstellation.png';
import bitsongLogo from '../chains/logo/bitsong.png';
import another1Logo from '../images/crypto/another1/another-1.svg';
import odinLogo from '../images/crypto/odin/odin_logo.jpeg';
import stargaze from '../chains/logo/stargaze.png';
import cosmos from '../chains/logo/cosmos.png';
import juno from '../chains/logo/juno.png';

const nodesData = [
    {
        slug: 'evmos',
        name: "EVMOs",
        tags: "cosmos",
        logo: evmosLogo,
        stakeUrl: 'https://evmos.disperze.network/validators/evmosvaloper19fv2gwkgv3x53lau3um6tzg7qxvq96grvg97zr',
        isEnabled: true,
        isTest: false,
        isPartner: true,
    },
    {
        slug: 'stargaze',
        name: "Stargaze (Bad Kids)",
        tags: "cosmos",
        logo: stargaze,
        stakeUrl: 'https://wallet.keplr.app/#/stargaze/stake?modal=stake&chainId=stargaze-1&validator=starsvaloper1gz645mefvu5emd0llpfjchqqpyuxt0xxq34per',
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'cosmoshub',
        name: "Cosmos Hub (Don Cryptonium)",
        tags: "cosmos",
        logo: cosmos,
        stakeUrl: 'https://ping.pub/cosmos/staking/cosmosvaloper1rj6324uq904z5zr96zg6ew9qjyau9u6h5nflg6',
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'juno',
        name: "Juno (Don Cryptonium)",
        tags: "cosmos",
        logo: juno,
        stakeUrl: 'https://ping.pub/juno/staking/junovaloper1gr56uqre7dsqjkknssne7rc9wunsk08gmh3c7h',
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'cryptoorgchain',
        name: "CROnquerorsNode",
        tags: "cosmos",
        logo: cryptoLogo,
        stakeUrl: 'https://wallet.keplr.app/#/crypto-org/stake?modal=detail&validator=crocncl1s078nr9kp4ulsxgnsasnr3k6zg5q9erps348eg',
        isEnabled: true,
        price: 0,
        isPartner: true
    },
    {
        slug: 'bitsong',
        name: "Bitsong",
        tags: "cosmos",
        logo: bitsongLogo,
        stakeUrl: 'https://ping.pub/bitsong/staking/bitsongvaloper1qxw4fjged2xve8ez7nu779tm8ejw92rv0vcuqr',
        isEnabled: true,
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
        slug: 'konstellation',
        name: "Konstellation",
        tags: "cosmos",
        logo: konstellationLogo,
        stakeUrl: 'https://wallet.konstellation.tech/staking/delegate',
        isEnabled: true,
    },
    {
        slug: 'odin',
        name: "Odin",
        tags: "cosmos",
        logo: odinLogo,
        stakeUrl: 'https://look.chillvalidation.com/odin/staking',
        isEnabled: true,
    },
    {
        slug: 'cerberus',
        name: 'Cerberus',
        tags: "cosmos",
        logo: cerberusLogo,
        stakeUrl: 'https://ping.pub/cerberus/staking/cerberusvaloper1c4pewt03f0fnwrf4vcgawzl6pllm3l9kfffu7l',
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'another1',
        name: "Another1",
        tags: "cosmos",
        logo: another1Logo,
        stakeUrl: 'https://test-anone.zenscan.io/validator.php?addr=onevaloper1d0qd0cdzc2srvfhyqz8xsulh63agh6alex3mwt',
        isEnabled: false,
        isTest: true,
    },
]

export default nodesData;
