import TechCard from "./TechCard"

export default function TechGrid({ technologies, addedIds, onAdd })
{
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechCard
            key={tech.id}
          technology={tech}
          isAdded={addedIds.has(tech.id)}
          onAdd={onAdd}
          />
        ))}
    </div>
  )
}
