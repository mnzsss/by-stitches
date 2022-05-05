import clsx from 'clsx';
import { createTheme, darkTheme, styled } from 'lib/stitches.config';

const CardContainer = styled(`div`, {
  backgroundColor: `$primary`,
  color: `$secondary`,
  borderRadius: 8,
  padding: 24,
  maxWidth: 520,
});

const Button = styled(`button`, {
  borderRadius: 8,
  marginTop: 12,
  appearance: `none`,
  outline: `none`,

  variants: {
    variant: {
      primary: {
        backgroundColor: `$secondary`,
        color: `$primary`,
        border: 0,
      },
      outline: {
        borderWidth: 1,
        borderColor: `$secondary`,
        color: `$secondary`,
        backgroundColor: `transparent`,
      },
    },
    size: {
      small: {
        padding: `6px 12px`,
        fontSize: 12,
      },
      regular: {
        padding: `8px 16px`,
        fontSize: 16,
      },
    },
  },

  defaultVariants: {
    variant: `primary`,
    size: `small`,
  },
});

const productTheme = createTheme({
  // colors: {
  //   primary: `red`,
  // },
});

type ButtonVariant = Parameters<typeof Button>[0];
type CardContainer = Parameters<typeof CardContainer>[0];

type CardProps = {
  theme?: 'dark' | 'light';
  cardContainerCss?: CardContainer['css'];
  buttonVariant?: ButtonVariant['variant'];
};

export function Card({ theme, buttonVariant, cardContainerCss }: CardProps) {
  const themeCss = theme === `dark` ? darkTheme : undefined;

  const cardContainerProduct = {
    // https://stackoverflow.com/questions/58606868/get-the-key-of-a-nested-object
    '&[data-theme-key=".ProductFormulaContainer.ContainerFormula"]': {
      $colors$primary: `red`,
    },
  };

  return (
    <CardContainer
      css={{ ...cardContainerCss, ...cardContainerProduct }}
      className={clsx(themeCss?.className, productTheme?.className)}
      data-theme-key=".ProductFormulaContainer.ContainerFormula"
    >
      <h1>Hello World</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sequi
        nisi voluptatibus asperiores dolor natus recusandae est consequuntur
        non. Laudantium corrupti rem eligendi reprehenderit. Magni quis aut sed
        quas reprehenderit!
      </p>

      <Button variant={buttonVariant}>See More</Button>
    </CardContainer>
  );
}
