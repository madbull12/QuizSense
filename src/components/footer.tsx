import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/theme-switcher';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground  w-full text-center text-sm">
      © {new Date().getFullYear()} By{' '}
      <Button variant="link" className="p-0 mr-auto" asChild>
        <a href="https://andrian-portfolio-five.vercel.app/">Andrian Lysander</a>
      </Button>

    </footer>
  );
};
