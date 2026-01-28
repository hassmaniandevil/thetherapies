import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTherapyBySlug, getAllTherapySlugs } from '@/data/therapies';
import TherapyPage from '@/components/TherapyPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTherapySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const therapy = getTherapyBySlug(slug);
  if (!therapy) return { title: 'Therapy Not Found' };
  return {
    title: `${therapy.name}${therapy.abbreviation ? ` (${therapy.abbreviation})` : ''}`,
    description: therapy.overview.slice(0, 160),
  };
}

export default async function TherapyDetailPage({ params }: Props) {
  const { slug } = await params;
  const therapy = getTherapyBySlug(slug);
  if (!therapy) notFound();
  return <TherapyPage therapy={therapy} />;
}
