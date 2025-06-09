export default function Footer() {
    return (
        <footer className="w-full border-t bg-white py-6 mt-12 text-center text-sm text-gray-500">
            <div>
                <strong>주식회사 비앤알홀딩스</strong> | 서울 서초구 방배동 방배중앙로 30 지호빌딩<br />
                전화: 02-1234-5678 | 이메일: info@bnrholdings.com
            </div>
            <div className="mt-2">&copy; {new Date().getFullYear()} BNR Holdings. All rights reserved.</div>
        </footer>
    );
} 