import * as m from '@/paraglide/messages';
import MovingArrowButton from '../ui/moving-arrow-button';
import { Link } from '@/lib/i18n';

export const SignInButton = () => {
  return (
    <Link href="/dashboard">
      <MovingArrowButton
        className="px-4 py-2 gap-x-1 text-sm font-normal"
        text={m.dashboard()}
      />
    </Link>
  );
};
