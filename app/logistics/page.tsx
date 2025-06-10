import { Card, CardContent } from "@/components/ui/card";

export default function LogisticsPage() {
    return (
        <main className="mx-auto w-full max-w-[1320px] px-4 py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">물류사업</h1>
            <p className="text-justify">주식회사 펨포(PEMPO)는 최신 설비와 시스템을 갖춘 국내외 물류센터와 물류 네트워크를 중심으로 다양한 고객의 요구에 대응가능한 맞춤형 물류 서비스를 제공함으로써 대한민국 물류산업의 새로운 기준을 제공합니다.
                풀필먼트 서비스를 기반으로 유통, 수배송, 3PL 및 SEA & AIR 사업을 진행하고 있으며, 다양한 물류서비스 분야를 개척하고 있습니다.</p>

            <section className="mt-24">
                <h2 className="text-2xl font-bold text-center text-blue-700 mt-12 mb-6">해외 사업</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">해외 물류센터(중국, 폴란드)</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>중국 물류센터 (산동성 연태시)</li>
                                    <li>폴란드 물류센터 (바르샤바)</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">풀필먼트 서비스</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>신속한 입출고 및 작업 효율성</li>
                                    <li>재고 관리</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">라스트마일 배송</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>중국 전지역 배송</li>
                                    <li>유럽 전지역 배송</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <section className="mt-24">
                <h2 className="text-2xl font-bold text-center text-blue-700 mt-16 mb-6">국내 사업</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">국내 물류센터</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>국내 물류센터 운영(김포, 여주 외)</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">보관/피앤피/라벨링/재고관리</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>인바운드 / 아웃바운드 / 로컬</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">항공운송</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>미주 / 유럽 / 동남아</li>
                                    <li>Sea & Air</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <section className="mt-24">
                <h2 className="text-2xl font-bold text-center text-blue-700 mt-16 mb-6">사업장 현황</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">김포물류센터</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>인천공항 20km 내외</li>
                                    <li>전용 면적 9,000m²</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">중국물류센터</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>산동성 연태시</li>
                                    <li>전용 120,000m²</li>
                                </ul>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">폴란드물류센터</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>바르샤바 외곽 Sulejówek</li>
                                    <li>전용 1,500m²</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
} 