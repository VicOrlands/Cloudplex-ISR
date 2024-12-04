'use client';

import CaseTemplate from './CaseTemplate';

const ClientCaseStudy = ({ caseStudy, oldCaseStudy }: any) => {
    if (oldCaseStudy) return oldCaseStudy.comp;

    return <CaseTemplate {...caseStudy} key={caseStudy.key} />;
};

export default ClientCaseStudy;
