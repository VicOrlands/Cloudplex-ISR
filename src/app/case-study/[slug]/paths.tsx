import React from "react"
import Mkobo from "./Mkobo"
import Phastpay from "./Phastpay"
import TalentSync from "./TalentSync"
import GtbPensions from "./GtbPensions"
import IdeyFind from "./IdeyFind"
import Convexity from "./Convexity"
import CryptoSmart from "./CryptoSmart"
import Dukia from "./Dukia"
import Edtech from "./IcanTutors"
import Fundus from "./FundusAI"
import Liveli from './Liveli';
import Geria from './Geria';
import Inttix from './Inttix';
import Kobo from './Kobo';
import Jaguar from './Jaguar';
import Bp from './Bp';
import IlearnCloud from './Ilearncloud';
import KoboAccountant from './KoboAccountant';
import FeedXPay from './Feedpay';
import HighMart from './Highmart';
import Qpay from './Qpay';
import Silicon from './Silicon';
import Suba from './Suba';
import Varscon from './Varscon';
import Consodes from "./Consode";
import Bitbarter from "./BitBarter";
import MyBalance from "./Mybalance";

type Path = {
    comp: React.ReactNode;
    url: string;
};

const paths: Path[] = [
    {
        comp: <Bitbarter />,
        url: "from-monolith-to-microservives-bitbarters-journey-to-a-scalable-cloud-architecture"
    },
    {
        comp: <MyBalance />,
        url: "rearchitecting-mybalance-infrastructure-for-cost-efficiency-and-downtime-mitigation"
    },
    {
        comp: <Consodes />,
        url: "consodes-strategic-erp-migration-to-aws-for-enhanced-scalability-and-availability",
    },
    {
        comp: <GtbPensions />,
        url: "case-study-of-gt-pensions-managers",
    },
    {
        comp: <Mkobo />,
        url: "mkobo-uses-cloudplexo-saas-solution",
    },
    {
        comp: <Phastpay />,
        url: "phastpay-collaborated-with-cloudplexo-experts-and-leveraging-on-cloudplexo-saas-solution",
    },
    {
        comp: <TalentSync />,
        url: "talentsync-case-study",
    },
    {
        comp: <IdeyFind />,
        url: "ideyfind-optimizes-e-commerce-platform-for-growth-with-cloudplexo-aws-expertise",
    },
    {
        comp: <Edtech />,
        url: "case-study-in-the-edtech-sector",
    },
    {
        comp: <CryptoSmart />,
        url: "cryptosmart-case-study",
    },
    {
        comp: <Convexity />,
        url: "convexity-case-study",
    },
    {
        comp: <Dukia />,
        url: "dukia-case-study",
    },
    {
        comp: <Fundus />,
        url: "fundusai-case-study",
    },
    {
        comp: <Liveli />,
        url: "liveli-case-study",
    },
    {
        comp: <Geria />,
        url: "geria-case-study",
    },
    {
        comp: <Inttix />,
        url: "inttix-case-study",
    },
    {
        comp: <Kobo />,
        url: "kobo-case-study",
    },
    {
        comp: <Jaguar />,
        url: "jaguar-and-land-rover-case-study",
    },
    {
        comp: <Bp />,
        url: "bp-case-study",
    },
    {
        comp: <IlearnCloud />,
        url: "ilearncloud-case-study",
    },
    {
        comp: <KoboAccountant />,
        url: "koboaccountant-case-study",
    },
    {
        comp: <FeedXPay />,
        url: "feedxpay-case-study",
    },
    {
        comp: <HighMart />,
        url: "highmart-case-study"
    },
    {
        comp: <Qpay />,
        url: "qpay-case-study"
    },
    {
        comp: <Silicon />,
        url: "silicon-case-study"
    },
    {
        comp: <Suba />,
        url: "suba-case-study"
    },
    {
        comp: <Varscon />,
        url: "varscon-case-study"
    },
];

export { paths }