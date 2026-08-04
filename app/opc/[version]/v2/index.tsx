"use client";

import HeroSection from "./fold/hero-section";
import PermissionConceptSection from "./fold/permission-concept-section";
import StudentsSection from "./fold/students-section";
import PermissionJourneySection from "./fold/permission-journey-section";
import NextStepSection from "./fold/next-step-section";
import FourthSection from "./fold/fourth-section";
import FifthSection from "./fold/fifth-section";
import SixthSection from "./fold/sixth-section";
import SeventhSection from "./fold/seventh-section";
import EighthSection from "./fold/eighth-section";
import NinthSection from "./fold/ninth-section";
import TenthSection from "./fold/tenth-section";

interface Formv2Props {
	headlineId?: string;
}

export default function Formv2({ headlineId }: Formv2Props) {
	return (
		<>
			<HeroSection headlineId={headlineId} />
			<PermissionConceptSection />
			<StudentsSection />
			<PermissionJourneySection />
			<NextStepSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<EighthSection />
			<NinthSection />
			<TenthSection />
		</>
	);
}