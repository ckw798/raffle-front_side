//得到抽奖信息

interface Prize {
    id: number;
    name: string;
    level: string;
    image: string;
    index: number;
}

interface raffle {
    id: string;
    title: string;
    content: string;
    datetime: string;
    deadline: string;
    prize: Prize[];
    times: number;
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
    return await $fetch('/frontpage/draw',
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


//更改用户抽奖次数

export async function handleTimes(raffle_id: string, student_number: string, remaining_times: number) {
    return await $fetch('/background/times',
        {
            method: 'PUT',
            params: {
                raffle_id: raffle_id
            },
            body: { student_number, remaining_times }
        })
        .then(
            (data) => {
                return data;
            }
        )
}