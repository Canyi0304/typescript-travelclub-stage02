class DateUtil {

    static today(): string {
        
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}-${this.formatNumber(month)}-${this.formatNumber(day)}`;
    }

    private static formatNumber(n: number) {
        
        return n < 10 ? `0${n}` : n;
        //formatNumber 10보다 작으면, 앞에 0을 추가한 문자열로 반환하고, 10 이상인 경우에는 입력된 숫자 그대로 반환
    }
}


export default DateUtil;