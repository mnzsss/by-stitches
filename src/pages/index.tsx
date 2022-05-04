import { Card } from '@/components/Card';
import PageComponent from '@/components/PageComponent';
import { getServerSidePropsHelper } from '@/core/getServerSidePropsHelper';
import { Theme } from '@/core/interfaces/Theme';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Home({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageComponent {...pageComponentProps}>
      <Card theme="dark" />
    </PageComponent>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return getServerSidePropsHelper(context, async () => {
    const selectedTheme = `dark`;
    const theme: Theme[] = [
      {
        $path: `[data-theme-key^=".Footer:initial"]`,
        $use: [selectedTheme],
      },
    ];

    return {
      theme,
    };
  });
}
