
// 获取抽奖记录

interface Prize {
    id: number;
    name: string;
    level: string;
    image: string;
    raffle_id: string;
}

interface Record {
    id: number;
    prize: Prize;
    datetime: string;
}


export async function get_record() {
    return await $fetch('/frontpage/record', {
        method: 'GET'
    }
    ).then(
        (data) => {
            return (data as any) as Record[];
        }
    )
}