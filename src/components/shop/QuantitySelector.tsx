'use client'

type Props = {
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
}

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }: Props) {
    return (
        <div className="flex items-center border border-stone-300 bg-white">
            <button
                onClick={() => onChange(Math.max(min, value - 1))}
                disabled={value <= min}
                className="w-10 h-12 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg"
                aria-label="減少數量"
            >
                −
            </button>
            <span className="w-12 h-12 flex items-center justify-center text-sm font-medium text-charcoal border-x border-stone-300 select-none">
                {value}
            </span>
            <button
                onClick={() => onChange(Math.min(max, value + 1))}
                disabled={value >= max}
                className="w-10 h-12 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg"
                aria-label="增加數量"
            >
                +
            </button>
        </div>
    )
}
