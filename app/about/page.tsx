import { Card, CardContent } from "@/components/ui/card";

const history = [
    { year: "2017", event: "비앤알홀딩스 설립", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2018", event: "펨포 설립 및 물류사업 진출", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2019", event: "주식회사 에스엠 글로벌 수산", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2020", event: "주식회사 예원", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2020", event: "주식회사 코스모스", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2021", event: "유한회사 아이엠에이", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2020", event: "해외 법인 설립 (중국, 폴란드)", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2022", event: "MODAMODA EUROPE SP Z O. O.", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2023", event: "烟台桓博企业管理有限公司", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
    { year: "2024", event: "B&R CHINA", description: "설립에 대한 간략한 설명을 넣어주세요. 설립에 대한 간략한 설명을 넣어주세요." },
];

export default function HistoryTimeline() {
    return (
        <div className="relative mx-auto max-w-2xl py-8 mb-16">
            <div className="text-2xl font-bold text-blue-700 mb-4 px-4">History</div>
            <p className="text-sm px-4 text-gray-500 mb-20 text-justify">
                비앤알홀딩스는 2017년 설립되어 글로벌 유통 및 소싱 네트워크를 기반으로 일반소비재, 산업자재, 농축수산물 가공품 등 다양한 유통사업을 진행하고 있으며,
                물류사업 법인 (주)펨포는 국내외 물류센터와 물류네트워크를 기반으로 안정적인 글로벌 물류 서비스를 제공하고 있습니다.
                비앤알홀딩스와 펨포는 유럽과 아시아를 연결하는 글로벌 소싱,유통 및 물류 네트워크를 통하여 지속가능한 미래를 개척하고 있습니다.
            </p>
            {/* 세로선 */}
            <div className="absolute left-1/2 top-60 bottom-0 w-1 bg-blue-100 -translate-x-1/2 z-0 pointer-events-none" />
            <div className="space-y-8 relative z-10 px-4">
                {history.map((item, idx) => (
                    <div key={item.year} className="flex items-center">
                        <div className="w-1/2 flex justify-end pr-8">
                            {idx % 2 === 0 && (
                                <Card className="w-56">
                                    <CardContent className="">
                                        <div className="font-bold text-blue-700">{item.year}</div>
                                        <div className="text-sm">{item.event}</div>
                                        <div className="text-sm text-gray-500">{item.description}</div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                        {/* 타임라인 점 */}
                        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10" />
                        <div className="w-1/2 flex justify-start pl-8">
                            {idx % 2 === 1 && (
                                <Card className="w-56">
                                    <CardContent className="">
                                        <div className="font-bold text-blue-700">{item.year}</div>
                                        <div className="text-sm">{item.event}</div>
                                        <div className="text-sm text-gray-500">{item.description}</div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 