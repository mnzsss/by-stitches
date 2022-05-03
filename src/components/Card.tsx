import clsx from 'clsx';
import { createTheme, css, darkTheme, styled } from 'lib/stitches.config';

const CardContainer = styled(`div`, {
  backgroundColor: `$primary`,
  color: `$secondary`,
  borderRadius: 8,
  padding: 24,
  maxWidth: 520,
});

const button = css({
  backgroundColor: `$secondary`,
  color: `$primary`,
  border: 0,
  borderRadius: 8,
  padding: `6px 12px`,
  marginTop: 12,
  fontSize: 12,

  variants: {
    variant: {
      outline: {
        border: 1,
        borderColor: `$primary`,
        color: `$primary`,
        backgroundColor: `transparent`,
      },
    },
  },
});

const productTheme = createTheme({
  colors: {
    primary: `blue`,
  },
});

type ButtonVariant = Parameters<typeof button>[0];
type CardContainer = Parameters<typeof CardContainer>[0];

type CardProps = {
  theme?: 'dark' | 'light';
  cardContainerCss?: CardContainer['css'];
} & ButtonVariant;

export function Card({ theme, variant, css, cardContainerCss }: CardProps) {
  const themeCss = theme === `dark` ? darkTheme : undefined;

  return (
    <CardContainer
      css={cardContainerCss}
      className={clsx(themeCss?.className, productTheme.className)}
    >
      <h1>Hello World</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sequi
        nisi voluptatibus asperiores dolor natus recusandae est consequuntur
        non. Laudantium corrupti rem eligendi reprehenderit. Magni quis aut sed
        quas reprehenderit!
      </p>

      <button
        className={button({
          variant,
          css,
        })}
      >
        See More
      </button>
    </CardContainer>
  );
}
