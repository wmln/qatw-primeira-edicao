import { Queue } from "bullmq";

const connection = {
    host: 'paybank-redis',
    port: 6379
}

const queueName = 'twoFactorQueue' //pega no redis

const queue = new Queue(queueName, { connection })

export const getJob = async () => {
    const jobs = await queue.getJobs() // busca todos os jobs
    return jobs[0].data.code
}

export const cleanJobs = async () => {
    await queue.obliterate({ force: true }) // apaga todas as mensagens (jobs) que tem na fila

}