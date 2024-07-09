import { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
} from 'lucide-react';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er' />
          <p className='text-zinc-300 text-lg'>
            Convide seus amigos e planeje a próxima viagem!
          </p>
        </div>

        <div className='space-y-4'>
          <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />
              <input
                type='text'
                disabled={isGuestsInputOpen}
                placeholder='Para onde você vai?'
                className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400' />
              <input
                type='text'
                disabled={isGuestsInputOpen}
                placeholder='Quando?'
                className='bg-transparent text-lg placeholder-zinc-400 w-40 outline-none'
              />
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className='flex items-center gap-2 bg-zinc-800 text-zinc-200 font-medium rounded-lg px-5 py-2 hover:bg-zinc-700 transition-colors duration-300'
              >
                Alterar local/data
                <Settings2 className='size-5' />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className='flex items-center gap-2 bg-lime-300 text-lime-950 font-medium rounded-lg px-5 py-2 hover:bg-lime-400 transition-colors duration-300'
              >
                Continuar
                <ArrowRight className='size-5' />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
              <div className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                <input
                  type='text'
                  placeholder='Quem estará na viagem?'
                  className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                />
              </div>

              <div className='w-px h-6 bg-zinc-800'></div>

              <button className='flex items-center gap-2 bg-lime-300 text-lime-950 font-medium rounded-lg px-5 py-2 hover:bg-lime-400 transition-colors duration-300'>
                Confirmar viagem
                <ArrowRight className='size-5' />
              </button>
            </div>
          )}
        </div>

        <p className='text-small text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a className='text-zinc-300 underline' href='#'>
            termos de uso
          </a>{' '}
          e{' '}
          <a className='text-zinc-300 underline' href='#'>
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
