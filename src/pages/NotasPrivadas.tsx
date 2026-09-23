import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import { privateNotes } from "../data/mock";

export default function NotasPrivadas() {
  return (
    <section className="flex flex-col gap-space-sm">
      <SectionHeader
        icon="sticky_note_2"
        title="Base de Conocimiento & Notas"
        right={
          <button
            className="bg-primary hover:bg-[#004395] text-on-primary font-label-sm text-label-sm px-3 py-1.5 rounded transition-colors flex items-center gap-1"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            Nueva nota
          </button>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {privateNotes.map((note) => (
          <Card key={note.id} className="p-space-md flex flex-col gap-space-sm">
            <div className="flex items-start justify-between gap-space-sm">
              <h3 className="font-headline-sm text-[14px] font-semibold text-on-surface leading-snug">
                {note.title}
              </h3>
              <span className="material-symbols-outlined text-[18px] text-outline shrink-0">description</span>
            </div>
            <p className="font-body-sm text-[13px] text-on-surface-variant flex-1">{note.excerpt}</p>
            <div className="flex items-center gap-1.5 flex-wrap">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono-metric-sm px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-space-xs border-t border-[#f1f5f9] font-mono-metric-sm text-[11px] text-outline">
              Actualizada {note.updatedAt}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
