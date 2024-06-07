import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { ModeButton } from '@/components/mode-button.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils.ts';
import { X } from 'lucide-react';

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [open, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* navbar for small windows*/}
      <div
        className={cn(
          'border-b flex md:hidden  justify-between dark:text-white pl-6 dark:border-neutral-800 px-2 py-2 items-center sticky top-0 z-[100] bg-white/40 dark:bg-black/40 backdrop-blur',
          open && 'h-screen bg-white/100 dark:bg-black/100 items-start pt-16 w-screen',
        )}
      >
        {open ? (
          <>
            <div className={'flex flex-col  items-start text-xl w-full'}>
              <Link to={'/home'} className={'border-b border-neutral-700 w-full text-center p-6 dark:hover:bg-neutral-900 hover:bg-neutral-400'}>
                Feed
              </Link>{' '}
              <Link to={'/mentors'} className={'border-b border-neutral-700 w-full text-center p-6 dark:hover:bg-neutral-900 hover:bg-neutral-400'}>
                Mentor
              </Link>{' '}
              <Link to={'/profile'} className={'border-b border-neutral-700 w-full text-center p-6 dark:hover:bg-neutral-900 hover:bg-neutral-400'}>
                Profile
              </Link>
            </div>

            <Button variant={'link'} onClick={menuHandler} className={'absolute right-3 top-3'}>
              <X className={'h-5 w-5'} />
            </Button>

            <div className={'absolute left-3 top-3'}>
              <ModeButton />
            </div>
          </>
        ) : (
          <>
            <Link to={'/'}>
              <h1 className={'font-semibold'}>Link-up.</h1>
            </Link>

            {isSignedIn ? (
              <UserButton />
            ) : (
              <>
                <Link to={'/login'}>Login</Link>
                <Link className={'bg-primary dark:text-black text-neutral-200 px-4 py-2 rounded-lg mr-8 my-3'} to={'/signup'}>
                  Signup
                </Link>
              </>
            )}

            <Button variant={'link'} onClick={menuHandler}>
              <Menu className={'h-5 w-5'} />
            </Button>
          </>
        )}
      </div>{' '}
      {/* navbar for large windows*/}
      <div className={'border-b hidden md:flex justify-between dark:text-white pl-6 dark:border-neutral-800 px-2 py-2 items-center sticky top-0 z-[100] bg-white/40 dark:bg-black/40 backdrop-blur'}>
        <Link to={'/'}>
          <h1 className={'font-semibold'}>Link-up.</h1>
        </Link>

        <div className={'flex gap-8 items-center text-sm'}>
          <Link to={'/home'}>Feed</Link>
          <Link to={'/'}>Resources</Link>
          <Link to={'/mentors'}>Mentors</Link>
          <Link to={'/'}>Investors</Link>
          <Link to={'/'}>Entrepreneur</Link>
          <ModeButton />

          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <Link to={'/login'}>Login</Link>
              <Link className={'bg-primary dark:text-black text-neutral-200 px-4 py-2 rounded-lg mr-8 my-3'} to={'/signup'}>
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
