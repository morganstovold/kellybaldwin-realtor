export const revalidate = 300;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return {
    title: `Property ${id}`,
    description: `Property ${id} description`,
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
