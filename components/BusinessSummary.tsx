import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function BusinessSummary() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-center mt-12 mb-6">주요사업구조</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                        <div>
                            <h3 className="text-xl font-semibold text-center mt-6 mb-4">일반소비재 유통</h3>
                            <p className="text-center text-gray-600 ">
                                국내외에서 B2B, B2C, B2E 등 다양한 일반 소비재 유통 비즈니스를 진행하고 있습니다. 주요 취급 품목으로는 농축수산물 가공품, 코스메틱류, 위생용품, 가정용품, 및 건강기능식품 등이 있습니다.
                            </p>
                        </div>
                        <div className="flex justify-center items-end">
                            <Image src="/vitamin_01.jpg" alt="파트너 로고1" width={80} height={32} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                        <div>
                            <h3 className="text-xl font-semibold text-center mt-6 mb-4">풀필먼트 & 3PL 사업</h3>
                            <p className="text-center text-gray-600 ">
                                국내외 창고에서 풀필먼트 서비스 및 3PL 물류사업을 진행하고 있습니다. 특히 중국 산동성 연태시 풀필먼트센터는 부지면적 12만m2, 견축면적 2만m2의 현대화된 대형 자동화 물류센터입니다.
                            </p>
                        </div>
                        <div className="flex justify-center items-end">
                            <Image src="/vitamin_01.jpg" alt="파트너 로고1" width={80} height={32} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                        <div>
                            <h3 className="text-xl font-semibold text-center mt-6 mb-4">글로벌 소싱 부문</h3>
                            <p className="text-center text-gray-600 ">
                                글로벌 소싱 파워를 기반으로 태양광 패널, SCO사업, MRO 공급 등 다양한 프로젝트를 진행하고 있습니다.
                            </p>
                        </div>
                        <div className="flex justify-center items-end">
                            <Image src="/vitamin_01.jpg" alt="파트너 로고1" width={80} height={32} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
} 