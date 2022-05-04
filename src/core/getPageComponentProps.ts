import { PageComponentProps } from '@/components/PageComponent';
import { INITIAL_THEME_STATE } from './theme/ThemeProvider';

export async function getPageComponentProps(): Promise<PageComponentProps> {
  return {
    theme: [],
    themeState: INITIAL_THEME_STATE,
  };
}
