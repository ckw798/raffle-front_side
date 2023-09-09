//得到抽奖信息

interface Prize {
    id: number;
    name: string;
    level: string;
    image: string;
    index: number;
}

interface Raffle {
    id: string;
    title: string;
    content: string;
    datetime: string;
    deadline: string;
    prize: Prize[];
    times: number;
}


export interface Raffles {
    state: number;
    content: string;
    deadline: string;
    title: string;
    id: string;
    datetime: string;
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
            return (data as any) as Raffle
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


//增加新抽奖

export async function addRaffle(title: string, content: string, deadline: string, times: string) {
    return await $fetch('/background/raffle',
        {
            method: 'POST',
            body: {
                title,
                content,
                deadline,
                times
            }
        })
        .then((data) => { return data; })

}


// 按状态查询抽奖

export async function getRafflesByState(state: number) {
    return await $fetch('/background/state',
        {
            method: 'GET',
            params: { state }
        })
        .then(
            (data) => {
                return (data as any) as Raffles[];
            }
        )
}


//修改抽奖信息
export async function updateRaffle(raffle_id: string, raffle_title: string, raffle_content: string, raffle_deadline: string) {
    return await $fetch('background/update_raffle', {
        method: 'PUT',
        params: {
            raffle_id,
            raffle_title,
            raffle_content,
            raffle_deadline
        }
    })
        .then(
            (data) => {
                return data;
            }
        )
}


// 更改抽奖状态

export async function updateState(state: number, raffle: number) {
    return await $fetch(
        '/background/state', {
        method: 'PUT',
        params: {
            state,
            raffle
        }
    }
    )
        .then(
            (data) => {
                return data;
            }
        )
}


//删除抽奖

export async function deleteRaffle(raffle_id: string) {
    return await $fetch(
        '/background/raffle', {
        method: 'DELETE',
        params: {
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


// 根据id查询抽奖

export async function getRaffleById(raffle_id: string) {
    return await $fetch(
        '/background/raffle', {
        method: 'GET',
        params: {
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



