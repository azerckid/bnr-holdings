import { Card, CardContent } from "@/components/ui/card";

export default function IndustryPage() {
    return (
        <main className="mx-auto w-full max-w-[1320px] px-4 py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">자재 유통</h1>
            <p>산업자재, 글로벌 소싱 등 다양한 프로젝트를 진행하고 있습니다.</p>
            <section className="mt-24">
                <h2 className="text-2xl font-bold text-center text-blue-700 mt-12 mb-6">자재 유통</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">일반자재</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>안전공구</li>
                                    <li>작업공구</li>
                                    <li>기타소모품</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-full border shadow-none bg-gray-200">
                        <CardContent className="flex flex-col justify-between h-[320px] min-h-[320px]">
                            <div>
                                <h3 className="text-xl font-semibold text-center mt-6 mb-4">산업자재</h3>
                                <ul className="text-left text-gray-600 list-disc list-inside">
                                    <li>태양광패널 (TRINA SOLAR Photovoltaic panel)</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </section>

        </main>
    );
} 