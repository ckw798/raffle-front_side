//封装了奖品相关的api

//

export interface Prize {
    id: number;
    image: string;
    amount_probability: boolean;
    raffle_id: string;
    level: string;
    name: string;
    amount: number;
}


// 新增奖品
export async function addPrize(name: string, level: string, file: any, amount: number, number_probability: boolean, raffle_id: string) {
    return await $fetch(
        '/background/prize',
        {
            method: 'POST',
            params: { raffle_id },
            body: {
                file,
                name,
                level,
                amount,
                number_probability,
            }
        }
    )
        .then(
            (data) => {
                return data;
            }
        )
}


// 修改奖品

export async function updatePrize(prize_id: number, name: string, level: string, amount: number, amount_probability: boolean
) {
    return await $fetch(
        '/background/prize',
        {
            method: 'PUT',
            params: {
                prize_id
            },
            body: {
                name,
                level,
                amount,
                amount_probability
            }
        }
    )
        .then(
            (data) => {
                return data;
            }
        )
}

//按抽奖id获取奖品信息

export async function getPrizes(raffle_id: string) {
    return await $fetch(
        '/background/prize',
        {
            method: 'GET',
            params: {
                raffle_id
            }

        }
    )
        .then(
            (data) => {
                return (data as any) as Prize[];
            }
        )
}