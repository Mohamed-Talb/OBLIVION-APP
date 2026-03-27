import { LogOut } from 'lucide-react';
import avatar from '../assets/man-avatar.png';

export const Header = () => {
    return (
        <header className="fixed top-2 left-2 right-2 z-50 mx-auto max-w-[414px] flex items-center justify-between px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-medium rounded-[5px]">
            <div className='flex items-center justify-between w-full'>

                <div className='flex items-center gap-3'>
                    <img src={avatar} alt="Logo" className='w-10 h-10 rounded-full' />
                    <div className='flex flex-col items-start'>
                        <p className='text-sm'>Lachhab Oussama</p>
                        <p className='text-xs text-zinc-400'>@olachhab</p>
                    </div>
                </div>

                <button className="flex items-center">
                    <LogOut className='text-red-500' size={20} />
                </button>

            </div>
        </header>
    );
}