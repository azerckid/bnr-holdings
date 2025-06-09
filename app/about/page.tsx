export default function AboutPage() {
    return (
        <main className="mx-auto w-full max-w-[1320px] px-4 py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">회사소개</h1>
            <p>비앤알홀딩스는 글로벌 유통 및 소싱 네트워크를 기반으로 다양한 사업을 진행하고 있습니다.</p>
            {/* 3분할 ABOUT US 박스 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1. 2017년 설립 */}
                <div className="rounded-xl bg-blue-50 flex flex-col items-center justify-center p-8 min-h-[320px]">
                    <div className="text-2xl font-bold text-gray-700 mb-4">2017년 설립</div>
                </div>
                {/* 2. 국내 법인 */}
                <div className="rounded-xl bg-blue-100 flex flex-col items-center justify-center p-8 min-h-[320px]">
                    <div className="text-2xl font-bold text-gray-700 mb-4">국내 법인</div>
                    <ul className="text-gray-700 text-base list-disc list-inside text-center">
                        <li>주식회사 비앤알홀딩스</li>
                        <li>주식회사 펨포</li>
                        <li>주식회사 에스엠 글로벌 수산</li>
                        <li>주식회사 예원</li>
                        <li>주식회사 코스모스</li>
                        <li>유한회사 아이엠에이</li>
                    </ul>
                </div>
                {/* 3. 해외 법인 */}
                <div className="rounded-xl bg-blue-200 flex flex-col items-center justify-center p-8 min-h-[320px]">
                    <div className="text-2xl font-bold text-gray-700 mb-4">해외 법인 (중국, 폴란드)</div>
                    <ul className="text-gray-700 text-base list-disc list-inside text-center">
                        <li>MODAMODA EUROPE SP Z O. O.</li>
                        <li>烟台桓博企业管理有限公司</li>
                        <li>B&R CHINA</li>
                    </ul>
                </div>
            </div>
        </main>
    );
} 