import { PageComponentProps } from '@/components/PageComponent';
import { GetServerSidePropsContext } from 'next';
import { initializeThemeState } from './theme/ThemeProvider';

export type ServerSideProps = {
  pageComponentProps: PageComponentProps;
};

type ServerSideCallback<P> = (options: {
  pageComponentProps: Readonly<PageComponentProps>;
  redirect: (location: string, status?: number) => void;
}) => Promise<P>;

export async function getServerSidePropsHelper<P>(
  context: GetServerSidePropsContext,
  cb: ServerSideCallback<P>,
): Promise<{
  props: ServerSideProps;
}> {
  const [{ getPageComponentProps }] = await Promise.all([
    import(`./getPageComponentProps`),
  ]);

  const pageComponentProps = await getPageComponentProps();

  function redirect(location: string, status = 302) {
    context.res.writeHead(status, { Location: location });
    context.res.end();
  }

  try {
    const { $CONFIG, ...componentProps }: Record<string, any> =
      typeof cb === `function`
        ? (await cb({
            pageComponentProps,
            redirect,
          })) || ({} as P)
        : ({} as P);

    if ($CONFIG) {
      Object.assign(pageComponentProps, {
        ...pageComponentProps,
        $CONFIG: {
          ...(pageComponentProps.$CONFIG || {}),
          ...$CONFIG,
        },
      });
    }

    pageComponentProps.themeState = initializeThemeState(
      pageComponentProps.theme.concat(componentProps.theme || []),
    );

    return {
      props: {
        pageComponentProps,
        ...(componentProps as P),
      },
    };
  } catch (e) {
    console.log(e);

    return {
      // Not returning `componentProps` here is expected,
      // because when it errors the page isn't rendered (`_app` handles the error),
      // so `Component` can always expect it's props.
      props: {
        pageComponentProps,
      },
    };
  }
}
