import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="py-3 px-5 mx-3 rounded-xl border-2 border-red-900/50 hover:bg-primary-900 hover:text-primary-100  hover:border-2 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-[90%]">
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
