import { Card } from '@/components/Card';
import PageComponent from '@/components/PageComponent';
import { getServerSidePropsHelper } from '@/core/getServerSidePropsHelper';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Home({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageComponent {...pageComponentProps}>
      <Card />
    </PageComponent>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return getServerSidePropsHelper(context, async () => {
    return {
      $CONFIG: {
        footer: {
          theme: `dark`,
        },
      },
    };
  });
}
