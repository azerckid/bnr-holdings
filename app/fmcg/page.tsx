import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FishSymbol, Hamburger, Pill, SoapDispenserDroplet } from "lucide-react";

export default function FMCGPage() {
    return (
        <main className="mx-auto w-full max-w-[1320px] px-4 py-8 space-y-12">
            <p>국내외에서 다양한 일반 소비재 유통 비즈니스를 진행하고 있습니다.</p>
            <h1 className="text-2xl font-bold mb-4 text-center">농축수산물 / 건강기능식품 유통 부문</h1>
            {/* 상단 3단 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 수산물 */}
                <Card className="items-center text-center min-h-[340px] border shadow-none">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl font-semibold text-center whitespace-nowrap flex items-center gap-2">
                            <FishSymbol className="w-11 h-11 text-black-100 stroke-1" />
                            수산물
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                        <div>
                            <ul className="text-sm mb-4 text-left">
                                <p>명태 (Alaska Pollock WR/HG), 가자미 (Flounder Fillet)</p>
                                <p> 코다리</p>
                            </ul>
                        </div>
                        {/* <Image
                            src="/headset_01.jpg"
                            alt="수산물"
                            width={140}
                            height={140}
                            className="mx-auto rounded-md object-contain mt-auto"
                        /> */}
                    </CardContent>
                </Card>
                {/* 식자재 */}
                <Card className="items-center text-center min-h-[340px] border shadow-none">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl font-semibold text-center whitespace-nowrap flex items-center gap-2">
                            <Hamburger className="w-10 h-10 text-black-100 stroke-1" />
                            식자재
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                        <div>
                            <ul className="text-sm mb-4 text-left">
                                <p>돈육, 계육,축산가공품,농산가공품,난백액</p>
                            </ul>
                        </div>
                        {/* <Image
                            src="/headset_01.jpg"
                            alt="건강기능식품"
                            width={140}
                            height={140}
                            className="mx-auto rounded-md object-contain mt-auto"
                        /> */}
                    </CardContent>
                </Card>
                {/* 건강기능식품 */}
                <Card className="items-center text-center min-h-[340px] border shadow-none">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl font-semibold text-center whitespace-nowrap flex items-center gap-2">
                            <Pill className="w-9 h-9 text-black-100 stroke-1" />
                            건강기능식품
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                        <div>
                            <ul className="text-sm mb-4 text-left">
                                <p>코오롱 제약, 영진약품, 일양약품, 뉴트리팜</p>
                            </ul>
                        </div>
                        {/* <Image
                            src="/headset_01.jpg"
                            alt="건강기능식품"
                            width={140}
                            height={140}
                            className="mx-auto rounded-md object-contain mt-auto"
                        /> */}
                    </CardContent>
                </Card>
            </div>
            {/* 하단 2단 */}
            <h1 className="text-2xl font-bold mb-4 text-center">수출 및 해외 마케팅</h1>
            <div className="grid grid-cols-1 gap-8 mt-12 justify-center">
                {/* 모다모다 샴푸 */}
                <Card className="items-center text-center min-h-[340px] border shadow-none mx-auto">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl font-semibold text-center whitespace-nowrap flex items-center gap-2">
                            <SoapDispenserDroplet className="w-10 h-10 text-black-100 stroke-1" />
                            모다모다 샴푸
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                        <div>
                            <ul className="text-sm mb-4 text-left">
                                <p>모다모다 샴푸 중동부 유럽 수출 및 마케팅, 폴란드, 체코, 슬로바키아, 헝가리, 발트3국 등</p>
                            </ul>
                        </div>
                        {/* <Image
                            src="/headset_01.jpg"
                            alt="모다모다 샴푸"
                            width={140}
                            height={140}
                            className="mx-auto rounded-md object-contain mt-auto"
                        /> */}
                    </CardContent>
                </Card>
            </div>
        </main>
    );
} 