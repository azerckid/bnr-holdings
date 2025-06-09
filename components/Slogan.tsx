import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Slogan() {
    return (
        <div className="relative w-screen h-[70vh] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[url('/sloganImage.jpeg')] bg-cover bg-center" />
            <div className="absolute inset-0 w-full h-full bg-white/80" />
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Card className="bg-transparent shadow-none w-full h-full flex items-center justify-center">
                    <div className="w-full">
                        <CardHeader>
                            <CardTitle className="text-4xl md:text-5xl font-extrabold text-center break-keep mb-6">
                                글로벌 유통과 물류의 미래,   <div className="h-2" /> BNR Holdings
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mx-auto max-w-3xl text-justify text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                                "주식회사 비앤알홀딩스는 글로벌 유통 및 소싱 네트워크를 기반으로 일반소비재, 산업자재, 농축수산물 가공품 등 다양한 유통사업을 진행하고 있으며,
                                물류사업 법인 (주)펨포는 국내외 물류센터와 물류네트워크를 기반으로 안정적인 글로벌 물류 서비스를 제공하고 있습니다.
                                비앤알홀딩스와 펨포는 유럽과 아시아를 연결하는 글로벌 소싱,유통 및 물류 네트워크를 통하여 지속가능한 미래를 개척하고 있습니다."
                            </p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    );
}