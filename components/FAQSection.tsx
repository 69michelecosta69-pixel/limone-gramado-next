const faqs = [
  {
    question: "Qual o teor alcoólico?",
    answer: "Aproximadamente 30% vol.",
  },
  {
    question: "Como conservar?",
    answer: "Recomendamos manter refrigerado ou no freezer para servir bem gelado.",
  },
  {
    question: "Já está à venda?",
    answer: "Ainda não. O lançamento acontecerá em breve.",
  },
  {
    question: "Posso contratar para eventos?",
    answer: "Sim. Entre em contato para mais informações.",
  },
  {
    question: "Onde encontrar?",
    answer: "Em breve em degustações, eventos e pontos selecionados na Serra Gaúcha.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-spacing">
      <div className="container-limone max-w-4xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mb-6 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Perguntas frequentes</h2>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="surface-card p-4">
              <summary className="cursor-pointer list-none text-base font-semibold">{item.question}</summary>
              <p className="pt-3 text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
