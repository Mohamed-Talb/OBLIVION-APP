import { useState, useRef } from 'react'
import { MapPin, Calendar, Clock9, CloudUpload } from 'lucide-react'

export const AddEventForm = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log({ title, date, time, location, description })
    }

    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full pt-16 pb-24 px-4">
            <div className="w-full max-w-[390px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

                    {/* Title */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Title
                        </label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Event title"
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 pl-3 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="flex gap-2">
                        <div className="flex flex-col items-start gap-1.5 flex-1 w-full">
                            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Date
                            </label>
                            <div className="relative w-full">
                                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 pl-10 pr-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors [color-scheme:dark]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-1.5 flex-1 w-full">
                            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Time
                            </label>
                            <div className="relative w-full">
                                <Clock9 size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 pl-10 pr-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors [color-scheme:dark]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Location
                        </label>
                        <div className="relative w-full">
                            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Conference Room A / Virtual"
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="relative flex flex-col items-center justify-center gap-2 w-full py-8 rounded-xl border-2 border-dashed border-zinc-600 bg-zinc-900/50 cursor-pointer hover:border-purple-500/60 transition-colors overflow-hidden"
                    >
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                        ) : null}
                        <div className={`flex flex-col items-center gap-2 ${imagePreview ? 'relative z-10' : ''}`}>
                            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                <CloudUpload size={20} className="text-white" />
                            </div>
                            <p className="text-sm text-zinc-300 font-medium">Tap to upload image</p>
                            <p className="text-xs text-zinc-500">Aspect ratio 16:9 recommended</p>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>

                    {/* Event Description */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Event Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Tell your attendees what to expect..."
                            rows={4}
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-500 resize-none focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-2">
                        <button
                            type="button"
                            className="flex-1 py-3 rounded-[5px] bg-zinc-800 border border-zinc-700 text-sm font-semibold text-zinc-300 hover:bg-zinc-700 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] py-3 rounded-[5px] bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                        >
                            Create Event
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
