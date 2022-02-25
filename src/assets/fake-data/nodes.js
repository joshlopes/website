import cryptoLogo from '../images/crypto/cronos/crypto/crypto_logo.svg';
import nomicLogo from '../images/crypto/nomic/nomic-logo.svg';
import axelarLogo from '../images/crypto/axelar/Axelar-small-logo.svg';
import evmosLogo from '../images/crypto/evmos/evmos-logo.svg';
import cerberusLogo from '../images/crypto/cerberus/website_logo.png';

const nodesData = [
    {
        name: "CROnquerorsNode (Partner)",
        tags: "cosmos",
        logo: cryptoLogo,
        apr: "15%",
        stakeUrl: 'https://wallet.keplr.app/#/crypto-org/stake?modal=detail&validator=crocncl1s078nr9kp4ulsxgnsasnr3k6zg5q9erps348eg',
        isEnabled: true,
    },
    {
        name: "Nomic",
        tags: "cosmos",
        logo: nomicLogo,
        apr: "900%",
        stakeUrl: 'https://app.nomic.io/',
        isEnabled: true,
    },
    {
        name: 'Cerberus',
        tags: "cosmos",
        logo: cerberusLogo,
        apr: "0%",
        stakeUrl: 'https://cerberus.network/',
        isEnabled: false,
    },
    {
        name: "Axelar",
        tags: "cosmos",
        logo: axelarLogo,
        apr: "0%",
        stakeUrl: '',
        isEnabled: false,
    },
    {
        name: "EVMOs",
        tags: "cosmos",
        logo: evmosLogo,
        apr: "0%",
        stakeUrl: '',
        isEnabled: false,
    },
]

export default nodesData;
