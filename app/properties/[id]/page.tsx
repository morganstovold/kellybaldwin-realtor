export const revalidate = 300;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Property ${params.id}`,
    description: `Property ${params.id} description`,
  };
}

export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];
}

export default async function Property({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Property {id}</div>;
}
