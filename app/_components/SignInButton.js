import { SignInAction } from "../_lib/action";

function SignInButton() {

  //this is a server component so we cant set the onClick 
  //instead we call a "server action" that allows from the browser interactivite with the server 

  return (
    <form action={SignInAction}>
      <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height='24'
          width='24'
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
