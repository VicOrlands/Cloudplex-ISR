'use client';

import CaseTemplate from './CaseTemplate';

const ClientCaseStudy = ({ caseStudy }: any) => {
    return <CaseTemplate {...caseStudy} key={caseStudy.key} />;
};

export default ClientCaseStudy;
