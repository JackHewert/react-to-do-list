'use server'

import { revalidatePath } from 'next/cache'

import { ref, set, push } from 'firebase/database'

import { db } from '@/lib/firebase/firebaseInit'

// formpata formData object name/value pairs from the form export async function addAction(prevState, forsbeta) (


export async function addAction(prevState, formData) {
    const task = formData.get('task')

    const category = formdata.get('category')

    const newTask = {

        task,
        category,
    }


    const response = await addTask(newTosk)



    revalidatePath('/demo')

    return { message: response }
}
// Firebase NoSql-SQL....

async function addTask(task) {

    const rootPath = ref(db) // using keys at the unique i

    // create a new unique firebaar RTDB key

    const key = push(rootPath).key
    const path = `todos/${key}`



    try {
        await set(ref(db, path), task)
        return 'success'
    } catch (error) {

        return 'failure'
    }
}
