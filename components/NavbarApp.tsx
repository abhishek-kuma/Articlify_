'use client';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LuPenSquare } from 'react-icons/lu';
import { ModeToggle } from './Toggle';
import Link from 'next/link';
import authService from '@/Appwrite/auth';
import { useLoginContext } from '@/app/LoginContext'


export interface ContextType {
  status: boolean
  setStatus: Function
}

const NavbarApp = () => {

  const { status, setStatus } = useLoginContext() as ContextType;



  const handleSignOut = async () => {
    try {
      setStatus(false);
      console.log('is signing out');
      await authService.logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    // <nav className="w-4 my-1 mx-2 p-1 flex">
    //   <div className="flex">
    //     <Link href="/" passHref>
    //       <div className="hover:text-zinc-700 flex gap-2 items-center dark:hover:text-zinc-300">
    //         <LuPenSquare />
    //         Articlyfy
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="flex items-center mx-3">
    //     {status && (
    //       <Link href="/" passHref>
    //         Write
    //       </Link>
    //     )}
    //     <div className="mx-5">
    //       <ModeToggle />
    //     </div>

    //     {!status && <div>
    //       <Link href="/signin" passHref>
    //         <Button className="mx-2 w-15 h-8">Sign In</Button>
    //       </Link>
    //       <Link href="/signup" passHref>
    //         <Button className="mx-2 w-15 h-8">Sign Up</Button>
    //       </Link>
    //     </div>}
    //     {
    //       status && <Button className="mx-2 w-15 h-8" onClick={handleSignOut}>
    //         Sign Out
    //       </Button>
    //     }



    //     <Avatar className="mx-10 w-8 h-8">
    //       <AvatarImage src="https://github.com/shadcn.png" />
    //       <AvatarFallback>CN</AvatarFallback>
    //     </Avatar>
    //   </div>
    // </nav>

    <nav className="w-full flex flex-col sm:flex-row items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="hover:text-zinc-700 flex gap-2 items-center dark:hover:text-zinc-300">
            <LuPenSquare />
            <span className="hidden sm:inline">Articlyfy</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        {status ? (
          <Link href="/" passHref>
            <span className="mx-3 cursor-pointer">Write</span>
          </Link>
        ) : (
          <div className="flex items-center">
            <Link href="/signin" passHref>
              <Button className="mx-2">Sign In</Button>
            </Link>
            <Link href="/signup" passHref>
              <Button className="mx-2">Sign Up</Button>
            </Link>
          </div>
        )}
        <div className="mx-3">
          <ModeToggle />
        </div>
        {status && (
          <Button className="mx-2" onClick={handleSignOut}>
            Sign Out
          </Button>
        )}
        <Avatar className="ml-3 w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>





  );
};

export default NavbarApp;

