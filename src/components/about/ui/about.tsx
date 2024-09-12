import { SectionHeading } from '~/components/ui/section-heading';
import * as data from '../data.json'

export function About() {
  return (
    <section className="w-full bg-[#141414]">
      <div className="container">
        <SectionHeading title={data.title} />
      </div>
    </section>
  );
}
