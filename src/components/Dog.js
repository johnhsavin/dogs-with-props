export default function Dog({name, age, breed, deceased}) {
  return (
<section className="dog-card" style={{ opacity: deceased ? 0.5 : 1.0 }}>
  <h2>{name}</h2>
  <ul>
    <li>Age: {age}</li>
    <li>Breed: {breed}</li>
  </ul>
</section>
  )
}