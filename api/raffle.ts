//得到抽奖信息

interface Prize {
    id: number;
    name: string;
    level: string;
    image: string;
}

interface raffle {
    id: string;
    title: string;
    datetime: string;
    deadline: string;
    prize: Prize[];
}

export async function get_raffle(raffle_id: string) {
    return await $fetch('/frontpage/index',
        {
            method: 'GET',
            params: {
                raffle_id: raffle_id
            }
        }

    ).then(
        (data) => {
            return (data as any) as raffle
        }
    )
}

export async function startRaffle(
    raffle_id: string
) {
    return await $fetch('/frontpage/get_prize',
        {
            method: 'GET',
            params: {
                raffle_id: raffle_id
            }
        }

    )
        .then(
            (data) => {
                return (data as any) as Prize;
            }
        )
}