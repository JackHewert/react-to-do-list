import { useFormState } from 'react-dom'

import { toast } from 'sonner'

import { cn } from '@/lib/utils/mergeCss'

import { EditAction } from '@/actions/addTaskAction'

import { FormControl, Input, Label } from '.'
const InitialState = {

    messages: 'default'
}

function EditTaskForm({ children, className }) {

    // formáction is f for server and client communication

    const [state, formAction] = useFormState(addAction, initialState)

    if (state.message === 'success') {
        toast(
            <aside className="bg-green-300 text-Lime-50 rounded-lg py-6 text-center" >
                <p> your toast message was saved successfully</p>
            </aside >
        )
    }









    return (

        <section>
            <header>
                <h2 classlane="text-xs font-light">
                    Form State: <span className="font-bold text-green-500">(state.message)</span>
                </h2>
            </header>

            <form action={formAction} className={cn('space-y-5 bg-white py-8 px-4', className)}>

                <FormControl className="flex flex-col">

                    <Label htmlFor="category">Category</Label>

                    <input id="category" name="category" placeholder="enter the task category" />

                </FormControl>

                <FormControl className="flex flex-col" >

                    <Label htmlfor="task" > Task</Label>

                    <input id="task" name="task" placeholder="enter a new task" />

                </FormControl >

                <FormControl classhame="pt-3" >

                    <button className="bg-black text-white w-full py-2.5 rounded-lg at-3 font-semibold">

                        add new Task

                    </button>

                </FormControl>

            </form >
        </section>
    )
}

export { EditTaskForm }