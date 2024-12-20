import { CORE_CONCEPTS } from './Models/CoreConcepts.js';

// Show coreconcepts function with props
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" idProps={'core-concepts'}>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}