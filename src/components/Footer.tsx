import { WithThemeKeyProps } from '@/core/theme/ThemeProvider';
import clsx from 'clsx';
import { darkTheme, styled } from 'lib/stitches.config';

type FooterBeyoungProps = WithThemeKeyProps;

const FooterContainer = styled(`footer`, {
  backgroundColor: `$xx-contrast`,
  p: `$large`,
  marginTop: `$regular`,
});

function Footer({ theme }: FooterBeyoungProps) {
  return (
    <FooterContainer
      className={clsx({
        [`${darkTheme.className}`]: theme === `dark`,
      })}
    >
      <div>
        <h1>Footer</h1>
      </div>
    </FooterContainer>
  );
}

export default Footer;
