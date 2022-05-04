import { composeThemeKey, WithThemeKeyProps } from '@/core/theme/ThemeProvider';
import { styled } from 'lib/stitches.config';

type FooterBeyoungProps = WithThemeKeyProps;

const FooterContainer = styled(`footer`, {
  backgroundColor: `$xx-contrast`,
  p: `$large`,
  marginTop: `$regular`,
});

function Footer({ theme = `dark` }: FooterBeyoungProps) {
  return (
    <FooterContainer data-theme-key={composeThemeKey(`Footer`, theme)}>
      <div data-theme-key={composeThemeKey(`Footer.Section`, theme)}>
        <h1>Footer</h1>
      </div>
    </FooterContainer>
  );
}

export default Footer;
