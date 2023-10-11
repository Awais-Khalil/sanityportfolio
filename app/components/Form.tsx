"use client"

import { useRef } from "react"
import { postEntry } from "../action"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function Form() {
    const formRef = useRef<HTMLFormElement>(null)
    const { pending } = useFormStatus()

    return (
        <form
            action={async (formData) => {
                await postEntry(formData)
                formRef.current?.reset()
            }}
            ref={formRef}
            style={{ opacity: pending ? 0.7 : 1 }}

            className="flex items-center relative text-sm mb-5">
            <input type="text" placeholder="Your message ... " name="entry" required
                className="pl-4 pr-32 py-2 mt-1 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300"
                disabled={pending}
            />

            <button type="submit" className="flex items-center text-neutral-900 dark:text-neutral-100 rounded w-16  justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30" disabled={pending}> Send </button>
        </form>
    )
}