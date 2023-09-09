//封装了奖品相关的api

// 新增奖品
export async function addPrize(name: string, level: string, image: string, amount: number, number_probability: number, raffle_id: string) {
    return await $fetch(
        '/background/prize',
        {
            method: 'POST',
            body: {
                name,
                level,
                image,
                amount,
                number_probability,
                raffle_id
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

export async function updatePrize(prize_id: number, prize_name: string, prize_level: string, prize_amount: number, prize_amount_probability: number
) {
    await $fetch(
        '/background/alter_by_prize',
        {
            method: 'PUT',
            params: {
                prize_id,
                prize_name,
                prize_level,
                prize_amount,
                prize_amount_probability
            }
        }
    )
        .then(
            (data) => {
                return data;
            }
        )
}

